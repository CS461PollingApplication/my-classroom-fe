import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { TailSpin } from  'react-loader-spinner'
import Notice from '../components/Notice'
import useLectureQuestions from "../hooks/useLectureQuestions";
import useLecturesInSection from '../hooks/useLecturesInSection';
import { Switch } from '@mui/material';
import QuestionCard from '../components/QuestionCard';
import { useEffect, useState } from 'react'
import apiUtil from '../utils/apiUtil'

function LectureInSection() {
    const [ questions, message, error, loading ] = useLectureQuestions()
    const [ lecturesInSection, LSmessage, LSerror, LSloading ] = useLecturesInSection()
    const { courseId, lectureId } = useParams()
    const [ published, setPublished ] = useState(false)

    useEffect(() => {
        if (lecturesInSection != null) {
            lecturesInSection.forEach((lecture) => {
                if (lecture.id == lectureId)
                    setPublished(lecture.published)
            })
        }
    }, [ lecturesInSection ])

    // TODO: attach lecture publication to the slider

    return (
        <>
            { message ? <Notice error={error ? "error" : ""} message={message}/> : <></>}

            {/*If Teacher*/}
            {loading ? <TailSpin visible={true}/> :
                <div className='teacher-lecture'>
                    <div className='switch'>
                        <label>
                            <span>Publish Lecture</span>
                            <Switch checked={published}/>
                        </label>
                    </div>

                    <div className='questions'>
                        {loading ? <TailSpin visible={true}/> : questions.questions.map((question) => {
                            return <QuestionCard key={question.id} question={question} view={'teacher'}/>
                        })}
                    </div>
                </div>
            }
        </>
    )
}

export default LectureInSection