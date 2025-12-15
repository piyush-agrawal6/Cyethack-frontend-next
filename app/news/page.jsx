"use client";

import React, { useEffect } from "react";
import { Calendar, Megaphone, Award, TrendingUp, ArrowRight } from "lucide-react";
import useInViewAnimation from "@/hooks/useInViewAnimation";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "@/lib/store/slices/newsSlice";

const NewsCard = ({ item, index }) => {
    const [ref, isVisible] = useInViewAnimation({ threshold: 0.1 });

    // Helper to get icon component based on name or type
    const getIcon = (iconType) => {
        switch (iconType) {
            case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-white" />;
            case 'Megaphone': return <Megaphone className="w-6 h-6 text-white" />;
            case 'Award': return <Award className="w-6 h-6 text-white" />;
            default: return <Megaphone className="w-6 h-6 text-white" />;
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
                    className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center shadow-lg ring-4 ring-white`}
                >
                    {getIcon(item.iconType)}
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm font-medium flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {item.date}
                    </span>
                    <span
                        className={`px-3 py-1 rounded-full ${item.color} bg-opacity-10 text-sm font-bold ${item.color.replace(
                            "bg-",
                            "text-"
                        )}`}
                    >
                        {item.type}
                    </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {item.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                    {item.description}
                </p>

                <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, idx) => (
                        <span
                            key={idx}
                            className="px-3 py-1 rounded-md bg-gray-50 text-gray-500 text-xs font-medium border border-gray-200"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default function NewsPage() {
    const dispatch = useDispatch();
    const { items: newsItems, status } = useSelector((state) => state.news);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchNews());
        }
    }, [status, dispatch]);

    return (
        <div className="min-h-screen bg-gray-50 pt-20">
            {/* Header */}
            <div className="bg-gray-900 text-white py-24">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-indigo-400 text-sm font-bold mb-6 border border-white/10">
                        <Megaphone className="w-4 h-4" />
                        Press Room
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Company News & Announcements
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Latest updates, partnerships, and milestones from the Cyethack team.
                    </p>
                </div>
            </div>

            {/* Timeline */}
            <div className="max-w-5xl mx-auto px-6 py-24">
                {status === 'loading' ? (
                    <div className="text-center">Loading news...</div>
                ) : (
                    <div className="space-y-4">
                        {newsItems.map((item, index) => (
                            <NewsCard key={index} item={item} index={index} />
                        ))}
                    </div>
                )}

                <div className="mt-16 text-center">
                    <button className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-bold rounded-full shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors">
                        Load Older News
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}
