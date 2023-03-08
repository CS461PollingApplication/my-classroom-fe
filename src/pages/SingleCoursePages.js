import React from "react";
import { Routes, Route, Link, NavLink, useNavigate, useParams } from 'react-router-dom'

//replcae this with the API call.
const course = require('./data/courseData.json') 

//This function is going to be used to display the single course page from when the
//user selects the course.  
function DisplayCoursePage(){
//using useParams() here to grab the number in the course they select then finding the data
//associated with that course.
let { paramID } = useParams()

return(
    <>
    <div>
        <h2>{course[paramID].course_name}</h2>
        <p>{course[paramID].crn}</p>
        <p>{course[paramID].course_instructor}</p>
    </div>
    <div> <button>Return To Lectures</button> </div>
    <div> <button>View Students</button></div>
    </>
)

}

export default DisplayCoursePage