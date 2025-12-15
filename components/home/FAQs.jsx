"use client"
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { fetchFAQs } from "@/lib/store/slices/faqSlice"
import { Plus, Minus, MessageCircle } from "lucide-react"
import Link from 'next/link'

const FAQs = () => {
  const dispatch = useDispatch()
  const { items: faqs, status } = useSelector((state) => state.faqs)
  const [openIndex, setOpenIndex] = useState(null)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchFAQs())
    }
  }, [status, dispatch])

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Support</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </p>
          <p className="mt-4 text-lg text-gray-500">
            Everything you need to know about our services and security solutions. Can't find the answer you're looking for? Feel free to contact us.
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto">
          {status === 'loading' ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-600"></div>
            </div>
          ) : (
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-xl border transition-all duration-200 ${openIndex === index
                      ? 'border-indigo-200 shadow-md ring-1 ring-indigo-50'
                      : 'border-gray-200 hover:border-indigo-100'
                    }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex items-center justify-between w-full px-6 py-5 text-left focus:outline-none"
                  >
                    <span className={`text-lg font-medium transition-colors duration-200 ${openIndex === index ? 'text-indigo-600' : 'text-gray-900'
                      }`}>
                      {faq.question}
                    </span>
                    <span className={`ml-6 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-200 ${openIndex === index ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-100 text-gray-400'
                      }`}>
                      {openIndex === index ? (
                        <Minus className="w-5 h-5" />
                      ) : (
                        <Plus className="w-5 h-5" />
                      )}
                    </span>
                  </button>

                  <div
                    className={`px-6 transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                  >
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center p-1 rounded-full bg-indigo-50 border border-indigo-100 mb-6">
            <span className="flex items-center px-3 py-1 text-sm font-medium text-indigo-600">
              <MessageCircle className="w-4 h-4 mr-2" />
              Still have questions?
            </span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">We're here to help</h3>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">
            Our team is available to answer any questions you might have about our security services and compliance solutions.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-lg md:px-10 transition-colors shadow-sm hover:shadow-md"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FAQs

