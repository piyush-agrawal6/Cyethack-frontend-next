"use client"
import { useState, useEffect } from "react"
import { User, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { useDispatch, useSelector } from "react-redux"
import { fetchReviews } from "@/lib/store/slices/reviewSlice"

const CustomerTestimonials = () => {
  const dispatch = useDispatch()
  const { items: testimonials, status } = useSelector((state) => state.reviews)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchReviews())
    }
  }, [status, dispatch])

  const nextTestimonial = () => {
    if (testimonials.length === 0) return
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    if (testimonials.length === 0) return
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index) => {
    setCurrentIndex(index)
  }

  if (status === 'loading') {
    return <div className="py-20 text-center">Loading testimonials...</div>
  }

  if (testimonials.length === 0) {
    return null; // Or some placeholder
  }

  return (
    <section className="w-full bg-gray-50 py-20 xl:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="text-green-600 font-bold tracking-wider uppercase text-sm mb-4 block">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600">
            Don't just take our word for it. Here's what industry leaders have to say about our services.
          </p>
        </div>

        {/* Testimonials Display */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[0, 1].map((offset) => {
              const index = (currentIndex + offset) % testimonials.length;
              const testimonial = testimonials[index];

              // Only show second card on large screens via CSS


              return (
                <div
                  key={index}
                  className={`bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-6 ${offset === 1 ? 'hidden lg:flex' : 'flex'}`}
                >
                  {/* Stars */}
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.stars }).map((_, idx) => (
                      <svg key={idx} className="w-5 h-5 fill-current text-yellow-400" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-xl font-medium text-gray-900 leading-relaxed relative">
                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-green-100 -z-10 transform -scale-x-100" />
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="mt-auto pt-6 border-t border-gray-100 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                      <User className="w-6 h-6 text-gray-500" />
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.title}</div>
                    </div>
                    <div className="pl-4 border-l border-gray-200">
                      <img
                        src={testimonial.companyLogo || "/images/webflow.png"}
                        alt="Company Logo"
                        className="h-6 w-auto object-contain opacity-60 grayscale hover:grayscale-0 transition-all"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-12">
            {/* Pagination Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-green-600 w-8" : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex gap-3">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-600 hover:bg-green-600 hover:text-white hover:border-green-600 transition-all duration-300 shadow-sm"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-600 hover:bg-green-600 hover:text-white hover:border-green-600 transition-all duration-300 shadow-sm"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CustomerTestimonials
