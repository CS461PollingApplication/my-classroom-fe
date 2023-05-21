import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { TailSpin } from  'react-loader-spinner'
import useLectures from '../hooks/useLectures';
import Notice from '../components/Notice'
import { Button, Card } from "react-bootstrap"
import useCourse from "../hooks/useCourse";
import LectureCard from '../components/LectureCard';

function Lectures(props){
    //get the lectures for the current course & section
    const { courseId } = useParams()
    const [lectures, message, error, loading] = useLectures()
    const [ course, role, Cmessage, Cerror, Cloading ] = useCourse()

    return (
        <div className="contentView">
            {/*Add Lecture Button - ONLY if enrollment == instructor*/}
            <div className="header">
                <Link to={`/${courseId}/createlecture`}>
                    <button className="btn-add btn btn-secondary">Create Lecture</button>
                </Link>
            </div>
            {/*No Lectures*/}
            { message ? <Notice error={error ? "error" : ""} message={message}/> : (!lectures) ? <Notice message={"You Do Not Have Any Lectures Yet"}/> : <></>}
            <div className="horizontal-flex-container">
                { (Cloading || loading) ? <TailSpin visible={true}/> : lectures[courseId].map((lecture) => {
                    return <LectureCard key={lecture.id} lecture={lecture} view={role} />
                })}
            </div>
        </div>
    )
}

export default Lectures;