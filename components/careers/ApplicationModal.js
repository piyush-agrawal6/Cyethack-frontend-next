"use client";
import React, { useState } from "react";
import { X, Upload, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const ApplicationModal = ({ isOpen, onClose, jobTitle }) => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        linkedin: "",
        portfolio: "",
        currentCompany: "",
        noticePeriod: "",
        coverLetter: "",
        resume: null,
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData({ ...formData, resume: file });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const apiData = {
                fname: formData.fullName.split(" ")[0],
                lname: formData.fullName.split(" ").slice(1).join(" ") || "",
                email: formData.email,
                phoneNumber: formData.phone,
                companyName: formData.currentCompany || "N/A",
                companySize: "N/A",
                interestedIn: "Job Application",
                sector: "N/A",
                userRole: "Applicant",
                message: formData.coverLetter,
                termsAgreed: true,
                // Job Specific
                jobTitle: jobTitle,
                resume: formData.resume ? formData.resume.name : "",
                linkedin: formData.linkedin,
                portfolio: formData.portfolio,
                noticePeriod: formData.noticePeriod,
                currentCompany: formData.currentCompany,
            };

            const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/contact`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(apiData),
            });

            if (response.ok) {
                toast.success(`Application submitted for ${jobTitle}!`);
                onClose();
                setFormData({
                    fullName: "",
                    email: "",
                    phone: "",
                    linkedin: "",
                    portfolio: "",
                    currentCompany: "",
                    noticePeriod: "",
                    coverLetter: "",
                    resume: null,
                });
            } else {
                throw new Error("Failed to submit application");
            }
        } catch (error) {
            console.error("Application error:", error);
            toast.error("Failed to submit application. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

                {/* Background overlay */}
                <div
                    className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity"
                    aria-hidden="true"
                    onClick={onClose}
                ></div>

                {/* Modal panel */}
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                <div className="inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl w-full">
                    <div className="absolute top-0 right-0 pt-4 pr-4">
                        <button
                            type="button"
                            className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
                            onClick={onClose}
                        >
                            <span className="sr-only">Close</span>
                            <X className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>

                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                                <h3 className="text-2xl leading-6 font-bold text-gray-900" id="modal-title">
                                    Apply for <span className="text-green-600">{jobTitle}</span>
                                </h3>
                                <p className="text-sm text-gray-500 mt-2">
                                    Please fill out the form below to submit your application.
                                </p>

                                <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                                    {/* Personal Info */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name *</label>
                                            <input
                                                type="text"
                                                name="fullName"
                                                id="fullName"
                                                required
                                                value={formData.fullName}
                                                onChange={handleChange}
                                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address *</label>
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number *</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                id="phone"
                                                required
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700">LinkedIn Profile</label>
                                            <input
                                                type="url"
                                                name="linkedin"
                                                id="linkedin"
                                                value={formData.linkedin}
                                                onChange={handleChange}
                                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    {/* Professional Details */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="currentCompany" className="block text-sm font-medium text-gray-700">Current Company</label>
                                            <input
                                                type="text"
                                                name="currentCompany"
                                                id="currentCompany"
                                                value={formData.currentCompany}
                                                onChange={handleChange}
                                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="noticePeriod" className="block text-sm font-medium text-gray-700">Notice Period</label>
                                            <select
                                                name="noticePeriod"
                                                id="noticePeriod"
                                                value={formData.noticePeriod}
                                                onChange={handleChange}
                                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                            >
                                                <option value="">Select...</option>
                                                <option value="Immediate">Immediate</option>
                                                <option value="15 Days">15 Days</option>
                                                <option value="30 Days">30 Days</option>
                                                <option value="60 Days">60 Days</option>
                                                <option value="90 Days">90 Days</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Resume Upload */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Resume/CV *</label>
                                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-green-500 transition-colors">
                                            <div className="space-y-1 text-center">
                                                {formData.resume ? (
                                                    <div className="flex flex-col items-center text-green-600">
                                                        <CheckCircle className="h-12 w-12 mb-2" />
                                                        <span className="text-sm font-medium">{formData.resume.name}</span>
                                                        <button
                                                            type="button"
                                                            onClick={() => setFormData({ ...formData, resume: null })}
                                                            className="text-xs text-red-500 mt-2 hover:underline"
                                                        >
                                                            Remove
                                                        </button>
                                                    </div>
                                                ) : (
                                                    <>
                                                        <Upload className="mx-auto h-12 w-12 text-gray-400" />
                                                        <div className="flex text-sm text-gray-600">
                                                            <label
                                                                htmlFor="file-upload"
                                                                className="relative cursor-pointer bg-white rounded-md font-medium text-green-600 hover:text-green-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-green-500"
                                                            >
                                                                <span>Upload a file</span>
                                                                <input id="file-upload" name="file-upload" type="file" className="sr-only" accept=".pdf,.doc,.docx" onChange={handleFileChange} required />
                                                            </label>
                                                            <p className="pl-1">or drag and drop</p>
                                                        </div>
                                                        <p className="text-xs text-gray-500">PDF, DOC, DOCX up to 10MB</p>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Cover Letter */}
                                    <div>
                                        <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700">Cover Letter</label>
                                        <div className="mt-1">
                                            <textarea
                                                id="coverLetter"
                                                name="coverLetter"
                                                rows={3}
                                                value={formData.coverLetter}
                                                onChange={handleChange}
                                                className="shadow-sm focus:ring-green-500 focus:border-green-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                                placeholder="Tell us why you're a great fit..."
                                            />
                                        </div>
                                    </div>

                                    {/* Submit Button */}
                                    <div className="mt-5 sm:mt-6">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className={`w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-3 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:text-sm ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                                        >
                                            {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApplicationModal;
