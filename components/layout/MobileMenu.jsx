"use client";

import { useContext, useState } from "react";
import Link from "next/link";
import { X, ChevronDown, ChevronRight, Headset } from "lucide-react";
import { GlobalContext } from "@/components/Providers";

const MobileMenu = () => {
  const { isMobileMenuOpen, closeMobileMenu } = useContext(GlobalContext);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleSubmenu = (menu) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  const insights = [
    {
      image:
        "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg",
      title: "Cybersecurity Trends",
      description: "Stay updated on the",
      url: "/blog/cybersecurity-trends",
    },
    {
      image:
        "https://images.pexels.com/photos/5380651/pexels-photo-5380651.jpeg",
      title: "Security Best Practices",
      description: "Learn how to protect your",
      url: "/blog/security-best-practices",
    },
  ];

  const vaptServices = {
    "IT Security": [
      {
        href: "/application-security",
        title: "Application Security",
      },
      {
        href: "/network-security",
        title: "Network Security",
      },
      {
        href: "/cloud-security",
        title: "Cloud Security",
      },
      {
        href: "/red-teaming-assessment",
        title: "Red Teaming Assessment",
      },
      {
        href: "/container-security",
        title: "Container Security",
      },
    ],
    "OT Security": [
      {
        href: "/architecture-review",
        title: "Architecture Review",
      },
      {
        href: "/threat-detection-response",
        title: "Threat Detection & Response",
      },
      {
        href: "/inventory-asset-management",
        title: "Inventory Asset Management",
      },
    ],
    Compliance: [
      {
        href: "/soc2",
        title: "SOC 2",
      },
      {
        href: "/iso27001",
        title: "ISO 27001",
      },
      {
        href: "/gdpr",
        title: "GDPR",
      },
      {
        href: "/pci-dss-compliance",
        title: "PCI DSS Compliance",
      },
      {
        href: "/hipaa-compliance",
        title: "HIPAA Compliance",
      },
      {
        href: "/certin-cybersecurity-audit-for-msme",
        title: "CERT-In Audit (MSME)",
      },
    ],
  };

  if (!isMobileMenuOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-900 xl:hidden">
      <div className="p-4 flex items-center justify-between border-b border-green-500">
        <Link href="/" className="flex-shrink-0" onClick={closeMobileMenu}>
          <img src="/logo/logo.png" alt="Logo" className="h-14 w-auto" />
        </Link>
        <button
          onClick={closeMobileMenu}
          className="rounded-md p-2 inline-flex items-center justify-center text-gray-300 hover:text-green-500 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
        >
          <span className="sr-only">Close menu</span>
          <X className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      <div className="py-3 px-4 space-y-1">
        {/* VAPT Services Dropdown */}
        <div>
          <button
            className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-300 hover:text-green-500"
            onClick={() => toggleSubmenu("services")}
          >
            <span>VAPT Services</span>
            <ChevronDown
              className={`ml-2 h-5 w-5 text-gray-300 hover:text-green-500 transform transition-transform duration-200 ${openSubmenu === "services" ? "rotate-180" : ""
                }`}
            />
          </button>
          {openSubmenu === "services" && (
            <div className="pl-5 space-y-4 mt-2">
              {/* IT Security */}
              <div>
                <Link
                  href="/application-security"
                  className="text-sm font-semibold text-white hover:text-green-500 block mb-2"
                  onClick={closeMobileMenu}
                >
                  IT Security
                </Link>
                <div className="pl-3 space-y-1">
                  {vaptServices["IT Security"].map((service) => (
                    <Link
                      key={service.title}
                      href={service.href}
                      className="flex items-center py-1 text-sm text-gray-300 hover:text-green-500"
                      onClick={closeMobileMenu}
                    >
                      <div className="mr-3 h-5 w-5 text-green-500">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                      <span>{service.title}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* OT Security */}
              <div>
                <Link
                  href="/iot-security"
                  className="text-sm font-semibold text-white hover:text-green-500 block mb-2"
                  onClick={closeMobileMenu}
                >
                  OT Security
                </Link>
                <div className="pl-3 space-y-1">
                  {vaptServices["OT Security"].map((service) => (
                    <Link
                      key={service.title}
                      href={service.href}
                      className="flex items-center py-1 text-sm text-gray-300 hover:text-green-500"
                      onClick={closeMobileMenu}
                    >
                      <div className="mr-3 h-5 w-5 text-green-500">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                      <span>{service.title}</span>
                    </Link>
                  ))}
                </div>

                {/* IoT Security */}
                <div className="mt-3 pt-2">
                  <Link
                    href="/iot-security"
                    className="text-sm font-semibold text-white hover:text-green-500 block mb-2"
                    onClick={closeMobileMenu}
                  >
                    IoT Security
                  </Link>
                </div>
              </div>

              {/* Compliance */}
              <div>
                <Link
                  href="/services"
                  className="text-sm font-semibold text-white hover:text-green-500 block mb-2"
                  onClick={closeMobileMenu}
                >
                  Compliance
                </Link>
                <div className="pl-3 space-y-1">
                  {vaptServices["Compliance"].map((service) => (
                    <Link
                      key={service.title}
                      href={service.href}
                      className="flex items-center py-1 text-sm text-gray-300 hover:text-green-500"
                      onClick={closeMobileMenu}
                    >
                      <div className="mr-3 h-5 w-5 text-green-500">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                      <span>{service.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {[
          { href: "/pricing", text: "Pricing" },
        ].map(({ href, text }) => (
          <Link
            key={href}
            href={href}
            className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-green-500"
            onClick={closeMobileMenu}
          >
            {text}
          </Link>
        ))}



        {/* CyeNet Menu */}
        <div>
          <button
            onClick={() => toggleSubmenu("cyenet")}
            className="flex items-center justify-between w-full text-base font-medium text-gray-900 hover:text-green-600 py-2"
          >
            CyeNet Platform
            <ChevronDown
              className={`w-4 h-4 transition-transform ${openSubmenu === "cyenet" ? "rotate-180" : ""
                }`}
            />
          </button>
          {openSubmenu === "cyenet" && (
            <div className="pl-4 mt-2 space-y-2 animate-fade-in-down">
              <Link
                href="/cyenet#vmdr"
                className="block px-4 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-green-600 rounded-lg"
                onClick={closeMobileMenu}
              >
                VMDR Platform
              </Link>
              <Link
                href="/cyenet#scanning"
                className="block px-4 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-green-600 rounded-lg"
                onClick={closeMobileMenu}
              >
                Web Scanner
              </Link>
              <Link
                href="/cyenet#scanning"
                className="block px-4 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-green-600 rounded-lg"
                onClick={closeMobileMenu}
              >
                Network Scanner
              </Link>
              <Link
                href="/product-updates"
                className="block px-4 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-green-600 rounded-lg"
                onClick={closeMobileMenu}
              >
                Change Logs
              </Link>
            </div>
          )}
        </div>

        {/* Company Dropdown */}
        <div>
          <button
            className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-300 hover:text-green-500"
            onClick={() => toggleSubmenu("company")}
          >
            <span>Company</span>
            <ChevronDown
              className={`ml-2 h-5 w-5 text-gray-300 hover:text-green-500 transform transition-transform duration-200 ${openSubmenu === "company" ? "rotate-180" : ""
                }`}
            />
          </button>
          {openSubmenu === "company" && (
            <div className="pl-5 space-y-1 mt-1">
              <Link
                href="/about-us"
                className="block py-2 text-sm font-medium text-gray-300 hover:text-green-500"
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
              <Link
                href="https://medium.com/@hackrider"
                className="block py-2 text-sm font-medium text-gray-300 hover:text-green-500"
                onClick={closeMobileMenu}
                target="_blank"
                rel="noopener noreferrer"
              >
                Blogs
              </Link>
              <Link
                href="https://www.youtube.com/@cyethacksolutions6761/videos"
                className="block py-2 text-sm font-medium text-gray-300 hover:text-green-500"
                onClick={closeMobileMenu}
                target="_blank"
                rel="noopener noreferrer"
              >
                Videos
              </Link>
            </div>
          )}
        </div>

        {[
          { href: "/contact", text: "Contact" },
          { href: "/careers", text: "Careers" },
        ].map(({ href, text }) => (
          <Link
            key={href}
            href={href}
            className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-green-500"
            onClick={closeMobileMenu}
          >
            {text}
          </Link>
        ))}

        {/* Latest Insights Section */}
        <div className="mt-6 px-3 border-t border-green-500 pt-4">
          <h3 className="text-sm font-semibold text-white mb-3">
            Latest Insights
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {insights.map((insight, index) => (
              <div key={index}>
                <div className="bg-gray-800 h-[150px] w-full flex items-center justify-center overflow-hidden">
                  <img
                    src={insight.image || "/placeholder.svg"}
                    alt={insight.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="mt-2 text-sm font-medium text-gray-300">
                  {insight.title}
                </h4>
                <p className="mt-1 text-xs text-gray-500">
                  {insight.description}
                </p>
                <Link
                  href={insight.url}
                  className="mt-1 flex items-center text-xs font-medium text-gray-300 hover:text-green-500"
                  onClick={closeMobileMenu}
                >
                  Read more
                  <ChevronRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
