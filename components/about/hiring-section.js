import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HiringSection() {
  return (
    <section className="bg-gray-900 py-20 md:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-green-600 opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-blue-600 opacity-10 blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to make an <span className="text-green-500">impact?</span>
        </h2>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Join our team of cybersecurity professionals and help us build a safer digital future for everyone.
        </p>

        <div className="flex justify-center">
          <Link
            href="/careers"
            className="group inline-flex items-center px-8 py-4 rounded-full bg-green-600 text-white font-bold text-lg hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-green-500/30 transform hover:-translate-y-1"
          >
            View Open Positions
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
