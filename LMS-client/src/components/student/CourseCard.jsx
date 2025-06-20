import React, { useContext } from 'react';
import Rating from './Rating';
import { assets } from '../../assets/assets';
import App from '../../App';
import { AppContext } from '../../context/AppContext';
import { Link } from 'react-router-dom';

const CourseCard = ({course}) => {
    // console.log("Course ID:", course._id);

    const {currency} = useContext(AppContext)
    
    return (
        <Link to={`/course/${course._id}`}>
            <div className="max-w-sm m-2 overflow-hidden bg-white rounded-lg shadow-lg hover:bg-blue-200">
                <div className="p-4">
                    <img src={course.courseThumbnail}/>
                </div>
                <div className="px-6 py-4">
                    <h3 className="text-lg font-bold">{course.courseTitle}</h3>
                    <p className="text-base text-gray-700">Richard James</p>
                    {/* <Rating/> */}
                    <div className='flex flex-col'>
                        {/* Avrage ratting */}
                        <p>4.5</p> 
                        {/* star rating */}
                        <div className='flex'>
                        {[...Array(5)].map((_,i)=>(<img key={i} src={assets.star}/>))}  
                        </div>
                        {/* number of ratings */}
                        <p>22</p>
                    </div>
                    <p className="mt-2 text-xl font-bold">{currency} {course.coursePrice}</p>
                </div>
            </div>
        </Link>    
    );
};

export default CourseCard;