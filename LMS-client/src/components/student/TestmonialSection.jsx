import React from 'react'
import { dummyTestimonial } from '../../assets/assets'

function TestmonialSection() {
  console.log("tastimonial :", dummyTestimonial.map((t)=>({
    name:t.name,
    role:t.role
  })));
  
  return (
    <>
      <div className='flex flex-col items-center justify-center my-16'>
        <div className='my-5 text-center '> 
          <h2 className='mb-4 text-2xl'>Tesimonials</h2>
          <p>Hear from our learners as they share their journeys of tranformation, success, and how our <br/>
          platform has made a difference in their lives</p>
        </div>
        <div className="grid grid-cols-1 gap-6 p-6 mx-28 sm:grid-cols-2 lg:grid-cols-3">
          {dummyTestimonial.map((Testimonial, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 text-center transition duration-300 bg-white shadow-md rounded-xl hover:shadow-lg"
            >
              <img
                src={Testimonial.image}
                alt={Testimonial.name}
                className="object-cover w-24 h-24 mb-4 border-4 border-blue-100 rounded-full"
              />
              <h2 className="text-xl font-semibold text-gray-800">{Testimonial.name}</h2>
              <h3 className="mb-2 text-sm text-gray-500">{Testimonial.role}</h3>

              {/* ⭐ Rating */}
              <div className="flex items-center justify-center mb-2 space-x-1">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <svg
                    key={starIndex}
                    className={`w-5 h-5 ${
                      starIndex < Testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.09 3.357a1 1 0 00.95.69h3.522c.969 0 1.371 1.24.588 1.81l-2.85 2.07a1 1 0 00-.364 1.118l1.09 3.357c.3.921-.755 1.688-1.54 1.118l-2.85-2.07a1 1 0 00-1.175 0l-2.85 2.07c-.784.57-1.838-.197-1.539-1.118l1.09-3.357a1 1 0 00-.364-1.118L2.9 8.784c-.783-.57-.38-1.81.588-1.81h3.522a1 1 0 00.95-.69l1.09-3.357z" />
                  </svg>
                ))}
              </div>

              {/* 💬 Feedback */}
              <p className="mt-2 text-sm text-gray-600">"{Testimonial.feedback}"</p>
            </div>
          ))}
        </div>


      </div> 
    </>
  )
}

export default TestmonialSection
