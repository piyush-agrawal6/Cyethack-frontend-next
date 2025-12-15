"use client";
import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, ChevronRight, Bot, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            type: "bot",
            text: "Hi there! 👋 I'm your Cyethack assistant. How can I help you today?",
            options: ["Our Services", "CyeNet Platform", "Contact Sales", "About Us"],
        },
    ]);
    const [inputValue, setInputValue] = useState("");
    const messagesEndRef = useRef(null);
    const pathname = usePathname();

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    // Auto-popup on first visit
    useEffect(() => {
        const hasVisited = localStorage.getItem("hasVisited");
        if (!hasVisited) {
            const timer = setTimeout(() => {
                setIsOpen(true);
                localStorage.setItem("hasVisited", "true");
            }, 2000); // 2 seconds delay
            return () => clearTimeout(timer);
        }
    }, []);

    const handleOptionClick = (option) => {
        // Add user message
        const userMsg = { type: "user", text: option };
        setMessages((prev) => [...prev, userMsg]);

        // Simulate bot response
        setTimeout(() => {
            let botResponse = { type: "bot", text: "", options: [] };

            switch (option) {
                case "Our Services":
                    botResponse = {
                        type: "bot",
                        text: "We offer a wide range of cybersecurity services including VAPT, Cloud Security, and Compliance.",
                        options: ["VAPT Services", "Cloud Security", "Compliance", "Back to Menu"],
                        link: "/services",
                        linkText: "View All Services",
                    };
                    break;
                case "CyeNet Platform":
                    botResponse = {
                        type: "bot",
                        text: "CyeNet is our all-in-one cyber defense ecosystem featuring VMDR, Web Scanner, and Network Scanner.",
                        options: ["VMDR", "Web Scanner", "Network Scanner", "Back to Menu"],
                        link: "/cyenet",
                        linkText: "Explore CyeNet",
                    };
                    break;
                case "Contact Sales":
                    botResponse = {
                        type: "bot",
                        text: "Ready to secure your business? You can reach out to our sales team directly.",
                        options: ["Back to Menu"],
                        link: "/contact",
                        linkText: "Contact Us Now",
                    };
                    break;
                case "About Us":
                    botResponse = {
                        type: "bot",
                        text: "Cyethack is a leading cybersecurity firm dedicated to protecting your digital assets.",
                        options: ["Our Team", "Careers", "Back to Menu"],
                        link: "/about-us",
                        linkText: "Read Our Story",
                    };
                    break;
                case "VAPT Services":
                    botResponse = {
                        type: "bot",
                        text: "Our VAPT services include Web App, Mobile App, and Network Penetration Testing.",
                        options: ["Our Services", "Back to Menu"],
                        link: "/application-security",
                        linkText: "Learn about VAPT",
                    };
                    break;
                case "Back to Menu":
                    botResponse = {
                        type: "bot",
                        text: "What else can I help you with?",
                        options: ["Our Services", "CyeNet Platform", "Contact Sales", "About Us"],
                    };
                    break;
                default:
                    botResponse = {
                        type: "bot",
                        text: "I'm not sure about that. Would you like to speak to a human?",
                        options: ["Contact Sales", "Back to Menu"],
                        link: "/contact",
                        linkText: "Contact Support",
                    };
            }
            setMessages((prev) => [...prev, botResponse]);
        }, 600);
    };

    const handleSend = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const text = inputValue.trim();
        setInputValue("");
        handleOptionClick(text); // Reuse logic for now, can be enhanced with fuzzy matching
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4 font-sans">
            {/* Chat Window */}
            <div
                className={`
          bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden
          transition-all duration-300 ease-in-out origin-bottom-right
          ${isOpen ? "w-[350px] h-[500px] opacity-100 scale-100" : "w-0 h-0 opacity-0 scale-50"}
        `}
            >
                {/* Header */}
                <div className="bg-gray-900 p-4 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/30">
                            <Bot className="w-6 h-6 text-green-400" />
                        </div>
                        <div>
                            <h3 className="text-white font-bold text-sm">Cyethack Assistant</h3>
                            <p className="text-green-400 text-xs flex items-center gap-1">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                Online
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-gray-400 hover:text-white transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Messages Area */}
                <div className="h-[380px] overflow-y-auto p-4 bg-gray-50 flex flex-col gap-4">
                    {messages.map((msg, idx) => (
                        <div
                            key={idx}
                            className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                        >
                            <div
                                className={`
                  max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm
                  ${msg.type === "user"
                                        ? "bg-green-600 text-white rounded-br-none"
                                        : "bg-white text-gray-800 border border-gray-100 rounded-bl-none"
                                    }
                `}
                            >
                                <p>{msg.text}</p>

                                {/* Link in bot message */}
                                {msg.link && (
                                    <Link
                                        href={msg.link}
                                        className="mt-3 inline-flex items-center gap-1 text-xs font-bold underline decoration-green-500/50 hover:decoration-green-500 transition-all"
                                        style={{ color: msg.type === 'user' ? 'white' : '#16a34a' }}
                                    >
                                        {msg.linkText} <ChevronRight className="w-3 h-3" />
                                    </Link>
                                )}

                                {/* Options Chips */}
                                {msg.options && (
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {msg.options.map((opt, i) => (
                                            <button
                                                key={i}
                                                onClick={() => handleOptionClick(opt)}
                                                className={`
                          text-xs px-3 py-1.5 rounded-full border transition-all duration-200
                          ${msg.type === "user"
                                                        ? "bg-white/10 border-white/20 hover:bg-white/20"
                                                        : "bg-gray-50 border-gray-200 hover:border-green-500 hover:text-green-600 hover:bg-green-50"
                                                    }
                        `}
                                            >
                                                {opt}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <form
                    onSubmit={handleSend}
                    className="absolute bottom-0 left-0 w-full p-3 bg-white border-t border-gray-100 flex gap-2"
                >
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Type a message..."
                        className="flex-1 bg-gray-50 text-gray-800 text-sm rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500/20"
                    />
                    <button
                        type="submit"
                        disabled={!inputValue.trim()}
                        className="p-2 bg-gray-900 text-white rounded-lg hover:bg-green-600 disabled:opacity-50 disabled:hover:bg-gray-900 transition-colors"
                    >
                        <Send className="w-4 h-4" />
                    </button>
                </form>
            </div>

            {/* Toggle Button (FAB) */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`
          w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110
          ${isOpen ? "bg-gray-200 text-gray-600 rotate-90" : "bg-green-600 text-white hover:bg-green-500 hover:shadow-green-500/40"}
        `}
            >
                {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-7 h-7" />}
            </button>
        </div>
    );
};

export default Chatbot;
