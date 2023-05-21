import React, { useState } from "react";
import QuestionCard from '../components/QuestionCard';
import { Button, Card } from "react-bootstrap"
import { Switch } from '@mui/material';
import { Link } from 'react-router-dom';
import apiUtil from '../utils/apiUtil'
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { togglePublishedLecture } from "../redux/actions";

function Lecture(props){
    const [published, setPublished] = useState(props.lecture.LectureForSections[props.lecture.id].published)
    const [sectionId, setSectionId] = useState(props.lecture.LectureForSections[props.lecture.id].sectionId)
    const [error, setError] = useState(false)
    const [message, setMessage] = useState("")
    const [ loading, setLoading ] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    async function changePublishState(){
        setLoading(true)
        const response = await apiUtil("put", `/courses/${props.courseId}/sections/${sectionId}/lectures/${props.lecture.id}`, { dispatch: dispatch, navigate: navigate})
        setLoading(false)
        setError(response.error)
        setMessage(response.message)
        console.log("after press: ", response)

        //update the published state in lecture
        if(response.status === 200){
            dispatch(togglePublishedLecture(props.courseId, props.lecture.id))
            setPublished(!published)
        }
    }

    return(
        <>
            {/*If Student*/}
            {(props.role == "student" &&
                <div className='student-lecture'>
                    <div className='questions'>
                        {props.questions.questions.map((question) => {
                            return <QuestionCard key={question.id} question={question} view={props.role}/>
                        })}
                    </div>
                </div>
            )}            

            {/*If Teacher*/}
            {(props.role == "teacher" &&
                <div className='teacher-lecture'>
                    <div className='buttons'>
                        <Link to={`questions`}>
                            <Button variant="secondary">Add Questions</Button>
                        </Link>
                    </div>

                    <div className='switch'>
                        <label>
                            <span>Publish Lecture - WIP</span>
                            {/*TODO: published lectures in lecture for sections*/}
                            <Switch onChange={() => changePublishState()} checked={!!published}/>
                        </label>
                    </div>

                    <div className='questions'>
                        {props.questions.questions.map((question) => {
                            return <QuestionCard key={question.id} question={question} view={props.role}/>
                        })}
                    </div>
                </div>
            )}
        </>
    )
}

export default Lecture