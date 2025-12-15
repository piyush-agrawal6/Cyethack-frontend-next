import Link from "next/link";
import { CheckCircle, ShieldCheck } from "lucide-react";

export default function TeamIntroSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Image */}
          <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl group">
            <div className="absolute inset-0 bg-gradient-to-tr from-green-900/40 to-transparent z-10"></div>
            <img
              src="/images/workplace.png"
              alt="Team of cybersecurity professionals working together"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Right side - Content */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck className="w-6 h-6 text-green-600" />
              <span className="text-green-600 font-bold uppercase tracking-wider text-sm">Our Expertise</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              World-Class Security <br />
              <span className="text-green-600">Professionals</span>
            </h2>

            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Cyethack brings together a diverse team of certified ethical hackers, security researchers, and compliance experts.
              We specialize in identifying vulnerabilities before they can be exploited, providing you with the strategic advantage needed in today's threat landscape.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
              <div className="space-y-3">
                <h3 className="font-bold text-gray-900 text-xl flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Comprehensive VAPT
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed pl-7">
                  In-depth vulnerability assessments and penetration testing for web, mobile, and network infrastructure.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-bold text-gray-900 text-xl flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Cloud Security
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed pl-7">
                  Securing your cloud environments (AWS, Azure, GCP) with best practice configurations and monitoring.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-bold text-gray-900 text-xl flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Compliance Ready
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed pl-7">
                  Guiding you through SOC 2, ISO 27001, HIPAA, and GDPR compliance journeys with ease.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-bold text-gray-900 text-xl flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Proactive Defense
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed pl-7">
                  Continuous monitoring and threat hunting to detect and neutralize advanced threats.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/services"
                className="px-8 py-3 rounded-lg bg-gray-900 text-white font-medium hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-gray-900/20"
              >
                Explore Services
              </Link>

              <Link
                href="/contact"
                className="px-8 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-all duration-200"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
