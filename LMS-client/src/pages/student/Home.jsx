import React from 'react'
import Hero from '../../components/student/Hero'
import Companies from '../../components/student/Companies'
import CourseSection from '../../components/student/CourseSection'

function Home() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-blue-200 to-blue-50'>
      <Hero/>
      <Companies/>
      <CourseSection/>
    </div>
      
  )
}

export default Home
