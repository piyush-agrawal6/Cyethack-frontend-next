"use client"
import React, { useState, useEffect } from "react"
import PricingCard from "./PricingCard"
import ComparisonTable from "./ComparisonTable"
import ReportSection from "./ReportSection"
import { useDispatch, useSelector } from "react-redux"
import { fetchPricing } from "@/lib/store/slices/pricingSlice"

const PricingSection = () => {
    const dispatch = useDispatch()
    const { items: allPlans, status } = useSelector((state) => state.pricing)
    const [activeTab, setActiveTab] = useState("services")

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchPricing())
        }
    }, [status, dispatch])

    const servicePlans = allPlans.filter(plan => plan.planType === 'services')
    const cyenetPlans = allPlans.filter(plan => plan.planType === 'cyenet')

    const activePlans = activeTab === "services" ? servicePlans : cyenetPlans

    return (
        <div className="-mt-20 relative z-10">
            {/* Tabs */}
            <div className="flex justify-center mb-12">
                <div className="bg-white/10 backdrop-blur-md p-1.5 rounded-full inline-flex border border-white/20 shadow-lg">
                    <button
                        onClick={() => setActiveTab("services")}
                        className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-200 ${activeTab === "services"
                            ? "bg-green-500 text-white shadow-md"
                            : "text-white hover:text-green-400"
                            }`}
                    >
                        VAPT Services
                    </button>
                    <button
                        onClick={() => setActiveTab("cyenet")}
                        className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-200 ${activeTab === "cyenet"
                            ? "bg-green-500 text-white shadow-md"
                            : "text-white hover:text-green-400"
                            }`}
                    >
                        CyeNet Platform
                    </button>
                </div>
            </div>

            <section className="bg-gray-50 py-20 md:py-32 rounded-t-[3rem]">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">

                    {/* Pricing Cards */}
                    {status === 'loading' ? (
                        <div className="text-center py-20">Loading pricing plans...</div>
                    ) : (
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-20">
                            {activePlans.map((plan, index) => (
                                <PricingCard key={index} {...plan} />
                            ))}
                        </div>
                    )}

                    {/* CyeNet Specific Sections */}
                    {activeTab === "cyenet" && (
                        <>
                            <ComparisonTable />
                            <ReportSection />
                        </>
                    )}
                </div>
            </section>
        </div>
    )
}

export default PricingSection
