import useSections from '../hooks/useSections'
import { useState } from 'react' 
import AddSection from '../components/AddSection'
import Popup from '../components/Popup'
import { useParams, Link } from 'react-router-dom'
import Notice from '../components/Notice'
import { TailSpin } from  'react-loader-spinner'
import SectionCard from '../components/SectionCard'

function Sections() {
    const [ sections, message, error, loading ] = useSections()
    const [ showCreateModal, setShowCreateModal ] = useState(false)
    const { courseId } = useParams

    const closeCreateModal = () => {
        setShowCreateModal(false)
    }

    const openCreateModal = () => {
        setShowCreateModal(true)
    }

    return(
        <>
            { showCreateModal && <Popup close={closeCreateModal}><AddSection/></Popup> }
            <button className="btn btn-add" onClick={(e) => {openCreateModal()}}>Create Section</button>
            { message && <Notice error={error ? "error" : ""} message={message}/>}
            { loading ? <TailSpin visible={true}/> : <>
                {/*Teacher Courses*/}
                { sections[courseId] != null ? <div id="teacher-courses">
                    <div>
                        {sections[courseId].map((section) => {
                            return <SectionCard key={section.id} section={section} />
                        })}
                    </div>
                </div> : <Notice message={"You have not created any sections for this course yet"}/>}
            </>}
        </>
    )
}

export default Sections