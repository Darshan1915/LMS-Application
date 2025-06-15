import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  
  const currency = import.meta.env.VITE_CURRENCY

  const [allCourses, setAllCourses] = useState([])

  // //Fetch all courses
  const fetchAllCourses = async ()=>{
    setAllCourses(dummyCourses)
  }
  // //To execute fetchAllCourses()
  useEffect(()=>{
    fetchAllCourses();
  },[])

  const value ={
    currency,
    allCourses
  }
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

