import { Link, useParams } from 'react-router-dom';
import useEnrollments from '../hooks/useEnrollments';
import Notice from '../components/Notice'
import { TailSpin } from  'react-loader-spinner'
import StudentRow from '../components/StudentRow';

function Enrollments(props) {
    const { courseId } = useParams()
    const [enrollments, message, error, loading] = useEnrollments()

    return(
        <>
        { message ? <Notice error={error ? "error" : ""} message={message}/> : (!enrollments) ? <Notice message={"No students are enrolled in this section"}/> : <></>}
        
        { (loading) ? <TailSpin visible={true}/> : enrollments[courseId].enrollments.map((enrollment) => {
            return <StudentRow key={enrollment.id} student={enrollment} courseId={courseId}/>
        })}
        
        </>
    )
}

export default Enrollments;