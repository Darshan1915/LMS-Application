import React, { useContext, useEffect } from 'react'
import CourseCard from './CourseCard'
import { Link } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'

function CourseSection() {

  const {allCourses} = useContext(AppContext);
  // useEffect(()=>{console.log(allCourses)})
  
  return (
    <>
    <div className='flex flex-col flex-wrap items-center justify-center px-8 py-16 md:px-40'>
      <div className='flex flex-col items-center'>
        <h1 className='text-3xl font-medium text-gray-600' >Learn from the best</h1>
        <h3 className='mt-3 text-sm text-center text-gray-500 md:text-base'>Discover our top-rated courses across various categoies. From coding design
          to business and wellness, our courses are crafted to deliver result.
        </h3>
      </div>
      
      <div>
        {allCourses && allCourses.length > 0 ? (
          allCourses.slice(0, 4).map((course, index) => <CourseCard key={index} course={course}/>)
        ) : (
          <h1>No courses found</h1>
        )}
      </div>

      <div>
          <Link to={'/course-list'} 
          onClick={()=>scrollTo(0,0)}
          className='px-10 py-3 text-gray-500 border rounded border-gray-500/30'>Show All Courses</Link>
      </div>
    </div>
    </>
  )
}

export default CourseSection
