"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { v4 as uuidv4 } from 'uuid';
import { onCLS, onLCP } from 'web-vitals';

export default function TrafficTracker() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const startTime = useRef(Date.now());
    const maxScroll = useRef(0);
    const sessionId = useRef(null);

    // Initialize Session ID
    useEffect(() => {
        let storedSessionId = localStorage.getItem('session_id');
        if (!storedSessionId) {
            storedSessionId = uuidv4();
            localStorage.setItem('session_id', storedSessionId);
        }
        sessionId.current = storedSessionId;
    }, []);

    // Track Web Vitals
    const performanceMetrics = useRef({});
    useEffect(() => {
        onCLS((metric) => { performanceMetrics.current.cls = metric.value; });
        onLCP((metric) => { performanceMetrics.current.lcp = metric.value; });
    }, []);

    // Track Scroll Depth
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = Math.round((scrollTop / docHeight) * 100);
            if (scrollPercent > maxScroll.current) {
                maxScroll.current = scrollPercent;
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [pathname]);

    // Main Logging Logic
    useEffect(() => {
        // Reset metrics for new page view
        startTime.current = Date.now();
        maxScroll.current = 0;
        performanceMetrics.current = {};

        const currentPath = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : "");
        const referrer = document.referrer;

        // Parse UTM parameters
        const utm = {
            source: searchParams.get('utm_source'),
            medium: searchParams.get('utm_medium'),
            campaign: searchParams.get('utm_campaign'),
        };

        const logData = () => {
            const timeOnPage = Date.now() - startTime.current;

            const payload = {
                path: currentPath,
                referrer,
                utm,
                sessionId: sessionId.current,
                language: navigator.language,
                screen: {
                    width: window.screen.width,
                    height: window.screen.height
                },
                viewport: {
                    width: window.innerWidth,
                    height: window.innerHeight
                },
                timeOnPage,
                scrollDepth: maxScroll.current,
                performance: {
                    ...performanceMetrics.current,
                    pageLoadTime: window.performance?.timing?.loadEventEnd - window.performance?.timing?.navigationStart || 0
                }
            };

            const backendUrl = process.env.NEXT_PUBLIC_API_ENDPOINT || 'http://localhost:5000/api';

            // Use sendBeacon for reliability on unload
            const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
            navigator.sendBeacon(`${backendUrl}/traffic`, blob);
        };

        // Log on unmount (page change) or visibility hidden (tab close)
        const handleVisibilityChange = () => {
            if (document.visibilityState === 'hidden') {
                logData();
            }
        };
      

        return () => {
            window.removeEventListener('visibilitychange', handleVisibilityChange);
            window.removeEventListener('pagehide', logData);
            logData();
        };
    }, [pathname, searchParams]);

    return null;
}
