import Link from "next/link"
import { ArrowRight, FileText, Activity, LifeBuoy } from "lucide-react"

export default function CommitmentSection() {
  return (
    <section className="bg-gray-50 py-20 md:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row">

          {/* Content Side */}
          <div className="lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-bold mb-6 w-fit">
              <span className="w-2 h-2 rounded-full bg-green-600"></span>
              Our Promise
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              More Than Just a <br />
              <span className="text-green-600">Security Vendor</span>
            </h2>

            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              We act as an extension of your team, providing the expertise and support needed to navigate complex security challenges. Our commitment goes beyond finding bugs; we ensure they are fixed and your overall posture is strengthened.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Actionable Reporting</h4>
                  <p className="text-gray-600 text-sm mt-1">Detailed reports with clear reproduction steps and remediation guidance, not just automated scans.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-50 rounded-xl text-purple-600">
                  <LifeBuoy className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Remediation Support</h4>
                  <p className="text-gray-600 text-sm mt-1">We don't just report problems; we help your developers fix them with dedicated support calls.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-orange-50 rounded-xl text-orange-600">
                  <Activity className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Continuous Monitoring</h4>
                  <p className="text-gray-600 text-sm mt-1">Security isn't a one-time event. We provide ongoing surveillance to catch new threats.</p>
                </div>
              </div>
            </div>

            <div>
              <Link
                href="/contact"
                className="inline-flex items-center text-green-600 font-bold hover:text-green-700 transition-colors group"
              >
                Partner with Us
                <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Image Side */}
          <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-full">
            <img
              src="/images/handshake.png"
              alt="Cybersecurity partnership handshake"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:bg-gradient-to-l lg:from-transparent lg:to-black/10"></div>

            <div className="absolute bottom-8 left-8 right-8 text-white lg:hidden">
              <p className="font-bold text-xl">Securing businesses globally.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
