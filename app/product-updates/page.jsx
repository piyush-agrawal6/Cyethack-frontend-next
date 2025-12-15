"use client";

import React, { useEffect } from "react";
import { Calendar, Tag, Shield, CheckCircle, ArrowRight } from "lucide-react";
import useInViewAnimation from "@/hooks/useInViewAnimation";
import { useDispatch, useSelector } from "react-redux";
import { fetchUpdates } from "@/lib/store/slices/updateSlice";

const UpdateCard = ({ update, index }) => {
    const [ref, isVisible] = useInViewAnimation({ threshold: 0.1 });

    const getIcon = (iconType) => {
        switch (iconType) {
            case 'Shield': return <Shield className="w-6 h-6 text-white" />;
            case 'Tag': return <Tag className="w-6 h-6 text-white" />;
            case 'CheckCircle': return <CheckCircle className="w-6 h-6 text-white" />;
            default: return <Shield className="w-6 h-6 text-white" />;
        }
    };

    return (
        <div
            ref={ref}
            className={`relative flex gap-8 mb-12 last:mb-0 transition-all duration-700 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
            style={{ transitionDelay: `${index * 150}ms` }}
        >
            {/* Timeline Line */}
            <div className="absolute left-6 top-16 bottom-[-48px] w-0.5 bg-gray-200 last:hidden"></div>

            {/* Icon */}
            <div className="relative z-10 flex-shrink-0">
                <div
                    className={`w-12 h-12 rounded-full ${update.color} flex items-center justify-center shadow-lg ring-4 ring-white`}
                >
                    {getIcon(update.iconType)}
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm font-medium flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {update.date}
                    </span>
                    <span
                        className={`px-3 py-1 rounded-full ${update.color} bg-opacity-10 text-sm font-bold ${update.color.replace(
                            "bg-",
                            "text-"
                        )}`}
                    >
                        {update.type}
                    </span>
                    {update.version && (
                        <span className="text-sm text-gray-400 font-mono">
                            {update.version}
                        </span>
                    )}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {update.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                    {update.description}
                </p>

                <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">
                        Key Highlights
                    </h4>
                    <ul className="space-y-3">
                        {update.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-gray-700">
                                <div className={`mt-1.5 w-1.5 h-1.5 rounded-full ${update.color}`}></div>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default function ProductUpdatesPage() {
    const dispatch = useDispatch();
    const { items: updates, status } = useSelector((state) => state.updates);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchUpdates());
        }
    }, [status, dispatch]);

    return (
        <div className="min-h-screen bg-gray-50 pt-20">
            {/* Header */}
            <div className="bg-gray-900 text-white py-24">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-green-400 text-sm font-bold mb-6 border border-white/10">
                        <Tag className="w-4 h-4" />
                        What's New
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Product Updates & News
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Stay up to date with our latest platform releases, service enhancements, and security compliance updates.
                    </p>
                </div>
            </div>

            {/* Timeline */}
            <div className="max-w-5xl mx-auto px-6 py-24">
                {status === 'loading' ? (
                    <div className="text-center">Loading updates...</div>
                ) : (
                    <div className="space-y-4">
                        {updates.map((update, index) => (
                            <UpdateCard key={index} update={update} index={index} />
                        ))}
                    </div>
                )}

                <div className="mt-16 text-center">
                    <button className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-bold rounded-full shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors">
                        Load Older Updates
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}
