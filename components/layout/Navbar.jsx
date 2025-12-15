"use client";

import { useState, useContext, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // ✅ import
import { ChevronDown, Headset, Menu, Shield, Globe, Network, ArrowRight, Zap, Activity, Server } from "lucide-react";
import MobileMenu from "@/components/layout/MobileMenu";
import MainMenu from "@/components/layout/MainMenu";
import { GlobalContext } from "@/components/Providers";
import useClickOutside from "@/hooks/useClickOutside";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const { toggleMobileMenu } = useContext(GlobalContext);
  const dropdownRef = useRef(null);
  const pathname = usePathname(); // ✅ get current route

  // Handle scroll event to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useClickOutside(dropdownRef, () => {
    setActiveDropdown(null);
  });

  const handleDropdownToggle = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  // ✅ Navbar background logic
  const isHome = pathname === "/";
  const navbarBgClass =
    !isHome || isScrolled || activeDropdown === "services" || activeDropdown === "company" || activeDropdown === "ot-security" || activeDropdown === "cyenet"
      ? "bg-gray-900"
      : "bg-transparent";

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full ${navbarBgClass} transition-colors duration-300`}
      >
        <div className="max-w-[1450px] mx-auto">
          <div className="flex justify-between items-center h-20">
            {/* Logo and main nav */}
            <div className="flex items-center flex-1">
              <Link href="/" className="flex-shrink-0">
                <img src="/logo/logo.png" alt="Logo" className="h-14 w-auto" />
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden xl:ml-10 xl:flex xl:space-x-8">

                {/* Services Dropdown */}
                <div
                  ref={dropdownRef}
                  onMouseEnter={() => handleDropdownToggle("services")}
                  onMouseLeave={() => handleDropdownToggle(null)}
                >
                  <Link
                    href="/services"
                    className="text-white hover:text-green-500 transition-colors duration-200 group inline-flex items-center px-3 py-2 text-sm font-medium"
                  >
                    VAPT Services
                    <ChevronDown
                      className={`ml-1 h-4 w-4 text-white group-hover:text-green-500 transition-transform duration-200 ${activeDropdown === "services" ? "rotate-180" : ""
                        }`}
                    />
                  </Link>
                  <MainMenu activeMenu={activeDropdown} />
                </div>
                {/* OT Security Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => handleDropdownToggle("ot-security")}
                  onMouseLeave={() => handleDropdownToggle(null)}
                >
                  <button
                    className="text-white hover:text-green-500 transition-colors duration-200 group inline-flex items-center px-3 py-2 text-sm font-medium outline-none"
                  >
                    OT Security
                    <ChevronDown
                      className={`ml-1 h-4 w-4 text-white group-hover:text-green-500 transition-transform duration-200 ${activeDropdown === "ot-security" ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  {/* Dropdown Menu */}
                  <div
                    className={`absolute left-0 mt-0 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 ease-in-out ${activeDropdown === "ot-security"
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2"
                      }`}
                  >
                    <div className="py-1">
                      <Link
                        href="/architecture-review"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-green-600"
                      >
                        Architecture Review
                      </Link>
                      <Link
                        href="/threat-detection-response"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-green-600"
                      >
                        Threat Detection & Response
                      </Link>
                      <Link
                        href="/inventory-asset-management"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-green-600"
                      >
                        Inventory Asset Management
                      </Link>
                    </div>
                  </div>
                </div>
                {/* CyeNet Mega Menu */}
                <div
                  className="relative"
                  onMouseEnter={() => handleDropdownToggle("cyenet")}
                  onMouseLeave={() => handleDropdownToggle(null)}
                >
                  <button
                    className="text-white hover:text-green-500 transition-colors duration-200 group inline-flex items-center px-3 py-2 text-sm font-medium outline-none h-full"
                  >
                    CyeNet
                    <ChevronDown
                      className={`ml-1 h-4 w-4 text-white group-hover:text-green-500 transition-transform duration-200 ${activeDropdown === "cyenet" ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  {/* Mega Menu Dropdown */}
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[850px] bg-gray-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ease-in-out z-40 ${activeDropdown === "cyenet"
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2"
                      }`}
                  >
                    <div className="grid grid-cols-12 min-h-[400px]">
                      {/* Left Column: Brand & Vision */}
                      <div className="col-span-5 bg-gradient-to-br from-green-900/40 via-gray-900 to-gray-900 p-8 flex flex-col justify-between relative overflow-hidden">
                        {/* Decorative background elements */}
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
                          <div className="absolute -top-24 -left-24 w-64 h-64 bg-green-500 rounded-full blur-3xl"></div>
                          <div className="absolute top-1/2 right-0 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
                        </div>

                        <div className="relative z-10">
                          <div className="flex items-center gap-2 mb-6">
                            <div className="p-2 bg-green-500/20 rounded-lg border border-green-500/30">
                              <Zap className="w-6 h-6 text-green-400" />
                            </div>
                            <span className="text-xl font-bold text-white tracking-wide">CyeNet</span>
                          </div>
                          <h3 className="text-2xl font-bold text-white leading-tight mb-4">
                            The Ultimate Cyber Defense Ecosystem
                          </h3>
                          <p className="text-gray-400 text-sm leading-relaxed">
                            Everything you need to measure, manage, and reduce your cyber risk and AI-driven threat detection in one powerful platform.
                          </p>
                        </div>

                        <div className="relative z-10 mt-8 flex flex-col gap-3">
                          <Link
                            href="/cyenet"
                            className="inline-flex items-center gap-2 text-sm font-bold text-green-400 hover:text-green-300 transition-colors group/link"
                          >
                            Explore the Platform
                            <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                          </Link>
                          <Link
                            href="/product-updates"
                            className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
                          >
                            <Activity className="w-4 h-4" />
                            View Change Logs
                          </Link>
                        </div>
                      </div>

                      {/* Right Column: Product Suite */}
                      <div className="col-span-7 bg-gray-900/50 p-6 flex flex-col justify-center space-y-2">
                        <Link href="/cyenet#vmdr" className="group/item block">
                          <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-200 border border-transparent hover:border-white/5">
                            <div className="p-3 rounded-lg bg-gray-800 border border-gray-700 group-hover/item:border-green-500/30 group-hover/item:bg-green-500/10 transition-colors">
                              <Shield className="w-6 h-6 text-gray-400 group-hover/item:text-green-400 transition-colors" />
                            </div>
                            <div>
                              <h4 className="text-base font-bold text-white mb-1 group-hover/item:text-green-400 transition-colors">
                                VMDR Platform
                              </h4>
                              <p className="text-sm text-gray-500 leading-snug">
                                Vulnerability Management, Detection & Response.
                              </p>
                            </div>
                          </div>
                        </Link>

                        <Link href="/cyenet#scanning" className="group/item block">
                          <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-200 border border-transparent hover:border-white/5">
                            <div className="p-3 rounded-lg bg-gray-800 border border-gray-700 group-hover/item:border-orange-500/30 group-hover/item:bg-orange-500/10 transition-colors">
                              <Globe className="w-6 h-6 text-gray-400 group-hover/item:text-orange-400 transition-colors" />
                            </div>
                            <div>
                              <h4 className="text-base font-bold text-white mb-1 group-hover/item:text-orange-400 transition-colors">
                                Web Scanner
                              </h4>
                              <p className="text-sm text-gray-500 leading-snug">
                                Next-Gen Vuln Scanner for Web Applications.
                              </p>
                            </div>
                          </div>
                        </Link>

                        <Link href="/cyenet#scanning" className="group/item block">
                          <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-200 border border-transparent hover:border-white/5">
                            <div className="p-3 rounded-lg bg-gray-800 border border-gray-700 group-hover/item:border-blue-500/30 group-hover/item:bg-blue-500/10 transition-colors">
                              <Server className="w-6 h-6 text-gray-400 group-hover/item:text-blue-400 transition-colors" />
                            </div>
                            <div>
                              <h4 className="text-base font-bold text-white mb-1 group-hover/item:text-blue-400 transition-colors">
                                Network Scanner
                              </h4>
                              <p className="text-sm text-gray-500 leading-snug">
                                Deep Network Visibility & Asset Discovery.
                              </p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>




                {/* Company Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => handleDropdownToggle("company")}
                  onMouseLeave={() => handleDropdownToggle(null)}
                >
                  <button
                    className="text-white hover:text-green-500 transition-colors duration-200 group inline-flex items-center px-3 py-2 text-sm font-medium outline-none"
                  >
                    Company
                    <ChevronDown
                      className={`ml-1 h-4 w-4 text-white group-hover:text-green-500 transition-transform duration-200 ${activeDropdown === "company" ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  {/* Dropdown Menu */}
                  <div
                    className={`absolute left-0 mt-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 ease-in-out ${activeDropdown === "company"
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2"
                      }`}
                  >
                    <div className="py-1">
                      <Link
                        href="/about-us"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-green-600"
                      >
                        About Us
                      </Link>
                      <Link
                        href="https://medium.com/@hackrider"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-green-600"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Blogs
                      </Link>
                      <Link
                        href="https://www.youtube.com/@cyethacksolutions6761/videos"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-green-600"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Videos
                      </Link>
                      <Link
                        href="/news"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-green-600"
                      >
                        News
                      </Link>
                    </div>
                  </div>
                </div>

                <Link
                  href="/pricing"
                  className="text-white hover:text-green-500 transition-colors duration-200 px-3 py-2 text-sm font-medium"
                >
                  Pricing
                </Link>
                <Link
                  href="/careers"
                  className="text-white hover:text-green-500 transition-colors duration-200 px-3 py-2 text-sm font-medium"
                >
                  Careers
                </Link>
                <Link
                  href="/contact"
                  className="text-white hover:text-green-500 transition-colors duration-200 px-3 py-2 text-sm font-medium"
                >
                  Contact
                </Link>
              </nav>
            </div>

            {/* Right side buttons */}
            <div className="hidden xl:flex items-center space-x-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white 
             bg-[#3DA64D] hover:bg-green-600 hover:scale-102 hover:shadow-lg
             transition-all duration-300 ease-in-out rounded-sm outline-none border-none"
              >
                <Headset className="w-5 h-5" />
                Speak To Sales
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="xl:hidden flex items-center">
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-green-500 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
              >
                <Menu className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu />
    </>
  );
};

export default Navbar;