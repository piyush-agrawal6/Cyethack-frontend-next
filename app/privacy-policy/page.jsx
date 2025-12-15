// app/privacy-policy/page.jsx

import Link from "next/link";
import { ShieldCheck, Mail, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Privacy Policy",
  description: "Learn how Cyethack Solutions collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-10">
      <div className="max-w-[1312px] mx-auto px-6 py-16 lg:py-24">

        {/* --- Header and Breadcrumbs --- */}
        <header className="mb-12">

          <h1 className="font-mukta font-bold text-5xl text-gray-900 flex items-center gap-3">
            <ShieldCheck className="w-10 h-10 text-green-500" />
            Cyethack Solutions: Privacy Policy
          </h1>
          <p className="text-sm text-gray-600 mt-2">
            This policy was last updated **March, 2025**.
          </p>
        </header>

        {/* --- Policy Content Grid --- */}
        <div className="grid lg:grid-cols-3 gap-12">

          {/* Left Column: Table of Contents (Sticky on Desktop) */}
          <nav className="lg:col-span-1 lg:sticky lg:top-[100px] self-start p-6 bg-white border border-gray-200 rounded-xl shadow-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">
              Table of Contents
            </h3>
            <ul className="space-y-3 text-gray-700 text-sm">
              {[
                "Introduction",
                "Information Collection and Use",
                "Types of Data Collected",
                "Use of Data",
                "Transfer of Data",
                "Disclosure of Data",
                "Security of Data",
                "Service Providers",
                "Contact Us",
              ].map((title, index) => (
                <li key={title}>
                  <Link
                    href={`#${title.toLowerCase().replace(/\s/g, '-')}`}
                    className="hover:text-green-600 transition-colors flex items-center"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 text-green-500" />
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Column: Full Policy Text */}
          <div className="lg:col-span-2 space-y-10 text-gray-700 leading-relaxed">

            <section id="introduction">
              <h2 className="font-mukta font-bold text-3xl text-gray-900 mb-4">
                Introduction
              </h2>
              <p>
                Welcome to the website (the **“Site”**) of Cyethack Solutions, Pvt.
                (**“Cyethack Solutions,” “we,” “us,” or “our”**). Cyethack Solutions provides Solution for
                Information Technology Security (mobile and web-based applications) and Operational Technology Security
                for enterprise wise, objective, consistent and real time visibility of cyber risk posture and cybersecurity risk assessment
                (collectively, including the Site, the **"Service"**). This Privacy Policy explains what personal information
                we collect, how we use and share that information, and your choices concerning our information practices.
              </p>
              <p className="mt-4">
                We use your data to provide and improve the Service. By using the Service, you agree to the collection and
                use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms
                used in this Privacy Policy have the same meanings as in our{" "}
                <Link href="https://cyethack.com" className="text-green-600 hover:underline font-medium">
                  Terms and Conditions
                </Link>
                .
              </p>
              <p className="mt-4 text-gray-600">
                **Information Collection and Use:** We collect several different types of information for various purposes
                to provide and improve our Service to you.
              </p>
            </section>

            <section id="types-of-data-collected">
              <h2 className="font-mukta font-bold text-3xl text-gray-900 mb-4">
                Types of Data Collected
              </h2>

              <h3 className="font-mukta font-semibold text-2xl text-gray-800 mt-6 mb-3">
                Personal Data
              </h3>
              <p>
                While using our Service, we may ask you to provide us with certain personally identifiable information
                that can be used to contact or identify you (**“Personal Data”**). Personally identifiable information
                may include, but is not limited to:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1 mt-3">
                <li>**Email address**</li>
                <li>**First name and last name**</li>
                <li>**Phone Number**</li>
                <li>Cookies and Usage Data</li>
              </ul>

              <h3 className="font-mukta font-semibold text-2xl text-gray-800 mt-6 mb-3">
                Usage Data
              </h3>
              <p>
                We may also collect information how the Service is accessed and used (**“Usage Data”**). This Usage Data
                may include information such as your computer’s Internet Protocol address (e.g. IP address), browser type,
                browser version, the pages of our Service that you visit, the time and date of your visit, the time spent
                on those pages, unique device identifiers and other diagnostic data.
              </p>

              <h3 className="font-mukta font-semibold text-2xl text-gray-800 mt-6 mb-3">
                Tracking & Cookies Data
              </h3>
              <p>
                We use **cookies** and similar tracking technologies to track the activity on our Service and hold certain
                information. Cookies are small files that may include an anonymous unique identifier. Tracking
                technologies also used are beacons, tags, and scripts to collect and track information and to improve and
                analyze our Service.
              </p>
              <p className="mt-4 p-4 bg-gray-100 border-l-4 border-green-500">
                You can instruct your browser to **refuse all cookies** or to indicate when a cookie is being sent.
                However, if you do not accept cookies, you may not be able to use some portions of our Service.
              </p>
              <p className="font-medium mt-4">Examples of Cookies we use:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>**Session Cookies:** Used to operate our Service.</li>
                <li>**Preference Cookies:** Used to remember your preferences and various settings.</li>
                <li>**Security Cookies:** Used for security purposes.</li>
              </ul>
            </section>

            <section id="use-of-data">
              <h2 className="font-mukta font-bold text-3xl text-gray-900 mb-4">
                Use of Data
              </h2>
              <p>
                Cyethack Solutions uses the collected data for various purposes, including:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 mt-4">
                <li>To provide and **maintain the Service**.</li>
                <li>To allow you to participate in **interactive features** of our Service when you choose to do so.</li>
                <li>To **notify you about changes** to our Service.</li>
                <li>To provide analysis or valuable information so that we can **improve the Service**.</li>
                <li>To provide **customer care and support**.</li>
                <li>To **detect, prevent and address technical issues**.</li>
              </ul>
            </section>

            <section id="transfer-of-data">
              <h2 className="font-mukta font-bold text-3xl text-gray-900 mb-4">
                Transfer of Data
              </h2>
              <p>
                Your information, including Personal Data, may be transferred to — and maintained on — computers located
                outside of your state, province, country or other governmental jurisdiction where the data protection laws
                may differ than those from your jurisdiction.
              </p>
              <p className="mt-4 p-4 bg-red-50 border-l-4 border-red-500 font-medium">
                If you are located outside **India** and choose to provide information to us, please note that we transfer
                the data, including Personal Data, to India and process it there. Your consent to this Privacy Policy
                followed by your submission of such information represents your agreement to that transfer.
              </p>
              <p className="mt-4">
                Cyethack Solutions will take all steps reasonably necessary to ensure that your data is treated securely
                and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an
                organization or a country unless there are adequate controls in place including the security of your data
                and other personal information.
              </p>
            </section>

            <section id="disclosure-of-data">
              <h2 className="font-mukta font-bold text-3xl text-gray-900 mb-4">
                Disclosure of Data (Legal Requirements)
              </h2>
              <p>
                Cyethack Solution may disclose your Personal Data in the good faith belief that such action is necessary to:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 mt-4">
                <li>To comply with a **legal obligation**.</li>
                <li>To protect and defend the **rights or property** of Cyethack Solution.</li>
                <li>To prevent or investigate possible **wrongdoing** in connection with the Service.</li>
                <li>To protect the **personal safety** of users of the Service or the public.</li>
                <li>To protect against **legal liability**.</li>
              </ul>
            </section>

            <section id="security-of-data">
              <h2 className="font-mukta font-bold text-3xl text-gray-900 mb-4">
                Security of Data
              </h2>
              <p>
                The security of your data is important to us, but remember that no method of transmission over the
                Internet, or method of electronic storage is **100% secure**. While we strive to use commercially
                acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
              </p>
            </section>

            <section id="service-providers">
              <h2 className="font-mukta font-bold text-3xl text-gray-900 mb-4">
                Service Providers
              </h2>
              <p>
                We may employ third party companies and individuals to facilitate our Service (**“Service Providers”**),
                to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing
                how our Service is used.
              </p>
              <p className="mt-4">
                These third parties have access to your Personal Data only to perform these tasks on our behalf and are
                obligated **not to disclose or use it for any other purpose**.
              </p>
            </section>

            <section id="contact-us" className="pt-8 border-t border-gray-200">
              <h2 className="font-mukta font-bold text-3xl text-gray-900 mb-4">
                Contact Us
              </h2>
              <p className="mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="flex items-center text-lg font-medium text-green-600">
                <Mail className="w-5 h-5 mr-3" />
                <a href="mailto:support@cyethack.com" className="hover:underline">
                  support@cyethack.com
                </a>
              </div>
            </section>

          </div>
        </div>

      </div>
    </div>
  );
}