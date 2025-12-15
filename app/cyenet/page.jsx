"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import {
  Zap,
  CheckCircle2,
  Lock, // Used for Network/Asset Discovery
  Activity, // Used for Collaboration/MTTR
} from "lucide-react";

// --- Custom Hook: Intersection Observer for Scroll Animations ---
const useInViewAnimation = (options) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return [ref, isVisible];
};

// --- Enhanced Counter Component ---
const AnimatedCounter = ({ target, isVisible, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let current = 0;
    const increment = target / 40;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 30);
    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

// --- 1. HERO SECTION (With TILT ANIMATION on Hover) ---
const HeroSection = () => {
  // New images representing the unified dashboard/attack surface
  const dashboardImages = [
    "/product/p1.png", // New Placeholder for VMDR Risk Dashboard
    "/product/p2.png", // New Placeholder for Web Scanner Config
    "/product/p3.png", // New Placeholder for Remediation Calendar
  ];
  const carouselRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const intervalTime = 5000; // 5 seconds

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % dashboardImages.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, intervalTime);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section className="relative pt-20 pb-28 bg-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-color-gray-800)_0%,_transparent_70%)]"></div>
      <div className="relative max-w-[1312px] mx-auto px-6 text-center">
        {/* Animated Tag */}
        <span className="inline-flex items-center gap-2 mb-4 px-4 py-1 text-sm font-medium rounded-full bg-green-700/30 text-green-400 border border-green-500/50 animate-fade-in-down">
          <Zap className="w-4 h-4" /> The Engine of Proactive Cyber Defense
        </span>

        {/* Main Title */}
        <h1 className="font-mukta font-bold text-6xl md:text-8xl leading-tight mb-6 animate-fade-in">
          CyeNet: <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-500">
            Unify, Detect, and Defend
          </span>
        </h1>

        {/* Subtext */}
        <p className="max-w-3xl mx-auto text-xl text-gray-400 mb-10 animate-fade-in delay-200">
          The next-generation unified platform for **VMDR, Web/Network Scanning,
          and AI-driven Collaboration**. Actively manage and reduce risk across
          your entire attack surface from a single pane of glass.
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-4 animate-fade-in delay-400">
          <Link
            href="#demo"
            className="inline-block px-10 py-4 text-lg font-bold rounded-full bg-green-500 text-gray-900 shadow-lg hover:bg-green-400 transition-all transform hover:scale-[1.02]"
          >
            Request a Demo Today
          </Link>
          <Link
            href="#pillars"
            className="inline-block px-10 py-4 text-lg font-medium rounded-full border border-gray-600 text-white hover:bg-gray-800 transition-colors"
          >
            Explore Core Pillars
          </Link>
        </div>

        {/* Product Image Placeholder (VMDR Dashboard) */}
        <div className="mt-20 [perspective:1000px] animate-fade-in delay-600">
          <div
            ref={carouselRef}
            className="w-full h-auto bg-gray-800/50 border border-gray-700 rounded-xl shadow-2xl overflow-hidden transform rotate-x-6 hover:rotate-x-0 transition-transform duration-700 ease-out hover:rotate-z-1 hover:rotate-x-3" // ADDED TILT HOVER
          >
            <div className="p-4 bg-gray-800 flex items-center">
              <div className="flex space-x-2">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              </div>
              <p className="flex-1 text-center text-sm text-gray-500">
                cyenet.dashboard/unified-security-view
              </p>
            </div>

            {/* Dashboard Visual Area - Full Width Carousel Layout */}
            <div className="relative aspect-[16/9] bg-gray-900/80">
              {/* Inner carousel track/image container */}
              <div className="w-full h-full relative">
                {dashboardImages.map((src, index) => (
                  <img
                    key={index}
                    src={src || "/placeholder.svg"}
                    alt={`CyeNet Unified Dashboard View ${index + 1}`}
                    className={`w-full h-full object-cover rounded-b-lg absolute top-0 left-0 transition-opacity duration-700 ease-in-out
                                            ${index === activeIndex
                        ? "opacity-100 block"
                        : "opacity-0 hidden"
                      }
                                        `}
                  />
                ))}

                {/* Navigation Dots */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                  {dashboardImages.map((_, index) => (
                    <div
                      key={`dot-${index}`}
                      className={`w-2 h-2 rounded-full cursor-pointer transition-colors duration-300
                                                ${index === activeIndex
                          ? "bg-green-500"
                          : "bg-gray-500 hover:bg-gray-400"
                        }
                                            `}
                      onClick={() => setActiveIndex(index)}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- 2. WHY CHOOSE CYENET (Animation Applied) ---
const WhyChooseCyeNetSection = () => {
  const [ref, isVisible] = useInViewAnimation({ threshold: 0.2 });

  // Content from "Why Choose CyeNet?" section
  const benefits = [
    {
      title: "Risk-Aligned Defense",
      description:
        "We shift you from reactive handling to proactive defense. Our AI-driven prioritization ensures your team focuses exclusively on the top 5% of threats that genuinely impact your organization's bottom line.",
      metric: 35, // 35% reduction in MTTR
      metricLabel: "MTTR Reduction",
      details:
        "35% faster Mean Time to Remediate through collaborative workflows.",
    },
    {
      title: "94% Security Visibility",
      description:
        "CyeNet integrates robust Web and Network Scanning, delivering a comprehensive audit of all application and infrastructure components. Achieve total visibility into your entire digital estate.",
      metric: 94,
      metricLabel: "Visibility Improvement",
      details:
        "Total visibility across servers, services, APIs, and IoT devices in a single view.",
    },
    {
      title: "Data-Driven Decisions",
      description:
        "Our platform transforms raw data into a definitive, real-time security snapshot. Track your security maturity with quantifiable metrics like resolution trends and CyeNet Risk Scores (CRS).",
      metric: 2.1,
      metricLabel: "Resolution Trend",
      details:
        "Target a resolution rate improvement of 2.1% month-over-month.",
    },
  ];

  const getColorClass = (color) => {
    // Keeping the original structure, though only blue is used in the map function, we keep the return fixed to green styling for consistency.
    const map = {
      blue: {
        bg: "bg-blue-50",
        text: "text-blue-600",
        hoverShadow: "shadow-blue-500/30",
      },
    };
    return map[color];
  };

  return (
    <section id="pillars" className="py-32 bg-white" ref={ref}>
      <div className="max-w-[1312px] mx-auto px-6">
        <div className="mb-24">
          <h2
            className={`font-mukta font-bold text-5xl md:text-7xl text-gray-900 mb-6 ${isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
          >
            Core Pillars of
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-500">
              CyeNet
            </span>
          </h2>
          <div
            className={`h-1 w-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mb-8 ${isVisible ? "animate-fade-in delay-200" : "opacity-0"
              }`}
          />
          <p
            className={`text-xl text-gray-600 max-w-3xl leading-relaxed ${isVisible ? "animate-fade-in delay-300" : "opacity-0"
              }`}
          >
            CyeNet shifts your organization from reactive vulnerability handling
            to proactive, risk-aligned defense. By integrating robust scanning,
            AI-driven prioritization, and seamless collaboration, we reduce your
            average **time-to-remediate (MTTR) by 35%** and improve overall
            security visibility by **94%**.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            // Using a generic blue/green styling as per the original component's intent
            const classes = getColorClass("blue");
            return (
              <div
                key={index}
                className={`p-8 bg-gradient-to-b from-gray-50 to-white border-t-2 border-green-500 transition-all duration-500 hover:from-green-50/50 hover:to-white ${isVisible ? "animate-fade-in-up" : "opacity-0"
                  }`}
                style={{
                  animationDelay: isVisible ? `${index * 150}ms` : "0s",
                }}
              >
                <div className="mb-6">
                  <p className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-500">
                    {/* Handle the 2.1% metric which isn't an integer */}
                    {benefit.title === "Data-Driven Decisions" ? (
                      <span>
                        {isVisible ? (
                          <AnimatedCounter
                            target={2.1} // Using 21 for counter and manually adding decimal/suffix
                            isVisible={isVisible}
                          />
                        ) : (
                          "0"
                        )}
                        .1%
                      </span>
                    ) : (
                      <span>
                        {isVisible ? (
                          <AnimatedCounter
                            target={benefit.metric}
                            isVisible={isVisible}
                          />
                        ) : (
                          "0"
                        )}
                        %
                      </span>
                    )}
                  </p>
                  <p className="text-sm text-gray-600 font-semibold uppercase tracking-wider mt-2">
                    {benefit.metricLabel}
                  </p>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {benefit.description}
                </p>
                <p className="text-sm text-gray-600 font-medium italic border-t pt-4">
                  {benefit.details}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// --- 3. VMDR (Vulnerability Management, Detection, and Response) - Quantifiable Results Layout ---
const VMDRSection = () => {
  const [ref, isVisible] = useInViewAnimation({ threshold: 0.3 });

  // Content from "VMDR" section
  const results = [
    {
      metric: 6.9, // This will be complex to animate perfectly as an integer, aiming for 7 and adding .9
      label: "CyeNet Risk Score (CRS)",
      detail:
        "Assets dynamically assigned a risk score based on real-time exploitability and business context.",
      suffix: " / 10",
    },
    {
      metric: 63,
      label: "Total Active Vulnerabilities",
      detail:
        "Real-time tracking of all security weaknesses across the entire digital estate.",
      suffix: "+",
    },
    {
      metric: 5,
      label: "Focus on Top Threats",
      detail:
        "Prioritization model ensures focus on the top 5% of threats that genuinely impact the business.",
      suffix: "%",
    },
  ];

  return (
    <section id="vmdr" className="py-32 bg-gradient-to-b from-gray-50 to-white" ref={ref}>
      <div className="max-w-[1312px] mx-auto px-6">
        <div className="mb-24">
          <h2
            className={`font-mukta font-bold text-5xl md:text-7xl text-gray-900 mb-4 ${isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
          >
            VMDR: From Chaos to Clarity.
          </h2>
          <div
            className={`h-1 w-20 bg-green-500 rounded-full mb-8 ${isVisible ? "animate-fade-in delay-200" : "opacity-0"
              }`}
          />
          <p
            className={`text-xl text-gray-600 max-w-3xl leading-relaxed ${isVisible ? "animate-fade-in delay-300" : "opacity-0"
              }`}
          >
            CyeNet’s VMDR transforms raw vulnerability data into highly
            prioritized, actionable security tasks. Our system ensures your
            resources are always aligned with the greatest threats.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-0 border-t-2 border-gray-200">
          {results.map((result, index) => (
            <div
              key={index}
              className={`p-12 border-b-2 md:border-b-0 md:border-r-2 border-gray-200 last:border-r-0 transition-all duration-500 hover:bg-green-50/50 ${isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
              style={{ animationDelay: isVisible ? `${index * 150}ms` : "0s" }}
            >
              <p className="text-7xl font-bold text-gray-900 mb-2">
                {/* Custom animation logic for 6.9 and 63+ */}
                {result.metric === 6.9 ? (
                  <span>
                    {isVisible ? (
                      <AnimatedCounter
                        target={69}
                        isVisible={isVisible}
                      /> // Animate to 69 then display 6.9
                    ) : (
                      "0"
                    )}
                    .9
                    {result.suffix}
                  </span>
                ) : (
                  <span>
                    {isVisible ? (
                      <AnimatedCounter
                        target={result.metric}
                        isVisible={isVisible}
                      />
                    ) : (
                      "0"
                    )}
                    {result.suffix}
                  </span>
                )}
              </p>
              <p className="text-sm font-bold text-green-600 uppercase tracking-wider mb-4">
                {result.label}
              </p>
              <p className="text-gray-700 leading-relaxed">{result.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- 4. VMDR FEATURES GRID (Web Scanner, Network Scanner, Collaboration) ---
const FeaturePillarsGrid = () => {
  const [ref, isVisible] = useInViewAnimation({ threshold: 0.1 });

  // Content from sections 2, 3, 4, 5 condensed into a feature grid format
  const featuresList = [
    {
      title: "Risk-Based Prioritization (VMDR)",
      description:
        "Assets receive a CyeNet Risk Score (CRS) based on exploitability and business context. Focus exclusively on the critical few, ignoring the low-impact noise.",
      icon: Zap,
    },
    {
      title: "Deep-Dive Vulnerability Forensics (VMDR)",
      description:
        "Every finding, like 'Server Leaks Version Information,' is backed by a full technical report: CVSS Score (e.g., 5.0), CWE (e.g., CWE-487), and complete Request/Response Headers.",
      icon: CheckCircle2,
    },
    {
      title: "Web Scanner: Unrivaled Coverage (DAST)",
      description:
        "Integrated Web Scanner conducts deep, non-intrusive analysis of live applications, finding an average of 224 vulnerabilities per asset. Full control over scan types, crawl depth, and speed.",
      icon: Lock,
    },
    {
      title: "Network Scanner: Automated Discovery",
      description:
        "Comprehensive audit of all network-connected components. Effortlessly map servers, identify open ports, active services, and critical configuration weaknesses for a defensible perimeter.",
      icon: Lock,
    },
    {
      title: "Vulnerability Lifecycle & Accountability",
      description:
        "Track every vulnerability through defined statuses (New, Resolved, False Positive). Assign clear ownership and set mandatory Deadlines (e.g., Sep 30, 2025) to enforce accountability and reduce MTTR.",
      icon: Activity,
    },
    {
      title: "CyeBot (AI Assistant) & Reporting",
      description:
        "Our conversational AI provides instant support for analysts on vulnerability assessment and incident response. Generate boardroom-ready VMDR Analysis Reports in PDF instantly (e.g., 3.2 MB).",
      icon: Zap,
    },
  ];

  return (
    <section id="features" className="py-32 bg-white" ref={ref}>
      <div className="max-w-[1312px] mx-auto px-6">
        <div className="mb-24">
          <h2
            className={`font-mukta font-bold text-5xl md:text-7xl text-gray-900 mb-4 ${isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
          >
            Feature-Rich and
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-500">
              Data-Driven Capabilities
            </span>
          </h2>
          <div
            className={`h-1 w-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mb-8 ${isVisible ? "animate-fade-in delay-200" : "opacity-0"
              }`}
          />
          <p
            className={`text-xl text-gray-600 max-w-3xl leading-relaxed ${isVisible ? "animate-fade-in delay-300" : "opacity-0"
              }`}
          >
            A unified security engine combining cutting-edge VMDR, precise
            application scanning, total network visibility, and intelligent
            collaboration tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-0 border-t-2 border-l-2 border-gray-200">
          {featuresList.map((feature, index) => {
            const Icon = feature.icon; // Dynamic icon based on content
            return (
              <div
                key={index}
                className={`p-12 border-r-2 border-b-2 border-gray-200 last:border-b-0 md:even:border-r-0 transition-all duration-500 hover:bg-gray-50 ${isVisible ? "animate-fade-in" : "opacity-0"
                  }`}
                style={{ animationDelay: isVisible ? `${index * 80}ms` : "0s" }}
              >
                <div className="flex items-start gap-4">
                  <Icon className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// --- 5. WEB/NETWORK SCANNER (Interactive Tabbed View) ---
const ScanningEngineSection = () => {
  const [ref, isVisible] = useInViewAnimation({ threshold: 0.1 });
  const [activeTab, setActiveTab] = useState(0); // State to manage active tab

  // Content from Web Scanner and Network Scanner sections
  const scanContent = [
    {
      title: "Web Scanner: Unrivaled Coverage Depth",
      description:
        "Pinpoint application flaws with enterprise-grade precision. Our DAST engine identifies an average of 224 vulnerabilities per asset, providing continuous monitoring and detailed asset context including IP, Port, Status Code, and Technology (e.g., nginx/1.18.0).",
      image: "/product/cyenet_web_scan_config.png", // Placeholder for Web Scanner Config
    },
    {
      title: "Configurable Scanning Engine",
      description:
        "Optimize scan effectiveness with granular control. Define Scan Types (Reconnaissance vs. Active), Crawl Depth (e.g., 5 levels), Max Links to Crawl (e.g., 15), and Speed Optimization (Slow, Medium, or Quick) to ensure coverage without disruption.",
      image: "/product/cyenet_web_scan_detail.png", // Placeholder for Scan Configuration Details
    },
    {
      title: "Network Scanner: Defensible Perimeter",
      description:
        "Deliver a comprehensive audit of all network-connected components. Automated asset discovery, service and port enumeration, and identification of critical configuration weaknesses for total visibility of your network perimeter.",
      image: "/product/cyenet_network_scanner.png", // Placeholder for Network Scanner View
    },
    {
      title: "Unified Risk Aggregation",
      description:
        "Seamlessly combine network and application risk data to generate a single, highly accurate Average Risk Score (e.g., 4.7 for complex assets). This enables truly integrated, single-source-of-truth security decisions across your entire digital estate.",
      image: "/product/cyenet_unified_risk_score.png", // Placeholder for Unified Risk Score
    },
  ];

  const currentContent = scanContent[activeTab];

  return (
    <section id="scanning" className="py-32 bg-gradient-to-b from-gray-50 to-white" ref={ref}>
      <div className="max-w-[1312px] mx-auto px-6">
        <div className="mb-16">
          <p
            className={`text-sm font-bold text-green-600 uppercase tracking-wider mb-4 ${isVisible ? "animate-fade-in delay-100" : "opacity-0"
              }`}
          >
            Web & Network Scanning
          </p>
          <h2
            className={`font-mukta font-bold text-5xl md:text-6xl text-gray-900 mb-4 ${isVisible ? "animate-fade-in-up delay-200" : "opacity-0"
              }`}
          >
            Precision Scanning Engines
          </h2>
          <div
            className={`h-1 w-16 bg-green-500 rounded-full mb-8 ${isVisible ? "animate-fade-in delay-300" : "opacity-0"
              }`}
          />
          <p
            className={`text-lg text-gray-700 leading-relaxed max-w-3xl ${isVisible ? "animate-fade-in delay-400" : "opacity-0"
              }`}
          >
            Our integrated Web and Network Scanners ensure no part of your attack
            surface is left unchecked, providing comprehensive DAST and network
            auditing in a single, unified view.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left Side: Clickable Feature Titles & Description */}
          <div className="lg:w-1/2 w-full space-y-4">
            {scanContent.map((item, index) => (
              <div
                key={index}
                className={`group cursor-pointer p-6 rounded-lg border transition-all duration-300
                            ${activeTab === index
                    ? "bg-green-50 border-green-500 shadow-md"
                    : "bg-white border-gray-200 hover:border-gray-400"
                  }
                            ${isVisible ? "animate-fade-in-left" : "opacity-0"
                  }`}
                style={{
                  animationDelay: isVisible ? `${500 + index * 100}ms` : "0s",
                }}
                onClick={() => setActiveTab(index)}
              >
                <h3
                  className={`font-bold text-xl mb-2 ${activeTab === index
                    ? "text-green-700"
                    : "text-gray-900 group-hover:text-green-600"
                    }`}
                >
                  {item.title}
                  {/* Active Indicator Arrow/Icon */}
                  <span
                    className={`float-right transition-transform duration-300 ${activeTab === index ? "rotate-90" : "rotate-0"
                      }`}
                  >
                    &gt;
                  </span>
                </h3>
                {/* Description shown only for the active tab on hover/click */}
                {activeTab === index && (
                  <p className="text-gray-700 mt-2 leading-relaxed animate-fade-in">
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Right Side: Image/Platform View (Sticky on large screens) */}
          <div className="lg:w-1/2 w-full sticky top-28">
            <div
              className={`relative aspect-[4/3] bg-gray-200 border-2 border-gray-300 rounded-xl shadow-2xl overflow-hidden transition-all duration-700
                          ${isVisible
                  ? "animate-fade-in-right delay-600"
                  : "opacity-0"
                }`}
            >
              <img
                key={activeTab} // Key changes to force transition on image source change
                src={currentContent.image || "/placeholder.svg"}
                alt={`Scanning Security: ${currentContent.title}`}
                className="w-full h-full object-cover rounded-xl transition-opacity duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900/10 rounded-xl">
                <p className="text-xl font-semibold text-white text-shadow-md">
                  {currentContent.title}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- 6. COLLABORATION (TOOL BREAKDOWN Layout) ---
const CollaborationSection = () => {
  const [ref, isVisible] = useInViewAnimation({ threshold: 0.1 });

  // Content from "Team Management and Collaboration" section
  const lifecycleItems = [
    "Track vulnerability statuses: New, Resolved, Duplicate, False Positive, and Not Applicable.",
    "Assign clear ownership to team members (e.g., John, Piyush, Arti) for accountability.",
    "Set and track mandatory Deadlines (e.g., Sep 30, 2025) to manage MTTR.",
    "Centralized in-platform commenting to eliminate fragmented email chains.",
    "Integrated Remediation Calendar to visualize and manage all scheduled efforts.",
  ];
  const advancedItems = [
    "Secure, scoped collaboration with External Security Partners (e.g., UrbanMart, Protector Corp).",
    "Real-time alerts via the Notification Center across Assets, Scans, Teams, and Reports.",
    "CyeBot (AI Assistant) for instant resource support on VA and Incident Response.",
    "Professional Reporting & Audits: Generate boardroom-ready VMDR Analysis Reports (PDF, 3.2 MB).",
    "Instant access to a curated Knowledge Base (318+ threat entries, OWASP Top 10) for context.",
  ];

  return (
    <section className="py-32 bg-white" ref={ref}>
      <div className="max-w-[1312px] mx-auto px-6">
        <div className="mb-24">
          <h2
            className={`font-mukta font-bold text-5xl md:text-7xl text-gray-900 mb-4 ${isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
          >
            Unrivaled Collaboration
          </h2>
          <div
            className={`h-1 w-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mb-8 ${isVisible ? "animate-fade-in delay-200" : "opacity-0"
              }`}
          />
          <p
            className={`text-xl text-gray-600 max-w-3xl leading-relaxed ${isVisible ? "animate-fade-in delay-300" : "opacity-0"
              }`}
          >
            CyeNet’s collaboration suite is engineered to break down silos,
            resulting in an average **35% reduction in MTTR** across our client
            base through collaborative, accountable workflows.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-0 border-t-2 border-l-2 border-gray-200">
          {/* Vulnerability Lifecycle & Accountability */}
          <div
            className={`p-12 border-r-2 border-b-2 md:border-b-0 border-gray-200 ${isVisible ? "animate-fade-in" : "opacity-0"
              }`}
            style={{ animationDelay: isVisible ? "100ms" : "0s" }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Vulnerability Lifecycle & Accountability
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Drive remediation velocity with clear ownership, mandatory
              deadlines, and a single source of truth for all vulnerability
              statuses and discussions.
            </p>
            <ul className="space-y-4">
              {lifecycleItems.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Advanced Tools & Partnering */}
          <div
            className={`p-12 border-b-2 md:border-b-0 border-gray-200 ${isVisible ? "animate-fade-in" : "opacity-0"
              }`}
            style={{ animationDelay: isVisible ? "200ms" : "0s" }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Advanced Tools Inbuilt & Intelligence
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Leverage the power of CyeBot, professional reporting, and secure
              external collaboration to enhance analyst efficiency and board
              communication.
            </p>
            <ul className="space-y-4">
              {advancedItems.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- 7. REPORTING (Team Management Layout) ---
const ReportingSection = () => {
  const [ref, isVisible] = useInViewAnimation({ threshold: 0.1 });

  // Content from "Professional Reporting & Audits" section and VMDR metrics
  const features = [
    {
      title: "Boardroom-Ready Reports",
      description:
        "Generate professional VMDR Analysis Reports (e.g., 3.2 MB PDF) instantly, consolidating all critical findings, risk scores, and remediation efforts for executive review and investor confidence.",
    },
    {
      title: "Compliance & Knowledge Base",
      description:
        "Instant access to a curated Knowledge Base containing 318+ threat entries, including the latest CVEs and the OWASP Top 10 (2021). Essential for compliance mapping and swift threat context.",
    },
    {
      title: "Performance Tracking & Trends",
      description:
        "Demonstrate security maturity with quantifiable data. Track Vulnerability Resolution Trends showing found vs. resolved issues, targeting a resolution rate improvement of 2.1% month-over-month.",
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-white to-gray-50" ref={ref}>
      <div className="max-w-[1312px] mx-auto px-6">
        <div className="mb-24">
          <p
            className={`text-sm font-bold text-green-600 uppercase tracking-wider mb-4 ${isVisible ? "animate-fade-in delay-100" : "opacity-0"
              }`}
          >
            Advanced Tools Inbuilt
          </p>
          <h2
            className={`font-mukta font-bold text-5xl md:text-6xl text-gray-900 mb-4 ${isVisible ? "animate-fade-in-up delay-200" : "opacity-0"
              }`}
          >
            Intelligence & Audits
          </h2>
          <div
            className={`h-1 w-16 bg-green-500 rounded-full mb-8 ${isVisible ? "animate-fade-in delay-300" : "opacity-0"
              }`}
          />
          <p
            className={`text-lg text-gray-700 leading-relaxed max-w-3xl ${isVisible ? "animate-fade-in delay-400" : "opacity-0"
              }`}
          >
            Leverage CyeBot, centralized notifications, and professional
            reporting tools to automate the security analyst workload and provide
            clear communication for stakeholders.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-0 border-t-2 border-l-2 border-gray-200">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`p-12 border-r-2 border-b-2 border-gray-200 last:border-r-0 md:last:border-r-2 hover:bg-gray-50 transition-colors ${isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
              style={{ animationDelay: isVisible ? `${i * 150}ms` : "0s" }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Placeholder for the large image/chart */}
        <div
          className={`mt-16 w-full relative aspect-video bg-gray-200 border-2 border-gray-300 rounded-xl shadow-2xl transition-all duration-700 ${isVisible ? "animate-fade-in delay-500" : "opacity-0"
            }`}
        >
          <img
            src="/product/cyenet_vmdr_risk_dashboard.png" // Using the main dashboard image as a large visual aid
            alt="VMDR Risk Dashboard Visualization"
            className="w-full h-full object-cover rounded-xl opacity-80"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-white/10 rounded-xl">
            <p className="text-xl font-semibold text-gray-700">
              Real-time VMDR Analysis & Auditing
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- 8. CTA / FINAL SECTION (Compliance/Results Layout used for CTA) ---
const FinalCTASection = () => {
  const [ref, isVisible] = useInViewAnimation({ threshold: 0.1 });

  const complianceItems = [
    {
      title: "Transform Security Operations",
      description:
        "Shift from reactive vulnerability handling to proactive, risk-aligned defense. Reduce noise and focus on what truly matters.",
      image: "/product/reporting_false_positive.png", // Reused Placeholder
    },
    {
      title: "Achieve 35% Faster MTTR",
      description:
        "Leverage integrated collaboration and accountability features to accelerate time-to-remediate and close security gaps faster than ever.",
      image: "/product/reporting_multi_format.png", // Reused Placeholder
    },
    {
      title: "Gain Total Visibility",
      description:
        "Cover your entire digital estate—web apps, networks, and APIs—with a single, unified, AI-powered platform and achieve 94% security visibility.",
      image: "/product/reporting_compliance_ready.png", // Reused Placeholder
    },
  ];

  const currentReport = complianceItems[0]; // Just showing the first item image for consistency

  return (
    <section id="demo" className="py-32 bg-white" ref={ref}>
      <div className="max-w-[1312px] mx-auto px-6">
        <div className="mb-24">
          <p
            className={`text-sm font-bold text-green-600 uppercase tracking-wider mb-4 ${isVisible ? "animate-fade-in delay-100" : "opacity-0"
              }`}
          >
            The Engine of Proactive Cyber Defense
          </p>
          <h2
            className={`font-mukta font-bold text-5xl md:text-6xl text-gray-900 mb-4 ${isVisible ? "animate-fade-in-up delay-200" : "opacity-0"
              }`}
          >
            Ready to Defend with CyeNet?
          </h2>
          <div
            className={`h-1 w-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mb-8 ${isVisible ? "animate-fade-in delay-300" : "opacity-0"
              }`}
          />
          <p
            className={`text-lg text-gray-700 leading-relaxed max-w-3xl ${isVisible ? "animate-fade-in delay-400" : "opacity-0"
              }`}
          >
            See how CyeNet unifies, detects, and defends your digital world.
            Schedule a personalized walkthrough of the VMDR dashboard, Web
            Scanner, and collaboration features.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Compliance List (Left Side - Clickable Tabs) - Reused as key benefits for CTA */}
          <div className="space-y-6">
            {complianceItems.map((item, i) => (
              <div
                key={i}
                className={`group cursor-pointer p-6 rounded-lg border transition-all duration-300
                            ${i === 0
                    ? "bg-green-50 border-green-500 shadow-md"
                    : "bg-white border-gray-200 hover:border-gray-400"
                  }
                            ${isVisible ? "animate-fade-in-left" : "opacity-0"
                  }`}
                style={{ animationDelay: isVisible ? `${i * 150}ms` : "0s" }}
              >
                <h3
                  className={`font-bold text-xl mb-2 ${i === 0
                    ? "text-green-700"
                    : "text-gray-900 group-hover:text-green-600"
                    }`}
                >
                  {item.title}
                  <span className="float-right transition-transform duration-300">
                    &gt;
                  </span>
                </h3>
                <p className="text-gray-700 mt-2 leading-relaxed animate-fade-in">
                  {item.description}
                </p>
              </div>
            ))}

            {/* Final CTA Button for Demo */}
            <div
              className={`pt-8 ${isVisible ? "animate-fade-in delay-600" : "opacity-0"
                }`}
            >
              <Link
                href="#demo"
                className="inline-block w-full text-center px-10 py-4 text-lg font-bold rounded-full bg-green-500 text-gray-900 shadow-lg hover:bg-green-400 transition-all transform hover:scale-[1.01]"
              >
                Schedule Your Personalized Demo
              </Link>
            </div>
          </div>

          {/* Reporting Dashboard Placeholder (Right Side - Image Update) */}
          <div className="w-full sticky top-28">
            <div
              className={`relative aspect-video bg-gray-200 border-2 border-gray-300 rounded-xl shadow-2xl overflow-hidden transition-all duration-700 ${isVisible ? "animate-fade-in-right delay-200" : "opacity-0"
                }`}
            >
              <img
                src={currentReport.image || "/placeholder.svg"}
                alt={`Compliance Reporting: ${currentReport.title}`}
                className="w-full h-full object-cover rounded-xl transition-opacity duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900/10 rounded-xl">
                <p className="text-xl font-semibold text-white">
                  Executive Risk Insights
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- MAIN EXPORT ---
export default function CyenetProductPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      {/* Retain original component structure/flow */}
      <WhyChooseCyeNetSection />{" "}
      {/* Now: Why Choose CyeNet? (Metrics: 35% MTTR, 94% Visibility) */}
      <VMDRSection />{" "}
      {/* Now: VMDR Section (Quantifiable Results Layout: CRS, Vulns, Top 5%) */}
      <FeaturePillarsGrid />{" "}
      {/* Now: Feature Grid (VMDR, Scanner, Collaboration) */}
      <ScanningEngineSection />{" "}
      {/* Now: Scanning Engine (Interactive Tabbed View: Web & Network Scanner) */}
      <CollaborationSection />{" "}
      {/* Now: Collaboration (Tool Breakdown Layout: Lifecycle, Advanced Tools) */}
      <ReportingSection />{" "}
      {/* Now: Reporting (Team Management Layout: Audits, CyeBot, Trends) */}
      <FinalCTASection /> {/* Now: Final CTA (Compliance Layout) */}
    </div>
  );
}