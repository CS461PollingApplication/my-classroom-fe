import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { TailSpin } from  'react-loader-spinner'
import Notice from '../components/Notice'
import { Button, Card } from "react-bootstrap"
import useLectureQuestions from "../hooks/useLectureQuestions";
import useCourse from "../hooks/useCourse";
import useLectures from '../hooks/useLectures';
import QuestionCard from '../components/QuestionCard';

function Lecture() {
    const [ questions, message, error, loading ] = useLectureQuestions()
    const [ course, role, Cmessage, Cerror, Cloading ] = useCourse()
    const [ lectures, Lmessage, Lerror, Lloading ] = useLectures()
    const { courseId, lectureId } = useParams() 

    return (
        <>
            { Cmessage ? <Notice error={Cerror ? "error" : ""} message={Cmessage}/> : <></>}
            { Lmessage ? <Notice error={Lerror ? "error" : ""} message={Lmessage}/> : <></>}
            { message ? <Notice error={error ? "error" : ""} message={message}/> : <></>}

            {/*If Student*/}
            {(Cloading|Lloading|loading) ? <TailSpin visible={true}/> : (role == "student" &&
                <div className='student-lecture'>
                    <div className='questions'>
                        {loading ? <TailSpin visible={true}/> : questions.questions.map((question) => {
                            return <QuestionCard key={question.id} question={question} view={role}/>
                        })}
                    </div>
                </div>
            )}            

            {/*If Teacher*/}
            {(Cloading|Lloading|loading) ? <TailSpin visible={true}/> : (role == "teacher" &&
                <div className='teacher-lecture'>
                    <div className='buttons'>
                        <Link to={`questions`}>
                            <Button variant="secondary">Add Questions</Button>
                        </Link>
                    </div>

                    <div className='questions'>
                        {loading ? <TailSpin visible={true}/> : questions.questions.map((question) => {
                            return <QuestionCard key={question.id} question={question} view={role}/>
                        })}
                    </div>
                </div>
            )}
        </>
    )
}

export default Lecture