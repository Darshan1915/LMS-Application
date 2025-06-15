import React from 'react'
import { Route, Routes, useMatch } from 'react-router-dom'
import Home from './pages/student/Home'
import CoursesList from './pages/student/CoursesList'
import CourseDetails from './pages/student/CourseDetails'
import MyEnrollments from './pages/student/MyEnrollments'
import Player from './pages/student/Player'
import Loading from './components/student/Loading'
import Educator from './pages/educator/Educator'
import AddCourse from './pages/educator/AddCourse'
import Dashboard from './pages/educator/Dashboard'
import MyCourses from './pages/educator/MyCourses'
import StudentEnrolled from './pages/educator/StudentsEnrolled'
import Navbar from './components/student/Navbar'


const App = () => {

  const educatorRouteNavbar = useMatch('/educator/*');// True when it fount any route: /educator/* 
  
  return (
    <div className='min-h-screen bg-white'>
      {!educatorRouteNavbar && <Navbar/>}
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/course-list' element={<CoursesList/>}></Route>
        <Route path='/course-list/:id' element={<CoursesList/>}></Route>//To desplay filtred course lists
        <Route path='/course/:id' element={<CourseDetails/>}></Route>
        <Route path='/my-enrollments' element={<MyEnrollments/>}></Route>
        <Route path='/player/:courseID' element={<Player/>}></Route>
        <Route path='/loading/:path' element={<Loading/>}></Route>
        <Route path='/educator' element={<Educator/>}>
            <Route path='educator' element={<Dashboard/>}/>
            <Route path='add-course' element={<AddCourse/>}/>
            <Route path='my-courses' element={<MyCourses/>}/>
            <Route path='student-enrolled' element={<StudentEnrolled/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App

