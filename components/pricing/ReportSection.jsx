import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";

export default function ReportSection() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row items-center">

                    {/* Content */}
                    <div className="lg:w-1/2 p-10 md:p-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Generate Customized <br />
                            <span className="text-green-600">Pentest Reports</span>
                        </h2>
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            Generate in-depth vulnerability reports with detailed steps for remediation and lightning-fast custom formats for execs & developers.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center px-8 py-4 rounded-lg bg-green-600 text-white font-bold hover:bg-green-700 transition-all duration-200 shadow-lg hover:shadow-green-500/30"
                        >
                            Get Sample Report
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </div>

                    {/* Visual Representation */}
                    <div className="lg:w-1/2 bg-gray-100 h-full min-h-[400px] flex items-center justify-center p-10 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50 opacity-50"></div>

                        {/* Abstract Report Card */}
                        <div className="relative bg-white w-64 h-80 rounded-lg shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 flex flex-col p-6 border border-gray-200 z-10">
                            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-6">
                                <FileText className="w-6 h-6 text-green-600" />
                            </div>
                            <div className="h-4 bg-gray-200 rounded w-3/4 mb-3"></div>
                            <div className="h-3 bg-gray-100 rounded w-full mb-2"></div>
                            <div className="h-3 bg-gray-100 rounded w-5/6 mb-2"></div>
                            <div className="h-3 bg-gray-100 rounded w-full mb-6"></div>

                            <div className="mt-auto flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                                <div className="h-3 bg-gray-200 rounded w-20"></div>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute top-20 right-20 w-20 h-20 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
                        <div className="absolute bottom-20 left-20 w-20 h-20 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
