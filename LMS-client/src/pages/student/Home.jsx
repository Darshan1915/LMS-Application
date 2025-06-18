import React from 'react'
import Hero from '../../components/student/Hero'
import Companies from '../../components/student/Companies'
import CourseSection from '../../components/student/CourseSection'
import Footer from '../../components/student/Footer'
import TestmonialSection from '../../components/student/TestmonialSection'
import CallToAction from '../../components/student/CallToAction'

function Home() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-blue-200 to-blue-50'>
      <Hero/>
      <Companies/>
      <CourseSection/>
      <TestmonialSection/>
      <CallToAction/>
      <Footer/>
    </div>
      
  )
}

export default Home
