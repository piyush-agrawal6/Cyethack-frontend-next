'use client';

import { useState } from 'react';
import Link from 'next/link';

import { Facebook, Instagram, Linkedin, Youtube, X as TwitterX, MapPin, Mail } from 'lucide-react';

// Data structure updated with new partner image paths
const footerContent = {
  groupedServices: {
    'IT Security': [
      { name: 'Application Security', href: '/application-security' },
      { name: 'Network Security', href: '/network-security' },
      { name: 'Cloud Security', href: '/cloud-security' },
      { name: 'Red Teaming Assessment', href: '/red-teaming-assessment' },
      { name: 'Container Security', href: '/container-security' },
    ],
    'OT Security': [
      { name: 'Architecture Review', href: '/architecture-review' },
      { name: 'Threat Detection & Response', href: '/threat-detection-response' },
      { name: 'Inventory Asset Management', href: '/inventory-asset-management' },
      { name: 'IoT Security', href: '/iot-security' },
    ],
    'Compliance': [
      { name: 'SOC 2 Compliance', href: '/soc2' },
      { name: 'ISO 27001 Compliance', href: '/iso27001' },
      { name: 'GDPR Compliance', href: '/gdpr' },
      { name: 'PCI DSS Compliance', href: '/pci-dss-compliance' },
      { name: 'HIPAA Compliance', href: '/hipaa-compliance' },
      { name: 'CERT-In Audit (MSME)', href: '/certin-cybersecurity-audit-for-msme' },
    ],
  },
  company: [
    { name: 'Contact Us', href: '/contact' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Blogs', href: 'https://medium.com/@hackrider' },
    { name: 'Videos', href: 'https://www.youtube.com/@cyethacksolutions6761/videos' },
    { name: 'News', href: '/news' },
  ],
  socials: [
    { href: 'https://www.facebook.com/Cyethack', Icon: Facebook },
    { href: 'https://www.instagram.com/cyethack_solutions/', Icon: Instagram },
    { href: 'https://twitter.com/cyethack', Icon: TwitterX },
    { href: 'https://www.linkedin.com/company/cyethack-security/', Icon: Linkedin },
    { href: 'https://www.youtube.com/@cyethacksolutions6761/videos', Icon: Youtube },
  ],
  partners: [
    { src: '/footer/si.png', alt: 'Startup India', link: '#' },
    { src: '/footer/sinup.png', alt: 'Startup UP', link: '#' },
    { src: '/footer/min.png', alt: 'Make in India', link: '#' },
    { src: '/footer/nmicps.png', alt: 'Cyber Physical', link: '#' },
  ],
};

const Footer = () => {
  const [email, setEmail] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Subscribed with email:', email);
    setEmail('');
  };

  return (
    <footer
      className="border-t border-green-500 bg-gray-900 relative"
      style={{
        backgroundImage: 'url("/images/circuit-bg.png")',
        backgroundSize: 'cover',
        backgroundOpacity: 0.1,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-30 pointer-events-none"></div>

      {/* Desktop/Tablet Footer */}
      <div className="hidden md:block relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

          <div className="grid grid-cols-12 gap-x-12">

            {/* Column 1: Company Info & Socials (col-span-3) */}
            <div className="col-span-3">
              <div className="mb-4">
                <img src="/logo/logo.png" alt="Cyethack Solutions" className="h-12 w-auto mb-2" />
                <p className="text-sm font-semibold text-white">Cyethack Solutions | IIT Kanpur</p>
              </div>

              <p className="text-sm text-gray-300 mb-4">
                Your Privacy, Our Priority
              </p>
              <p className="text-sm text-gray-400 mb-6">
                Cyethack drives security and transformation with VAPT services and our threat intelligence product, VMDR.
              </p>

              {/* CERT-in Compliance Badge (UPDATED SECTION) */}
              <div className="mb-6 p-3 border border-blue-500/50 bg-blue-900/30 rounded-lg text-xs text-white">
                <div className="flex items-center justify-start mb-2">
                  <img
                    src="/footer/certin.png"
                    alt="CERT-In Logo"
                    className="h-[30px] mr-2"
                  />
                  <span className="font-bold text-sm">Compliant</span>
                </div>
                <p className="text-[12px] text-gray-400 pl-1">Now offering cert-in compliance services for MSMEs</p>
              </div>

              <div className="flex space-x-4 mt-6">
                {footerContent.socials.map(({ href, Icon }) => (
                  <Link
                    key={href}
                    href={href}
                    className="text-gray-400 hover:text-green-500 transition-colors"
                    aria-label={`Link to Cyethack ${Icon.displayName}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Column 2: Contact (col-span-3) */}
            <div className="col-span-3">
              <h3 className="text-sm font-semibold text-white mb-4">Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="text-sm text-gray-300">
                    <p className='text-white font-medium mb-1'>IIT Kanpur Outreach Center</p>
                    C Block, Sector 62, Gautam Budh Nagar, Noida, <br />
                    Uttar Pradesh, 201309
                  </div>
                </li>
                <li className="flex items-center">
                  <Link
                    href="mailto:support@cyethack.com"
                    className="text-sm text-gray-300 hover:text-green-500 transition-colors"
                  >
                    support@cyethack.com
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Services (col-span-4) */}
            <div className="col-span-4">
              <h3 className="text-sm font-semibold text-white mb-4">Services</h3>

              <div className="flex flex-row flex-wrap justify-start gap-x-8 lg:gap-x-12">
                {Object.entries(footerContent.groupedServices).map(([groupName, services]) => (
                  <div key={groupName} className="min-w-[100px] pb-4">
                    <p className="text-xs text-gray-500 uppercase font-semibold mb-3">{groupName}</p>
                    <ul className="space-y-2">
                      {services.map((item) => (
                        <li key={item.name}>
                          <Link
                            href={item.href}
                            className="text-sm text-gray-300 hover:text-green-500 transition-colors"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

            </div>

            {/* Column 4: Company Links (col-span-2) */}
            <div className="col-span-2">
              <h3 className="text-sm font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2">
                {footerContent.company.map(({ name, href }) => (
                  <li key={name}>
                    <Link
                      href={href}
                      className="text-sm text-gray-300 hover:text-green-500 transition-colors"
                      {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Compliance & Certification Logos (INLINE IMPLEMENTATION - Desktop FIX) */}
          <div className="mt-10 pt-8 flex flex-wrap justify-center items-center gap-x-12 gap-y-6 border-t border-gray-800/50">
            {footerContent.partners.map((partner, index) => (
              <div
                key={index}
                // Removed max-w constraints on container for desktop/laptop view
                className="flex justify-center items-center flex-1 text-center"
              >
                <Link href={partner.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={partner.src}
                    alt={partner.alt}
                    // FIX: Using w-[120px] on the image to ensure consistent large size on desktop/laptop
                    className="w-[120px] h-auto object-contain transition-transform duration-300 ease-in-out hover:scale-110"
                  />
                </Link>
              </div>
            ))}
          </div>


          {/* Bottom Footer */}
          <div className="mt-8 pt-6 border-t border-800/50 flex justify-between items-center">
            <p className="text-xs text-gray-500">Copyright © 2025 Cyethack Solutions.</p>
            <div className="flex space-x-6">
              <Link
                href="/privacy-policy"
                className="text-xs text-gray-500 hover:text-green-500"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Footer */}
      <div className="md:hidden relative z-10">
        <div className="px-4 py-8 border-t border-green-500 bg-gray-900">
          <div className="flex flex-col">
            <img src="/logo/logo.png" alt="Cyethack Solutions" className="h-10 w-auto mb-6" />
            <p className="text-sm font-semibold text-white">Cyethack Solutions | IIT Kanpur</p>
            <p className="text-sm text-gray-300 mb-4">Your Privacy, Our Priority.</p>

            {/* Contact Details */}
            <h3 className="text-sm font-semibold text-white mb-3 mt-4">Contact</h3>
            <p className='text-sm text-gray-400'>IIT Kanpur Outreach Center</p>
            <p className='text-xs text-gray-500 mb-4'>C Block, Sector 62, Noida, UP, 201309</p>
            <Link href="mailto:support@cyethack.com" className="text-sm text-green-500 mb-6 hover:underline">
              support@cyethack.com
            </Link>

            {/* Services for Mobile (Grouped & Stacked) */}
            <h3 className="text-sm font-semibold text-white mb-3">Services</h3>
            {Object.entries(footerContent.groupedServices).map(([groupName, services]) => (
              <div key={groupName} className="mb-4">
                <p className="text-xs text-gray-500 uppercase font-semibold mb-2">{groupName}</p>
                <ul className="space-y-2">
                  {services.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-gray-300 hover:text-green-500"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <h3 className="text-sm font-semibold text-white mb-3">Company</h3>
            <ul className="space-y-2 mb-6">
              {footerContent.company.map(({ name, href }) => (
                <li key={name}>
                  <Link
                    href={href}
                    className="text-sm text-gray-300 hover:text-green-500"
                    {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-sm font-semibold text-white mb-3">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              {footerContent.socials.map(({ href, Icon }) =>
                <Link
                  key={href}
                  href={href}
                  className="text-gray-400 hover:text-green-500 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="h-5 w-5" />
                </Link>
              )}
            </div>

            {/* Partner Logos on Mobile (INLINE IMPLEMENTATION - Mobile) */}
            <div className='mt-6 flex flex-wrap justify-center items-center gap-x-8 gap-y-4'>
              {footerContent.partners.map((partner, index) => (
                <div key={index} className="flex justify-center items-center flex-1 max-w-[40%] text-center">
                  <Link href={partner.link} target="_blank" rel="noopener noreferrer">
                    <img
                      src={partner.src}
                      alt={partner.alt}
                      // FORCED SIZE: This value ensures the image is visibly larger on mobile.
                      className="w-[120px] h-auto object-contain transition-transform duration-300 ease-in-out"
                    />
                  </Link>
                </div>
              ))}
            </div>

            <p className="text-xs text-gray-500 mt-6">Copyright © 2025 Cyethack Solutions.</p>
            <Link href="/privacy-policy" className="text-xs text-gray-500 hover:text-green-500 mt-2">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
