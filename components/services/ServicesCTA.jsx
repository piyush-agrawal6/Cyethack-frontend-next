import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServicesCTA() {
    return (
        <section className="bg-white py-20 md:py-24 border-t border-gray-100">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Ready to secure your <span className="text-green-600">business?</span>
                </h2>
                <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                    Get in touch with our experts to discuss your specific security needs and find the right solution for you.
                </p>

                <div className="flex justify-center gap-4">
                    <Link
                        href="/contact"
                        className="group inline-flex items-center px-8 py-4 rounded-lg bg-green-600 text-white font-bold text-lg hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-green-500/30"
                    >
                        Get a Quote
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                        href="/pricing"
                        className="inline-flex items-center px-8 py-4 rounded-lg border border-gray-300 text-gray-700 font-bold text-lg hover:bg-gray-50 transition-all duration-300"
                    >
                        View Pricing
                    </Link>
                </div>
            </div>
        </section>
    );
}
