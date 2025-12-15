import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Providers } from "@/components/Providers";
import { Toaster } from "sonner";
import Chatbot from "@/components/Chatbot";
import TrafficTrackerWrapper from "@/components/TrafficTrackerWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL('https://www.cyethack.com'),
  title: {
    default: "Cyethack Solutions - Your Privacy Our Priority",
    template: "%s | Cyethack Solutions",
  },
  description:
    "Cyethack Security Solutions. Comprehensive Cybersecurity to Safeguard your digital assets. Cyethack Solutions | IIT Kanpur. Your Privacy, Our Priority. Cyethack drives security and transformation with VAPT services and our threat intelligence product, VMDR.",
  keywords: ["Cybersecurity", "VAPT", "Penetration Testing", "Cloud Security", "CERT-In Audit", "IIT Kanpur", "Cyethack"],
  openGraph: {
    title: "Cyethack Solutions - Your Privacy Our Priority",
    description: "Cyethack Security Solutions. Comprehensive Cybersecurity to Safeguard your digital assets.",
    url: "https://www.cyethack.com",
    siteName: "Cyethack Solutions",
    images: [
      {
        url: "/og/og.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={inter.className}>
        <Providers>
          <TrafficTrackerWrapper />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Chatbot />
          <Toaster position="top-right" />
        </Providers>
      </body>
    </html>
  );
}
