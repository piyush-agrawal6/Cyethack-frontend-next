import Link from "next/link";
import {
    Shield, Globe, Smartphone, Server, Cloud,
    Database, Lock, FileCheck, Activity,
    Search, Layers, Box, Wifi, ArrowRight
} from "lucide-react";

export default function ServicesList() {
    const vaptServices = [
        {
            title: "Web Application VAPT",
            description: "Identify vulnerabilities like SQLi, XSS, and more in your web apps.",
            icon: Globe,
            href: "/application-security"
        },
        {
            title: "Mobile Application VAPT",
            description: "Secure your iOS and Android apps against reverse engineering and data leaks.",
            icon: Smartphone,
            href: "/application-security"
        },
        {
            title: "Network VAPT",
            description: "Hardening your internal and external network infrastructure.",
            icon: Server,
            href: "/network-security"
        },
        {
            title: "Cloud Security VAPT",
            description: "Comprehensive security assessments for AWS, Azure, and GCP.",
            icon: Cloud,
            href: "/cloud-security"
        },
        {
            title: "IoT Security",
            description: "Protecting the connected world, from firmware to hardware.",
            icon: Wifi,
            href: "/iot-security"
        },
        {
            title: "Red Teaming Assessment",
            description: "Adversary simulation to test your defense and response capabilities.",
            icon: Shield,
            href: "/red-teaming-assessment"
        }
    ];

    const complianceServices = [
        {
            title: "SOC 2 Compliance",
            description: "Prepare for and achieve SOC 2 certification.",
            icon: FileCheck,
            href: "/soc2"
        },
        {
            title: "ISO 27001 Compliance",
            description: "Implement an Information Security Management System (ISMS).",
            icon: Lock,
            href: "/iso27001"
        },
        {
            title: "GDPR Compliance",
            description: "Ensure data privacy and protection for EU citizens.",
            icon: Database,
            href: "/gdpr"
        },
        {
            title: "PCI DSS Compliance",
            description: "Secure credit card transactions and cardholder data.",
            icon: FileCheck,
            href: "/pci-dss-compliance"
        },
        {
            title: "HIPAA Compliance",
            description: "Protect sensitive patient health information.",
            icon: Activity,
            href: "/hipaa-compliance"
        }
    ];

    const specializedServices = [
        {
            title: "Container Security",
            description: "Secure your Docker and Kubernetes environments.",
            icon: Box,
            href: "/container-security"
        },
        {
            title: "Architecture Review",
            description: "Review your system architecture for security flaws.",
            icon: Layers,
            href: "/architecture-review"
        },
        {
            title: "Threat Detection & Response",
            description: "Proactive monitoring and incident response.",
            icon: Search,
            href: "/threat-detection-response"
        },
        {
            title: "Inventory Asset Management",
            description: "Track and manage your digital assets effectively.",
            icon: Database,
            href: "/inventory-asset-management"
        }
    ];

    return (
        <div className="bg-white -mt-20 relative z-10 rounded-t-[3rem] overflow-hidden">

            {/* SECTION 1: VAPT Services (Split Layout) */}
            <section className="py-20 md:py-32 container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    {/* Sticky Sidebar */}
                    <div className="lg:w-1/3 lg:sticky lg:top-32">
                        <span className="text-green-600 font-bold tracking-wider uppercase text-sm mb-2 block">Core Offerings</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">VAPT Services</h2>
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            Our Vulnerability Assessment and Penetration Testing services are designed to uncover weaknesses before attackers do. We cover every aspect of your digital footprint.
                        </p>
                        <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                            <img src="/services/services2.jpg" alt="VAPT Dashboard" className="w-full h-auto" />
                        </div>
                    </div>

                    {/* Grid */}
                    <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {vaptServices.map((service, idx) => {
                            const Icon = service.icon;
                            return (
                                <Link
                                    key={idx}
                                    href={service.href}
                                    className="group bg-gray-50 p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors duration-300">
                                        <Icon className="w-6 h-6 text-gray-900 group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                                    <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                                    <span className="text-green-600 font-bold text-sm flex items-center group-hover:translate-x-1 transition-transform">
                                        Explore <ArrowRight className="ml-1 w-4 h-4" />
                                    </span>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* SECTION 2: Compliance (Dark Theme) */}
            <section className="py-20 md:py-32 bg-gray-900 relative overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-600/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl -ml-32 -mb-32"></div>

                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-green-400 font-bold tracking-wider uppercase text-sm mb-2 block">Regulatory Standards</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Compliance & Governance</h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Navigate the complex landscape of regulatory requirements with our expert guidance and readiness assessments.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {complianceServices.map((service, idx) => {
                            const Icon = service.icon;
                            return (
                                <Link
                                    key={idx}
                                    href={service.href}
                                    className="group bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300"
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="p-3 rounded-lg bg-green-500/20 text-green-400">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white">{service.title}</h3>
                                    </div>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {service.description}
                                    </p>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* SECTION 3: Specialized (Clean Layout with Globe) */}
            <section className="py-20 md:py-32 container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
                    {/* Image Side */}
                    <div className="lg:w-1/3">
                        <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                            <img src="/services/services.jpg" alt="VAPT Dashboard" className="w-[full] h-auto" />
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="lg:w-1/2">
                        <span className="text-green-600 font-bold tracking-wider uppercase text-sm mb-2 block">Advanced Solutions</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Specialized Security Needs</h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {specializedServices.map((service, idx) => {
                                const Icon = service.icon;
                                return (
                                    <Link
                                        key={idx}
                                        href={service.href}
                                        className="group p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200"
                                    >
                                        <Icon className="w-8 h-8 text-green-600 mb-4 group-hover:scale-110 transition-transform" />
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                                        <p className="text-gray-600 text-sm">{service.description}</p>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
