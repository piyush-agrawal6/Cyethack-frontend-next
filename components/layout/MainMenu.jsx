"use client";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const MainMenu = ({ activeMenu }) => {
  // Removed the insights data
  // const insights = [ ... ];

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

  return (
    <div
      className={`absolute bg-gray-900 left-0 w-full shadow-lg border-t border-green-500 transition-all duration-200 ease-in-out hidden md:block ${activeMenu === "services"
        ? "opacity-100 visible"
        : "opacity-0 invisible"
        }`}
      style={{ top: "100%" }}
    >
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* VAPT Main Header - Compact */}
        <div className="mb-4">
          <Link href="/services" className="group inline-block">
            <h2 className="text-xl font-bold text-white group-hover:text-green-500 transition-colors duration-200">
              Our Services
            </h2>
            <p className="text-sm text-gray-400">
              Vulnerability Assessment & Penetration Testing
            </p>
          </Link>
        </div>

        {/* 3 Main Sections in Same Line (Reduced from 4) */}
        <div className="grid grid-cols-3 gap-8">
          {/* IT Security Column */}
          <div>
            <Link
              href="/application-security"
              className="text-base font-semibold text-white hover:text-green-500 transition-colors duration-200 block mb-3 pb-1 border-b border-gray-700"
            >
              IT Security
            </Link>
            <div className="space-y-2">
              {vaptServices["IT Security"].map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group block py-1 transition-colors duration-200"
                >
                  <h4 className="text-sm font-medium text-gray-300 group-hover:text-green-500 transition-colors duration-200">
                    {service.title}
                  </h4>
                </Link>
              ))}
            </div>
          </div>

          {/* OT Security Column with IoT Security below */}
          <div>
            <Link
              href="/iot-security"
              className="text-base font-semibold text-white hover:text-green-500 transition-colors duration-200 block mb-3 pb-1 border-b border-gray-700"
            >
              OT Security
            </Link>
            <div className="space-y-2 mb-4">
              {vaptServices["OT Security"].map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group block py-1 transition-colors duration-200"
                >
                  <h4 className="text-sm font-medium text-gray-300 group-hover:text-green-500 transition-colors duration-200">
                    {service.title}
                  </h4>
                </Link>
              ))}
            </div>

            {/* IoT Security below OT Security */}
            <div className="mt-4 pt-3 border-t border-gray-700">
              <Link
                href="/iot-security"
                className="text-base font-semibold text-white hover:text-green-500 transition-colors duration-200 block mb-2"
              >
                IoT Security
              </Link>
            </div>
          </div>

          {/* Compliance Column (3rd position) */}
          <div>
            <Link
              href="/services"
              className="text-base font-semibold text-white hover:text-green-500 transition-colors duration-200 block mb-3 pb-1 border-b border-gray-700"
            >
              Compliance
            </Link>
            <div className="space-y-2">
              {vaptServices["Compliance"].map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group block py-1 transition-colors duration-200"
                >
                  <h4 className="text-sm font-medium text-gray-300 group-hover:text-green-500 transition-colors duration-200">
                    {service.title}
                  </h4>
                </Link>
              ))}
            </div>
          </div>

          {/* Removed Latest Insights Column */}
        </div>
      </div>
    </div>
  );
};

export default MainMenu;