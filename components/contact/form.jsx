"use client";
import React, { useState } from "react";
import { toast } from "sonner";
import {
  User,
  Mail,
  Phone,
  Building,
  Users,
  Layers,
  Briefcase,
  Send,
  ChevronDown,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Twitter
} from "lucide-react";
import Link from "next/link";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    companySize: "",
    interestedIn: "",
    sector: "",
    designation: "",
    termsAgreed: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const nameParts = formData.name.split(' ');
    const fname = nameParts[0] || "";
    const lname = nameParts.slice(1).join(' ') || "";

    const apiData = {
      fname,
      lname,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      companyName: formData.companyName,
      companySize: formData.companySize,
      interestedIn: formData.interestedIn,
      sector: formData.sector,
      userRole: formData.designation,
      message: `Inquiry about ${formData.interestedIn}`,
      termsAgreed: formData.termsAgreed,
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(apiData),
        }
      );

      if (response.ok) {
        toast.success(
          "Thank you for your message! We'll get back to you soon."
        );

        setFormData({
          name: "",
          email: "",
          phoneNumber: "",
          companyName: "",
          companySize: "",
          interestedIn: "",
          sector: "",
          designation: "",
          termsAgreed: false,
        });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to submit form");
      }
    } catch (error) {
      toast.error(
        error.message ||
        "An error occurred while submitting the form. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const InputField = ({ icon: Icon, ...props }) => (
    <div className="relative group">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <Icon className="h-5 w-5 text-gray-400 group-focus-within:text-green-600 transition-colors" />
      </div>
      <input
        {...props}
        className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent focus:bg-white transition-all duration-200"
      />
    </div>
  );

  const SelectField = ({ icon: Icon, options, placeholder, ...props }) => (
    <div className="relative group">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <Icon className="h-5 w-5 text-gray-400 group-focus-within:text-green-600 transition-colors" />
      </div>
      <select
        {...props}
        className="w-full pl-11 pr-10 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent focus:bg-white transition-all duration-200 appearance-none cursor-pointer"
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
        <ChevronDown className="h-4 w-4 text-gray-400" />
      </div>
    </div>
  );

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 pb-24 -mt-24 lg:-mt-32 relative z-10">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">

        {/* Left Side: Contact Information */}
        <div className="lg:w-1/3 bg-gray-900 p-8 lg:p-12 text-white flex flex-col justify-between relative overflow-hidden">
          {/* Decorative Circle */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-green-600 opacity-20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-blue-600 opacity-20 blur-3xl"></div>

          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="text-gray-400 mb-10">
              Fill up the form and our Team will get back to you within 24 hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-green-500 mt-1" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-400 text-sm">+91 123 456 7890</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-green-500 mt-1" />
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:support@cyethack.com" className="text-gray-400 text-sm hover:text-white transition-colors">support@cyethack.com</a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-green-500 mt-1" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-gray-400 text-sm">
                    IIT Kanpur Outreach Center<br />
                    C Block, Sector 62, Noida,<br />
                    Uttar Pradesh, 201309
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-12">
            <p className="font-medium mb-4">Follow Us</p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/Cyethack" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-green-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/cyethack" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-green-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/cyethack_solutions/" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-green-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/cyethack-security/" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-green-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="lg:w-2/3 p-8 lg:p-12 bg-white">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                icon={User}
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <InputField
                icon={Mail}
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <InputField
                icon={Phone}
                type="tel"
                name="phoneNumber"
                placeholder="Your Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
              <InputField
                icon={Building}
                type="text"
                name="companyName"
                placeholder="Company Name"
                value={formData.companyName}
                onChange={handleChange}
                required
              />

              <SelectField
                icon={Users}
                name="companySize"
                placeholder="Select Company Size"
                value={formData.companySize}
                onChange={handleChange}
                options={[
                  "1-10 employees",
                  "11-50 employees",
                  "51-200 employees",
                  "201-500 employees",
                  "501+ employees"
                ]}
                required
              />

              <SelectField
                icon={Layers}
                name="interestedIn"
                placeholder="Interested In"
                value={formData.interestedIn}
                onChange={handleChange}
                options={[
                  "VAPT Services",
                  "CyeNET Threat Intelligence",
                  "IT Security",
                  "OT Security",
                  "Compliance Services",
                  "IoT Security",
                  "Others"
                ]}
                required
              />

              <SelectField
                icon={Briefcase}
                name="sector"
                placeholder="Select Company Sector"
                value={formData.sector}
                onChange={handleChange}
                options={[
                  "Technology",
                  "Finance",
                  "Healthcare",
                  "Manufacturing",
                  "Retail",
                  "Government",
                  "Education",
                  "Other"
                ]}
                required
              />

              <SelectField
                icon={User}
                name="designation"
                placeholder="Select Designation"
                value={formData.designation}
                onChange={handleChange}
                options={[
                  "C-Level Exec",
                  "VP / Director",
                  "Manager",
                  "Individual Contributor",
                  "Student / Other"
                ]}
                required
              />
            </div>

            <div className="flex items-start mt-6">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  name="termsAgreed"
                  type="checkbox"
                  checked={formData.termsAgreed}
                  onChange={handleChange}
                  className="h-4 w-4 text-red-600 border-gray-300 rounded focus:ring-red-500 cursor-pointer"
                  required
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="terms" className="font-medium text-gray-700 cursor-pointer">
                  I allow Cyethack to contact me for scheduling and marketing, as per its{" "}
                  <Link href="/privacy-policy" className="text-blue-600 hover:text-blue-500 hover:underline">
                    Privacy Policy
                  </Link>
                  .<span className="text-red-500 ml-1">*</span>
                </label>
              </div>
            </div>

            <div className="flex justify-end mt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-[#E31E24] hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                  }`}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
