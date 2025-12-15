// app/services/appsec-ot/page.jsx
"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import {
  ShieldCheck,
  Code,
  Lock,
  Target,
  FlaskConical,
  Bug,
  Lightbulb,
  TrendingUp,
  Award,
  BookOpen,
  Mail,
  Zap,
  Network,
  Factory,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  MonitorCheck,
  Trophy,
  Layers,
  GitBranch,
  Settings,
  BarChart,
  Search,
  Repeat2,
  Trello,
  Headphones, // Icon for solution methodology
} from "lucide-react";

// --- Custom Hook: Intersection Observer for Scroll Animations (Reusable) ---
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

// --- Section 1: Hero Section (Strong, Benefit-Driven) ---
const HeroSection = () => {
  const [ref, isVisible] = useInViewAnimation({ threshold: 0.1 });

  return (
    <section
      className="relative pt-20 pb-32 bg-gray-900 text-white overflow-hidden"
      ref={ref}
    >
      <div className="absolute inset-0 opacity-5 bg-dots"></div>
      <div className="relative max-w-[1312px] mx-auto px-6 text-center">
        {/* Animated Tag */}
        <span
          className={`inline-flex items-center gap-2 mb-4 px-4 py-1 text-sm font-medium rounded-full bg-amber-700/30 text-amber-400 border border-amber-500/50 ${isVisible ? "animate-fade-in-down" : "opacity-0"
            }`}
        >
          <ShieldCheck className="w-4 h-4" /> Secure Industrial Design
        </span>

        {/* Main Title */}
        <h1
          className={`font-mukta font-bold text-6xl md:text-8xl leading-tight mb-6 ${isVisible ? "animate-fade-in" : "opacity-0"
            }`}
        >
          Resilient OT <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500">
            Architecture
          </span>
        </h1>

        {/* Subtext */}
        <p
          className={`max-w-3xl mx-auto text-xl text-gray-300 mb-10 ${isVisible ? "animate-fade-in delay-200" : "opacity-0"
            }`}
        >
          Cyethack Solutions evaluates and redesigns your industrial networks based on
          the Purdue Model and IEC 62443 standards to ensure robust segmentation and defense-in-depth.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex justify-center gap-4 ${isVisible ? "animate-fade-in delay-400" : "opacity-0"
            }`}
        >
          <Link
            href="#contact"
            className="inline-block px-10 py-4 text-lg font-bold rounded-full bg-green-500 text-gray-900 shadow-lg hover:bg-green-600 transition-all transform hover:scale-[1.02]"
          >
            Request a Consultation
          </Link>
          <Link
            href="#appsec-services"
            className="inline-block px-10 py-4 text-lg font-medium rounded-full border border-gray-600 text-white hover:bg-gray-800 transition-colors"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
};

// --- Section 2: The Challenge (Problem Statement) ---
const TheChallengeSection = () => {
  const [ref, isVisible] = useInViewAnimation({ threshold: 0.1 });

  const challenges = [
    {
      title: "Flat Networks",
      description:
        "Lack of segmentation allows malware to spread rapidly from IT to OT environments, causing widespread operational disruption.",
      icon: <Network className="w-8 h-8 text-red-500" />,
    },
    {
      title: "Legacy Protocols",
      description:
        "Industrial protocols (Modbus, DNP3) often lack authentication and encryption, making them easy targets for interception and manipulation.",
      icon: <AlertTriangle className="w-8 h-8 text-orange-500" />,
    },
    {
      title: "IT/OT Convergence Risks",
      description:
        "Connecting OT systems to the internet or corporate IT networks without proper architectural controls introduces new attack vectors.",
      icon: <Factory className="w-8 h-8 text-blue-500" />,
    },
  ];

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="max-w-[1312px] mx-auto px-6">
        <div className="mb-16 max-w-4xl">
          <h2
            className={`font-mukta font-bold text-5xl md:text-6xl text-gray-900 mb-4 ${isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
          >
            The Problem: Gaps in Unified Security
          </h2>
          <p
            className={`max-w-3xl text-xl text-gray-600 ${isVisible ? "animate-fade-in delay-200" : "opacity-0"
              }`}
          >
            In today's interconnected world, securing your applications and
            operational technologies is more complex than ever. We help you
            address these critical areas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 border-t border-gray-200 pt-8">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className={`p-6 border-b-2 border-gray-100 text-left transition-all duration-500 hover:bg-gray-50 hover:shadow-sm ${isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
              style={{ animationDelay: isVisible ? `${index * 150}ms` : "0s" }}
            >
              <div className="mb-4 p-2 inline-block rounded-full bg-gray-100">
                {challenge.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {challenge.title}
              </h3>
              <p className="text-gray-700">{challenge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Section 3: Our Unified Solution (Methodology/Approach) ---
const OurSolutionSection = () => {
  const [ref, isVisible] = useInViewAnimation({ threshold: 0.1 });

  const steps = [
    {
      icon: <Search className="w-6 h-6 text-white" />,
      title: "Discovery & Assessment",
      description:
        "Full enumeration of all AppSec and OT assets. Hybrid testing (DAST, SAST, Manual Pentest) to establish a comprehensive risk baseline.",
      color: "bg-blue-600",
    },
    {
      icon: <Trello className="w-6 h-6 text-white" />,
      title: "Unified Prioritization (TruRisk™)",
      description:
        "Findings are normalized and prioritized using real-time threat intelligence and business context, ensuring your teams fix critical issues first.",
      color: "bg-purple-600",
    },
    {
      icon: <GitBranch className="w-6 h-6 text-white" />,
      title: "DevSecOps Integration",
      description:
        "Shift-Left security by integrating scanning directly into CI/CD pipelines, providing developers with automated, contextual remediation guidance.",
      color: "bg-pink-600",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
      title: "Continuous Assurance",
      description:
        "Ongoing monitoring and re-testing maintain compliance (SOC 2, ISO 27001) and security resilience across all environments.",
      color: "bg-teal-600",
    },
  ];

  return (
    <section className="py-24 bg-gray-50" ref={ref}>
      <div className="max-w-[1312px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className={`font-mukta font-bold text-5xl md:text-6xl text-gray-900 mb-4 ${isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
          >
            Our Unified Solution & Approach
          </h2>
          <p
            className={`max-w-3xl mx-auto text-xl text-gray-600 ${isVisible ? "animate-fade-in delay-200" : "opacity-0"
              }`}
          >
            We solve fragmentation by applying a four-stage, expert-led
            methodology that ensures continuous, context-aware protection.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`p-6 bg-white border-t-4 border-gray-200 rounded-lg shadow-lg text-left transition-all duration-500 hover:shadow-xl ${isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
              style={{
                animationDelay: isVisible ? `${index * 150}ms` : "0s",
                borderTopColor: step.color
                  .replace("bg-", "#")
                  .replace("600", "400"),
              }}
            >
              <div
                className={`mb-4 w-12 h-12 flex items-center justify-center rounded-full ${step.color}`}
              >
                {step.icon}
              </div>
              <p className="text-sm font-semibold text-gray-500 mb-2">
                STEP {index + 1}
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



const architectureServices = [
  {
    title: "Purdue Model Assessment",
    description:
      "Evaluate your network hierarchy against the Purdue Enterprise Reference Architecture (PERA) to ensure proper separation of enterprise and control zones.",
    icon: <Layers className="w-6 h-6 text-amber-600" />,
    image: "/services/arch_purdue.png",
  },
  {
    title: "Network Segmentation Design",
    description:
      "Design and implement robust segmentation strategies (VLANs, Firewalls, DMZs) to isolate critical assets and limit lateral movement.",
    icon: <Network className="w-6 h-6 text-amber-600" />,
    image: "/services/arch_segmentation.png",
  },
  {
    title: "Secure Remote Access Review",
    description:
      "Assess remote access solutions for vendors and maintenance teams, ensuring strict authentication (MFA) and least-privilege access.",
    icon: <Lock className="w-6 h-6 text-amber-600" />,
    image: "/services/arch_remote.png",
  },
  {
    title: "Firewall Policy Audit",
    description:
      "Review firewall rules between IT and OT zones to identify overly permissive rules and ensure traffic is strictly controlled.",
    icon: <ShieldCheck className="w-6 h-6 text-amber-600" />,
    image: "/services/arch_firewall.png",
  },
];

const OTSecurityServicesSection = () => {
  const [ref, isVisible] = useInViewAnimation({ threshold: 0.1 });
  const [activeService, setActiveService] = useState(0);
  const currentService = architectureServices[activeService];

  return (
    <section id="architecture-services" className="py-32 bg-white" ref={ref}>
      <div className="max-w-[1312px] mx-auto px-6">
        <div className="mb-20">
          <p
            className={`text-sm font-bold text-amber-600 uppercase tracking-wider mb-2 ${isVisible ? "animate-fade-in delay-100" : "opacity-0"
              }`}
          >
            Key Services
          </p>
          <h2
            className={`font-mukta font-bold text-5xl md:text-6xl text-gray-900 mb-4 ${isVisible ? "animate-fade-in-up delay-200" : "opacity-0"
              }`}
          >
            OT Architecture Services
          </h2>
          <div
            className={`h-1 w-16 bg-amber-500 rounded-full mb-8 ${isVisible ? "animate-fade-in delay-300" : "opacity-0"
              }`}
          />
          <p
            className={`text-lg text-gray-700 leading-relaxed max-w-3xl ${isVisible ? "animate-fade-in delay-400" : "opacity-0"
              }`}
          >
            Our Architecture Review services ensure your industrial control systems
            are built on a secure foundation, minimizing the risk of cyber-physical attacks.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left Side: Clickable Service Titles */}
          <div className="lg:w-1/2 w-full space-y-4">
            {architectureServices.map((service, index) => (
              <div
                key={index}
                className={`group cursor-pointer p-6 rounded-lg border transition-all duration-300
                              ${activeService === index
                    ? "bg-amber-50 border-amber-500 shadow-lg"
                    : "bg-white border-gray-300 hover:border-gray-400"
                  }
                              ${isVisible ? "animate-fade-in-left" : "opacity-0"
                  }`}
                style={{
                  animationDelay: isVisible ? `${500 + index * 100}ms` : "0s",
                }}
                onClick={() => setActiveService(index)}
              >
                <h3
                  className={`font-bold text-xl mb-2 flex items-center gap-3 ${activeService === index
                    ? "text-amber-700"
                    : "text-gray-900 group-hover:text-amber-600"
                    }`}
                >
                  {service.icon} {service.title}
                  <span
                    className={`float-right transition-transform duration-300 ml-auto ${activeService === index
                      ? "text-amber-500 rotate-90"
                      : "text-gray-500 rotate-0"
                      }`}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </h3>
                {activeService === index && (
                  <p className="text-gray-700 mt-2 leading-relaxed animate-fade-in">
                    {service.description}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Right Side: Image Showcase */}
          <div className="lg:w-1/2 w-full sticky lg:top-28">
            <div
              className={`relative aspect-[4/3] bg-gray-200 border-2 border-gray-300 rounded-xl shadow-2xl overflow-hidden transition-all duration-700 ${isVisible ? "animate-fade-in-right delay-600" : "opacity-0"
                }`}
            >
              <img
                key={activeService}
                src={currentService.image || "/placeholder.svg"}
                alt={`Architecture Service: ${currentService.title}`}
                className="w-full h-full object-cover rounded-xl transition-opacity duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900/10 rounded-xl">
                <p className="text-xl font-semibold text-white text-shadow-md">
                  {currentService.title} View
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Section 6: Why Cyethack (Differentiators / Approach) ---
const WhyCyethackSection = () => {
  const [ref, isVisible] = useInViewAnimation({ threshold: 0.1 });

  const differentiators = [
    {
      title: "Hacker-Mindset Experts",
      description:
        "Our certified ethical hackers (OSCP, CEH) don't just run scans; they think like an adversary to find zero-days and critical business logic flaws that automated tools miss.",
      icon: <Target className="w-8 h-8 text-green-600" />,
      details: "Top 1% certified pentesters (inspired by image 3)",
    },
    {
      title: "AI-Powered Precision",
      description:
        "Leveraging proprietary deep learning models for vulnerability identification and threat modeling, ensuring faster detection and near-zero false positives.",
      icon: <Zap className="w-8 h-8 text-green-600" />,
      details: "AI-driven detection and 95% false positive reduction",
    },
    {
      title: "Unified Platform & Reporting",
      description:
        "Gain real-time visibility and consolidated reporting across AppSec and OT environments from a single, intuitive dashboard, simplifying compliance.",
      icon: <BarChart className="w-8 h-8 text-green-600" />,
      details: "Single source of truth for all cyber risk posture",
    },
    {
      title: "Continuous Security Assurance",
      description:
        "Beyond one-time tests, we offer continuous monitoring, re-scans, and integrated DevSecOps support to maintain a resilient security posture.",
      icon: <Repeat2 className="w-8 h-8 text-green-600" />,
      details: "Continuous integration and monitoring (CI/CD)",
    },
  ];

  return (
    <section className="py-24 bg-gray-50" ref={ref}>
      <div className="max-w-[1312px] mx-auto px-6">
        <div className="mb-16 max-w-4xl">
          <h2
            className={`font-mukta font-bold text-5xl md:text-6xl text-gray-900 mb-4 ${isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
          >
            Our Differentiators
          </h2>
          <p
            className={`max-w-3xl text-xl text-gray-600 ${isVisible ? "animate-fade-in delay-200" : "opacity-0"
              }`}
          >
            Cyethack doesn't just offer services; we offer a partnership rooted
            in advanced technology and unparalleled expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {differentiators.map((diff, index) => (
            <div
              key={index}
              className={`p-8 bg-white rounded-lg shadow-md border-t-4 border-green-500 text-left transition-all duration-500 hover:shadow-xl hover:bg-green-50/50 ${isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
              style={{ animationDelay: isVisible ? `${index * 150}ms` : "0s" }}
            >
              <div className="mb-4 p-2 inline-block rounded-full bg-green-50">
                {diff.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {diff.title}
              </h3>
              <p className="text-gray-700 mb-4">{diff.description}</p>
              <p className="text-sm font-medium text-green-700 mt-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> {diff.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Section 7: Key Metrics (Client Success/Results) ---
const KeyMetricsSection = () => {
  const [ref, isVisible] = useInViewAnimation({ threshold: 0.3 });

  const metrics = [
    {
      value: "99%",
      label: "Threat Detection Rate",
      description: "Across web apps, APIs, mobile apps, and OT systems.",
    },
    {
      value: "60%",
      label: "Faster MTTR",
      description: "Mean Time To Remediate with guided developer workflows.",
    },
    {
      value: "95%",
      label: "False Positive Reduction",
      description: "Through AI-powered triaging and contextual analysis.",
    },
  ];

  // Dummy component for AnimatedCounter since full logic isn't provided
  const AnimatedCounter = ({ target, isVisible }) => <span>{target}</span>;

  return (
    <section className="py-24 bg-gray-900 text-white" ref={ref}>
      <div className="max-w-[1312px] mx-auto px-6 text-center">
        <h2
          className={`font-mukta font-bold text-5xl md:text-6xl mb-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
        >
          Quantifiable Client Success
        </h2>

        <div className="grid md:grid-cols-3 gap-0 border-t border-b border-gray-700/50">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`p-8 border-r border-gray-700/50 last:border-r-0 text-center transition-all duration-500 hover:bg-gray-800 ${isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
              style={{ animationDelay: isVisible ? `${index * 150}ms` : "0s" }}
            >
              <p className="text-7xl font-bold text-green-400 mb-2">
                <AnimatedCounter
                  target={parseInt(metric.value)}
                  isVisible={isVisible}
                />
                {metric.value.includes("%") ? "%" : ""}
              </p>
              <p className="text-xl font-semibold text-white mb-3">
                {metric.label}
              </p>
              <p className="text-gray-400">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Section 8: Call to Action (Final CTA - 90% Width, Animated Gradient BG) ---
const CtaSection = () => {
  const [ref, isVisible] = useInViewAnimation({ threshold: 0.1 });

  return (
    // Main container stays light gray/white
    <section id="contact" className="py-32 bg-gray-50" ref={ref}>
      <div className="max-w-[90% ] mx-auto px-6">
        {/* The contained CTA box: takes 90% width, centered */}
        <div
          className={`relative mx-auto w-[90%] p-16 text-center rounded-2xl shadow-2xl overflow-hidden transition-all duration-700 
            bg-gradient-to-br from-green-500 to-teal-400 text-white
            ${isVisible ? "animate-fade-in-up" : "opacity-0"} 
            hover:scale-[1.01]`}
          style={{ animationDelay: '100ms' }}
        >
          {/* Internal Animated Pattern (Pulsing Circles) */}
          <div className="absolute inset-0 z-0 opacity-20">
            <span className="w-16 h-16 rounded-full bg-white/20 animate-pulse-slow absolute left-[5%] top-[10%]"></span>
            <span className="w-20 h-20 rounded-full bg-white/20 animate-pulse- slow delay-1000 absolute right-[15%] bottom-[20%]"></span>
            <span className="w-10 h-10 rounded-full bg-white/20 animate-pulse-slow delay-2000 absolute left-[30%] bottom-[15%]"></span>
          </div>

          <div className="relative z-10">
            {/* Headline */}
            <h2
              className={`font-mukta font-bold text-5xl md:text-6xl mb-4 ${isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
              style={{ animationDelay: isVisible ? "200ms" : "0s" }}
            >
              Ready to Elevate Your Security?
            </h2>

            {/* Subtext */}
            <p
              className={`text-xl text-white mb-10 max-w-2xl mx-auto ${isVisible ? "animate-fade-in delay-400" : "opacity-0"
                }`}
              style={{ animationDelay: isVisible ? "400ms" : "0s" }}
            >
              Schedule a personalized, zero-commitment consultation with our experts
              to discuss your specific AppSec and OT security requirements.
            </p>

            {/* Two CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row justify-center gap-4 ${isVisible ? "animate-fade-in delay-600" : "opacity-0"
                }`}
              style={{ animationDelay: isVisible ? "600ms" : "0s" }}
            >
              <Link
                href="/contact"
                // PRIMARY BUTTON: White background for maximum contrast against the green/teal block
                className="inline-flex items-center gap-3 px-8 py-4 text-lg font-bold rounded-full
                  bg-white text-gray-900 shadow-xl
                  hover:bg-gray-100 transition-all transform hover:scale-[1.05]"
              >
                Speak To Sales <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- MAIN EXPORT ---
// --- MAIN EXPORT ---
export default function ArchitectureReviewPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <TheChallengeSection />
      <OurSolutionSection /> {/* New Methodology Section */}
      <OTSecurityServicesSection /> {/* Renamed/Reused for Architecture Services */}
      <WhyCyethackSection /> {/* Differentiators */}
      <KeyMetricsSection />
      <CtaSection />
    </div>
  );
}
