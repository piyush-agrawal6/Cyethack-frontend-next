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
          className={`inline-flex items-center gap-2 mb-4 px-4 py-1 text-sm font-medium rounded-full bg-green-700/30 text-green-400 border border-green-500/50 ${
            isVisible ? "animate-fade-in-down" : "opacity-0"
          }`}
        >
          <ShieldCheck className="w-4 h-4" /> Secure Every Layer of the
          Enterprise
        </span>

        {/* Main Title */}
        <h1
          className={`font-mukta font-bold text-6xl md:text-8xl leading-tight mb-6 ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}
        >
          Guaranteed Resilience for <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-500">
            Applications & Operations
          </span>
        </h1>

        {/* Subtext */}
        <p
          className={`max-w-3xl mx-auto text-xl text-gray-300 mb-10 ${
            isVisible ? "animate-fade-in delay-200" : "opacity-0"
          }`}
        >
          Cyethack Solutions provides world-class security services covering
          **AppSec, API Security, and Critical OT/ICS** environments, moving
          your defense from reactive to truly proactive.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex justify-center gap-4 ${
            isVisible ? "animate-fade-in delay-400" : "opacity-0"
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
      title: "Exploding Attack Surface",
      description:
        "Modern APIs and microservices drastically expand the attack surface, creating new entry points for sophisticated threats.",
      icon: <AlertTriangle className="w-8 h-8 text-red-500" />,
    },
    {
      title: "Fragmented Security Tools",
      description:
        "Disparate tools for AppSec and OT create visibility gaps, increase operational overhead, and slow down incident response.",
      icon: <Layers className="w-8 h-8 text-orange-500" />,
    },
    {
      title: "Complex OT Environments",
      description:
        "Interconnected industrial systems (SCADA, ICS) are vulnerable to cyber-physical attacks, risking operational disruption and physical harm.",
      icon: <Factory className="w-8 h-8 text-blue-500" />,
    },
  ];

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="max-w-[1312px] mx-auto px-6">
        <div className="mb-16 max-w-4xl">
          <h2
            className={`font-mukta font-bold text-5xl md:text-6xl text-gray-900 mb-4 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            The Problem: Gaps in Unified Security
          </h2>
          <p
            className={`max-w-3xl text-xl text-gray-600 ${
              isVisible ? "animate-fade-in delay-200" : "opacity-0"
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
              className={`p-6 border-b-2 border-gray-100 text-left transition-all duration-500 hover:bg-gray-50 hover:shadow-sm ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
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
            className={`font-mukta font-bold text-5xl md:text-6xl text-gray-900 mb-4 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            Our Unified Solution & Approach
          </h2>
          <p
            className={`max-w-3xl mx-auto text-xl text-gray-600 ${
              isVisible ? "animate-fade-in delay-200" : "opacity-0"
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
              className={`p-6 bg-white border-t-4 border-gray-200 rounded-lg shadow-lg text-left transition-all duration-500 hover:shadow-xl ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
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

// --- Section 4: AppSec Services (Interactive Tabs - Key Services) ---
const AppSecServicesSection = () => {
  const [ref, isVisible] = useInViewAnimation({ threshold: 0.1 });
  const appsecServices = [
    {
      title: "Web Application Penetration Testing (WAPT)",
      description:
        "Comprehensive ethical hacking to identify critical vulnerabilities in your web applications, including OWASP Top 10, business logic flaws, and zero-day threats. We combine manual expertise with advanced tooling.",
      icon: <Target className="w-6 h-6 text-green-600" />,
      image: "/services/appsec_wapt.png",
    },
    {
      title: "API Security Testing",
      description:
        "Specialized testing for REST, SOAP, GraphQL, and gRPC APIs. We uncover vulnerabilities like broken authentication, improper authorization, injection flaws, and rate limiting bypasses.",
      icon: <Code className="w-6 h-6 text-green-600" />,
      image: "/services/appsec_api.png",
    },
    {
      title: "Mobile Application Security Testing (MAST)",
      description:
        "Thorough analysis of iOS and Android applications for vulnerabilities in code, configurations, data storage, and network communications, adhering to OWASP Mobile Top 10.",
      icon: <MonitorCheck className="w-6 h-6 text-green-600" />,
      image: "/services/appsec_mobile.png",
    },
    {
      title: "Source Code Review (SAST)",
      description:
        "Deep static analysis of your source code to detect security flaws early in the development lifecycle, ensuring adherence to secure coding practices and preventing common vulnerabilities.",
      icon: <BookOpen className="w-6 h-6 text-green-600" />,
      image: "/services/appsec_sast.png",
    },
    {
      title: "DevSecOps Integration & Consulting",
      description:
        "Embed security into every stage of your SDLC. We help integrate security tools, automate vulnerability scanning in CI/CD pipelines, and train your development teams for shift-left efficiency.",
      icon: <GitBranch className="w-6 h-6 text-green-600" />,
      image: "/services/appsec_devsecops.png",
    },
  ];

  const [activeAppSecService, setActiveAppSecService] = useState(0);
  const currentAppSecService = appsecServices[activeAppSecService];

  return (
    <section id="appsec-services" className="py-32 bg-white" ref={ref}>
      <div className="max-w-[1312px] mx-auto px-6">
        <div className="mb-20">
          <p
            className={`text-sm font-bold text-green-600 uppercase tracking-wider mb-2 ${
              isVisible ? "animate-fade-in delay-100" : "opacity-0"
            }`}
          >
            Key Services
          </p>
          <h2
            className={`font-mukta font-bold text-5xl md:text-6xl text-gray-900 mb-4 ${
              isVisible ? "animate-fade-in-up delay-200" : "opacity-0"
            }`}
          >
            Robust Application Security (AppSec)
          </h2>
          <div
            className={`h-1 w-16 bg-green-500 rounded-full mb-8 ${
              isVisible ? "animate-fade-in delay-300" : "opacity-0"
            }`}
          />
          <p
            className={`text-lg text-gray-700 leading-relaxed max-w-3xl ${
              isVisible ? "animate-fade-in delay-400" : "opacity-0"
            }`}
          >
            Our AppSec services provide a multi-layered defense strategy,
            combining automated precision with human expertise to identify,
            prioritize, and remediate vulnerabilities across your entire
            application portfolio.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left Side: Clickable Service Titles */}
          <div className="lg:w-1/2 w-full space-y-4">
            {appsecServices.map((service, index) => (
              <div
                key={index}
                className={`group cursor-pointer p-6 rounded-lg border transition-all duration-300
                            ${
                              activeAppSecService === index
                                ? "bg-green-50 border-green-500 shadow-lg"
                                : "bg-white border-gray-300 hover:border-gray-400"
                            }
                            ${
                              isVisible ? "animate-fade-in-left" : "opacity-0"
                            }`}
                style={{
                  animationDelay: isVisible ? `${500 + index * 100}ms` : "0s",
                }}
                onClick={() => setActiveAppSecService(index)}
              >
                <h3
                  className={`font-bold text-xl mb-2 flex items-center gap-3 ${
                    activeAppSecService === index
                      ? "text-green-700"
                      : "text-gray-900 group-hover:text-green-600"
                  }`}
                >
                  {service.icon} {service.title}
                  <span
                    className={`float-right transition-transform duration-300 ml-auto ${
                      activeAppSecService === index
                        ? "text-green-500 rotate-90"
                        : "text-gray-500 rotate-0"
                    }`}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </h3>
                {activeAppSecService === index && (
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
              className={`relative aspect-[4/3] bg-gray-200 border-2 border-gray-300 rounded-xl shadow-2xl overflow-hidden transition-all duration-700 ${
                isVisible ? "animate-fade-in-right delay-600" : "opacity-0"
              }`}
            >
              <img
                key={activeAppSecService}
                src={currentAppSecService.image || "/placeholder.svg"}
                alt={`AppSec Service: ${currentAppSecService.title}`}
                className="w-full h-full object-cover rounded-xl transition-opacity duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900/10 rounded-xl">
                <p className="text-xl font-semibold text-white text-shadow-md">
                  {currentAppSecService.title} View
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Section 5: OT Security Services (Interactive Tabs - Key Services) ---
const OTSecurityServicesSection = () => {
  const [ref, isVisible] = useInViewAnimation({ threshold: 0.1 });

  const otServices = [
    {
      title: "OT Network Architecture Review",
      description:
        "Assess your industrial control system (ICS) and SCADA network design for segmentation, security zones, and communication protocols. Identify critical weaknesses and compliance gaps.",
      icon: <Network className="w-6 h-6 text-green-600" />,
      image: "/services/otsec_network.png",
    },
    {
      title: "ICS Penetration Testing",
      description:
        "Safe and controlled testing of your ICS/SCADA components, including PLCs, RTUs, and HMI systems, to uncover vulnerabilities without disrupting operations. Focus on cyber-physical attack vectors.",
      icon: <Factory className="w-6 h-6 text-green-600" />,
      image: "/services/otsec_pentest.png",
    },
    {
      title: "OT Threat Modeling & Risk Assessment",
      description:
        "Identify potential threats to your operational environment, analyze attack paths, and quantify risks to industrial processes. Develop tailored mitigation strategies based on real-world scenarios.",
      icon: <FlaskConical className="w-6 h-6 text-green-600" />,
      image: "/services/otsec_threat_model.png",
    },
    {
      title: "Compliance & Regulatory Guidance",
      description:
        "Ensure your OT infrastructure adheres to industry-specific regulations like NERC CIP, IEC 62443, and other regional standards. We provide audits, gap analysis, and roadmap development for compliance.",
      icon: <Award className="w-6 h-6 text-green-600" />,
      image: "/services/otsec_compliance.png",
    },
  ];

  const [activeOTService, setActiveOTService] = useState(0);
  const currentOTService = otServices[activeOTService];

  return (
    <section id="ot-services" className="py-32 bg-white" ref={ref}>
      <div className="max-w-[1312px] mx-auto px-6">
        <div className="mb-20">
          <p
            className={`text-sm font-bold text-green-600 uppercase tracking-wider mb-2 ${
              isVisible ? "animate-fade-in delay-100" : "opacity-0"
            }`}
          >
            Key Services
          </p>
          <h2
            className={`font-mukta font-bold text-5xl md:text-6xl text-gray-900 mb-4 ${
              isVisible ? "animate-fade-in-up delay-200" : "opacity-0"
            }`}
          >
            Operational Technology Security (OT)
          </h2>
          <div
            className={`h-1 w-16 bg-green-500 rounded-full mb-8 ${
              isVisible ? "animate-fade-in delay-300" : "opacity-0"
            }`}
          />
          <p
            className={`text-lg text-gray-700 leading-relaxed max-w-3xl ${
              isVisible ? "animate-fade-in delay-400" : "opacity-0"
            }`}
          >
            Protecting your critical infrastructure is paramount. Our OT
            security services fortify your industrial control systems against
            sophisticated attacks, ensuring safety and operational continuity.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-16 items-start">
          {/* Right Side: Clickable Service Titles (Reversed order for layout) */}
          <div className="lg:w-1/2 w-full space-y-4">
            {otServices.map((service, index) => (
              <div
                key={index}
                className={`group cursor-pointer p-6 rounded-lg border transition-all duration-300
                            ${
                              activeOTService === index
                                ? "bg-green-50 border-green-500 shadow-md"
                                : "bg-white border-gray-300 hover:border-gray-400"
                            }
                            ${
                              isVisible ? "animate-fade-in-right" : "opacity-0"
                            }`}
                style={{
                  animationDelay: isVisible ? `${500 + index * 100}ms` : "0s",
                }}
                onClick={() => setActiveOTService(index)}
              >
                <h3
                  className={`font-bold text-xl mb-2 flex items-center gap-3 ${
                    activeOTService === index
                      ? "text-green-700"
                      : "text-gray-900 group-hover:text-green-600"
                  }`}
                >
                  {service.icon} {service.title}
                  <span
                    className={`float-right transition-transform duration-300 ml-auto ${
                      activeOTService === index
                        ? "text-green-500 rotate-90"
                        : "text-gray-500 rotate-0"
                    }`}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </h3>
                {activeOTService === index && (
                  <p className="text-gray-700 mt-2 leading-relaxed animate-fade-in">
                    {service.description}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Left Side: Image Showcase (Reversed order for layout) */}
          <div className="lg:w-1/2 w-full sticky lg:top-28">
            <div
              className={`relative aspect-[4/3] bg-gray-200 border-2 border-gray-300 rounded-xl shadow-2xl overflow-hidden transition-all duration-700 ${
                isVisible ? "animate-fade-in-left delay-600" : "opacity-0"
              }`}
            >
              <img
                key={activeOTService}
                src={currentOTService.image || "/placeholder.svg"}
                alt={`OT Security Service: ${currentOTService.title}`}
                className="w-full h-full object-cover rounded-xl transition-opacity duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900/10 rounded-xl">
                <p className="text-xl font-semibold text-white text-shadow-md">
                  {currentOTService.title} View
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
            className={`font-mukta font-bold text-5xl md:text-6xl text-gray-900 mb-4 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            Our Differentiators
          </h2>
          <p
            className={`max-w-3xl text-xl text-gray-600 ${
              isVisible ? "animate-fade-in delay-200" : "opacity-0"
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
              className={`p-8 bg-white rounded-lg shadow-md border-t-4 border-green-500 text-left transition-all duration-500 hover:shadow-xl hover:bg-green-50/50 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
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
          className={`font-mukta font-bold text-5xl md:text-6xl mb-12 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          Quantifiable Client Success
        </h2>

        <div className="grid md:grid-cols-3 gap-0 border-t border-b border-gray-700/50">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`p-8 border-r border-gray-700/50 last:border-r-0 text-center transition-all duration-500 hover:bg-gray-800 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
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
              className={`font-mukta font-bold text-5xl md:text-6xl mb-4 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: isVisible ? "200ms" : "0s" }}
            >
              Ready to Elevate Your Security?
            </h2>

            {/* Subtext */}
            <p
              className={`text-xl text-white mb-10 max-w-2xl mx-auto ${
                isVisible ? "animate-fade-in delay-400" : "opacity-0"
              }`}
              style={{ animationDelay: isVisible ? "400ms" : "0s" }}
            >
              Schedule a personalized, zero-commitment consultation with our experts
              to discuss your specific AppSec and OT security requirements.
            </p>

            {/* Two CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row justify-center gap-4 ${
                isVisible ? "animate-fade-in delay-600" : "opacity-0"
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
export default function AppSecOTServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <TheChallengeSection />
      <OurSolutionSection /> {/* New Methodology Section */}
      <AppSecServicesSection />
      <OTSecurityServicesSection />
      <WhyCyethackSection /> {/* Differentiators */}
      <KeyMetricsSection />
      <CtaSection />
    </div>
  );
}
