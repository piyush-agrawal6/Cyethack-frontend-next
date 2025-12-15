

import React from "react";
import Link from "next/link";
import { Shield, Lock, FileText, CheckCircle, AlertTriangle, Server, Smartphone, Globe, Database, Users, Activity, Layers, Key, Eye, RefreshCw, ArrowRight, Check } from "lucide-react";

export const metadata = {
    title: "CERT-In Compliance for MSMEs",
    description: "From September 2025, all MSMEs in India must undergo a mandatory cybersecurity audit by a CERT-In empanelled auditor. Avoid penalties and secure your business.",
};

export default function CertInAuditPage() {
    return (
        <div className="bg-slate-50 min-h-screen font-sans text-slate-900">
            {/* Hero Section */}
            <section className="relative bg-slate-900 text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/20 via-slate-900 to-slate-900"></div>
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        <div className="flex-1 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 bg-blue-900/30 border border-blue-700/50 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                <span className="text-sm font-medium text-blue-200 tracking-wide">Mandatory for MSMEs</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                                CERT-In Cybersecurity <br className="hidden lg:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Audit for MSMEs</span>
                            </h1>
                            <p className="text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                                Section 70B Compliance is no longer optional. Avoid the <span className="text-white font-semibold">₹1 Crore Penalty</span> and secure your business with Cyethack's expert audit services.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/20 hover:shadow-blue-900/40 hover:-translate-y-0.5"
                                >
                                    Schedule Audit
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                                <Link
                                    href="#overview"
                                    className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-300 bg-slate-800/50 border border-slate-700 rounded-xl hover:bg-slate-800 hover:text-white transition-all backdrop-blur-sm"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>

                        {/* Abstract Visual */}
                        <div className="flex-1 w-full max-w-lg lg:max-w-none relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
                            <div className="relative bg-slate-800/50 border border-slate-700/50 backdrop-blur-md rounded-2xl p-8 shadow-2xl">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-700/50">
                                        <Shield className="w-8 h-8 text-blue-400 mb-2" />
                                        <div className="text-2xl font-bold text-white">100%</div>
                                        <div className="text-xs text-slate-400">Compliance Rate</div>
                                    </div>
                                    <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-700/50">
                                        <Lock className="w-8 h-8 text-emerald-400 mb-2" />
                                        <div className="text-2xl font-bold text-white">Zero</div>
                                        <div className="text-xs text-slate-400">Data Breaches</div>
                                    </div>
                                    <div className="col-span-2 bg-gradient-to-r from-blue-600 to-blue-700 p-4 rounded-xl text-white flex items-center justify-between">
                                        <div>
                                            <div className="font-bold">CERT-In Empanelled</div>
                                            <div className="text-xs text-blue-100">Trusted Auditors</div>
                                        </div>
                                        <CheckCircle className="w-8 h-8 text-white/80" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Overview Section - Bento Grid */}
            <section id="overview" className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Regulatory Overview</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">Understanding the mandate under Section 70B of the IT Act, 2000.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Main Card */}
                        <div className="md:col-span-2 bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-100 rounded-2xl">
                                    <FileText className="w-8 h-8 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">The Mandate</h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        Every <span className="font-semibold text-slate-900">Micro, Small, and Medium Enterprise (MSME)</span> in India must undergo an <span className="font-semibold text-slate-900">annual cybersecurity audit</span> by a CERT-In empanelled auditor. This is a critical requirement to ensure the national cyber ecosystem remains secure.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Penalty Card */}
                        <div className="bg-red-50 rounded-3xl p-8 border border-red-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="p-3 bg-red-100 rounded-2xl w-fit mb-4">
                                <AlertTriangle className="w-8 h-8 text-red-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Non-Compliance Risks</h3>
                            <ul className="space-y-2 mt-4">
                                <li className="flex items-center gap-2 text-red-700 text-sm font-medium">
                                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                                    Penalty up to ₹1 Crore
                                </li>
                                <li className="flex items-center gap-2 text-red-700 text-sm font-medium">
                                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                                    Potential Imprisonment
                                </li>
                                <li className="flex items-center gap-2 text-red-700 text-sm font-medium">
                                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                                    Loss of Contracts
                                </li>
                            </ul>
                        </div>

                        {/* Cyethack Role */}
                        <div className="md:col-span-3 bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
                            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">Why Cyethack?</h3>
                                    <p className="text-slate-300 max-w-xl">
                                        As a trusted cybersecurity partner, <span className="text-white font-semibold">Cyethack</span> guides you through the entire process—from gap analysis to final certification—ensuring a seamless and stress-free audit experience.
                                    </p>
                                </div>
                                <Link href="/contact" className="px-6 py-3 bg-white text-slate-900 font-bold rounded-xl hover:bg-blue-50 transition-colors">
                                    Get Compliant Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why It Matters */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
                        Beyond Compliance
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Users,
                                title: "Safeguard Trust",
                                description: "Protect sensitive customer data and financial assets to build lasting trust.",
                                color: "text-blue-600",
                                bg: "bg-blue-100"
                            },
                            {
                                icon: Shield,
                                title: "Risk Mitigation",
                                description: "Proactively identify and fix vulnerabilities before attackers exploit them.",
                                color: "text-emerald-600",
                                bg: "bg-emerald-100"
                            },
                            {
                                icon: Activity,
                                title: "Business Continuity",
                                description: "Ensure your operations are resilient against ransomware and other disruptions.",
                                color: "text-indigo-600",
                                bg: "bg-indigo-100"
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:-translate-y-1">
                                <div className={`w-14 h-14 ${item.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <item.icon className={`w-7 h-7 ${item.color}`} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                <p className="text-slate-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Scope of Work */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Scope of Work</h2>
                        <p className="text-lg text-slate-600">Comprehensive coverage across your IT infrastructure.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: Server, title: "Asset Inventory", desc: "Network segmentation & firewall review." },
                            { icon: Smartphone, title: "Endpoint Security", desc: "Antivirus, EDR & mobile policies." },
                            { icon: Shield, title: "Vulnerability Mgmt", desc: "Patching & annual VAPT verification." },
                            { icon: Layers, title: "Access Controls", desc: "MFA, Password policies & IAM." },
                            { icon: Database, title: "Data Protection", desc: "Encryption, Backups & DR drills." },
                            { icon: Users, title: "Vendor Risk", desc: "Third-party assessment & contracts." }
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors">
                                <div className="p-3 bg-white rounded-xl shadow-sm text-blue-600">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                                    <p className="text-sm text-slate-600">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 15 Controls - Compact Grid */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        The 15 CERT-In Controls
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            "Effective Asset Management", "Network & Email Security", "Endpoint & Mobile Security",
                            "Secure Configurations", "Patch Management", "Incident Management",
                            "Logging & Monitoring", "Awareness & Training", "Third Party Risk Mgmt",
                            "Data Protection & Backups", "Governance & Compliance", "Robust Password Policy",
                            "Access Control & IAM", "Physical Security", "Vulnerability Audits"
                        ].map((control, idx) => (
                            <div key={idx} className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:bg-slate-800 transition-colors">
                                <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-xs font-bold">
                                    {idx + 1}
                                </div>
                                <span className="text-sm font-medium text-slate-200">{control}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Methodology - Process Flow */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-16">
                        Our Audit Methodology
                    </h2>
                    <div className="relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0"></div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                            {[
                                { step: "01", title: "Gap Analysis", desc: "Initial assessment against controls." },
                                { step: "02", title: "Audit & Validation", desc: "Deep-dive technical assessment." },
                                { step: "03", title: "Remediation", desc: "Guidance to fix identified gaps." },
                                { step: "04", title: "Certification", desc: "Final report & compliance certificate." }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-lg text-center">
                                    <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-blue-200 shadow-lg">
                                        {item.step}
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                                    <p className="text-sm text-slate-600">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Deliverables */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
                        What You Receive
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: "Audit Report", desc: "Detailed findings & remediation steps.", icon: FileText },
                            { title: "Remediation Support", desc: "Expert guidance to close gaps.", icon: RefreshCw },
                            { title: "CERT-In Certificate", desc: "Official proof of compliance.", icon: CheckCircle },
                            { title: "Future Roadmap", desc: "Advisory for ongoing security.", icon: Activity },
                            { title: "Policy Templates", desc: "Ready-to-use documentation.", icon: Layers },
                            { title: "Training Records", desc: "Evidence of employee awareness.", icon: Users }
                        ].map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100 text-center hover:border-blue-200 transition-colors">
                                <item.icon className="w-10 h-10 text-blue-600 mb-4" />
                                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                                <p className="text-sm text-slate-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-blue-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20 -mr-20 -mt-20"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500 rounded-full blur-3xl opacity-20 -ml-20 -mb-20"></div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Secure Your Business Today
                    </h2>
                    <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                        Don't wait for a penalty. Partner with Cyethack for a smooth, professional, and compliant CERT-In audit.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-blue-900 bg-white rounded-xl hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
                    >
                        Get Your Free Quote
                    </Link>
                </div>
            </section>
        </div>
    );
}
