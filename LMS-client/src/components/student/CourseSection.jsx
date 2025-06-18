import React, { useContext, useEffect } from 'react'
import CourseCard from './CourseCard'
import { Link } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'

function CourseSection() {

  const {allCourses} = useContext(AppContext);
  // useEffect(()=>{console.log(allCourses)})
  
  return (
    <>
    <div className='flex flex-col items-center px-8 py-16 my-10 md:px-40'>
      {/* <div className='flex flex-col items-center'> */}
        <h1 className='my-5 text-3xl font-medium text-gray-600' >Learn from the best</h1>
        <h3 className='mt-3 text-sm text-center text-gray-500 md:text-base'>Discover our top-rated courses across various categoies. From coding design
          to business and wellness, our courses are crafted to deliver result.
        </h3>
      {/* </div> */}
      
      <div className='flex flex-wrap items-center justify-center gap-5 my-12'>
        {allCourses && allCourses.length > 0 ? (
          allCourses.slice(0, 3).map((course, index) => <CourseCard key={index} course={course}/>)
        ) : (
          <h1>No courses found</h1>
        )}
      </div>

      {/* <div> */}
          <Link to={'/course-list'} 
          onClick={()=>scrollTo(0,0)}
          className='px-10 py-3 text-gray-500 border rounded border-gray-500/30 bg hover:bg-blue-100'>Show All Courses...</Link>
      {/* </div> */}
    </div>
    </>
  )
}

export default CourseSection
