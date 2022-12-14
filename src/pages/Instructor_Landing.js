import React from 'react';
import { useState, useEffect } from 'react';
import CourseCard from '../components/CourseCard'
import { Button, Card } from "react-bootstrap"
import courseData from "./data/courseData.json"

function Instructor_Landing(props) {

    // Will implement ability to hide/show once we figure out best way to modify the
    // data in the JSON with backend team

    const [showHidden, setShowHidden] = useState(false)
    const [courses, setCourses] = useState([])
    const [ editToggle, setEditToggle ] = useState(false)
    const [ editCourse, setEditCourse ] = useState(false)

    const controller = new AbortController();

    useEffect( () => {
            async function populateCourses(){
                let courseBody={};
                try{
                    const response = await fetch(
                        "http://localhost:3001/api/course/",
                        {signal: controller.signal}

                    );
                    courseBody = await response.json();
                } catch (e) {
                    if (e instanceof DOMException) {
                      console.log("== HTTP request cancelled")
                    } else {
                      throw e;
                    }
                  }
                  console.log(courseBody)
                setCourses(courseBody)
            }
            populateCourses()

        }, [])
        
        if(!editToggle){
            return (
                <>
                <div className="bkgrnd">
                    <div className="buttons">
                    <Button variant="secondary">Add Course</Button>{' '}
                        <Button variant="secondary">Show Hidden Courses</Button>{' '}
                    </div>
                        <div>
                        {
                            courseData.map(course =>  
                                <CourseCard editToggle={setEditToggle} editCourse={setEditCourse} currentCourse={course} CourseNumber={course.id} CourseName={course.course_name} CourseCRN={course.crn} CourseInstructor={course.course_instructor} hidden={false} view={"instructor"} setData={props.setData}/>
                            )
                        }
                        </div>
                </div>
                </>
            )

        }
        else{
            return(
                <>
                <CourseCard editToggle={setEditToggle} editCourse={setEditCourse} currentCourse={courses[editCourse-1]} CourseNumber={courses[editCourse-1].id} CourseName={courses[editCourse-1].course_name} CourseCRN={courses[editCourse-1].crn} CourseInstructor={courses[editCourse-1].course_instructor} hidden={false} view={"instructor"} isEdit={true}/>
                </>
            )
        }
}

export default Instructor_Landing;