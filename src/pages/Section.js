import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { TailSpin } from  'react-loader-spinner'
import useLecturesInSection from '../hooks/useLecturesInSection';
import Notice from '../components/Notice'
import { Button, Card } from "react-bootstrap"
import LectureCard from '../components/LectureCard';

function Section() { 
    //get the lectures for the current course & section
    const { sectionId } = useParams()
    const [ lecturesInSection, message, error, loading] = useLecturesInSection()

    return ((loading) ? <TailSpin visible={true}/> : <div className="contentView">
                {(message != "") ? <Notice error={error ? "error" : ""} message={message}/> : (lecturesInSection.length == 0) ? <Notice message={"You Do Not Have Any Lectures Yet"}/> : <></> }
                    <div className="horizontal-flex-container">
                        { lecturesInSection.map((lecture) => {
                            return <LectureCard key={lecture.id} lecture={lecture} view={'teacher'} section={sectionId}/>
                        })}
                    </div>
                </div>
            )
}

export default Section