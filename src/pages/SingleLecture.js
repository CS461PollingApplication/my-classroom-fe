import React from 'react';
import useLectures from '../hooks/useLectures';
import useLectureQuestions from '../hooks/useLectureQuestions';
import useCourse from "../hooks/useCourse";
import { useParams } from 'react-router-dom'
import Lecture from '../components/Lecture'
import { TailSpin } from  'react-loader-spinner'
import Notice from '../components/Notice'

function SingleLecture() {
    const { courseId, lectureId } = useParams()
    const [lectures, Lmessage, Lerror, Lloading] = useLectures()
    const [questions, Qmessage, Qerror, Qloading] = useLectureQuestions()
    const [course, role, Cmessage, Cerror, Cloading] = useCourse()

    return (
        <>
            {Lmessage ? <Notice error={Lerror ? "error" : ""} Lmessage={Lmessage}/> : <></>}
            {Qmessage ? <Notice error={Qerror ? "error" : ""} Qmessage={Qmessage}/> : <></>}
            {Cmessage ? <Notice error={Cerror ? "error" : ""} Cmessage={Cmessage}/> : <></>}

            {(Lloading|Qloading|Cloading) ? <TailSpin visible={true}/> : 
                <Lecture 
                    key={lectureId} 
                    lecture={lectures[courseId][lectureId-1]} 
                    questions={questions} 
                    courseId={course.id} 
                    role={role} 
                    published={lectures[courseId][lectureId-1].LectureForSections.length > 0 ? 
                        lectures[courseId][lectureId-1].LectureForSections[lectureId].published :
                        0} 
                    sectionId={lectures[courseId][lectureId-1].LectureForSections.length > 0 ?
                        lectures[courseId][lectureId-1].LectureForSections[lectureId].sectionId : 
                        -1}/>
            }
        </>
    )
}

export default SingleLecture