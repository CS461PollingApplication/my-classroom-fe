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
    const { courseId } = useParams()

    const closeCreateModal = () => {
        setShowCreateModal(false)
    }

    const openCreateModal = () => {
        setShowCreateModal(true)
    }

    return(
        <div className="contentView">
            <div className="header">
                { showCreateModal && <Popup close={closeCreateModal}><AddSection/></Popup> }
                <button className="btn btn-add btn-secondary" onClick={(e) => {openCreateModal()}}>Create Section</button>
                { message && <Notice error={error ? "error" : ""} message={message}/>}
            </div>
            <div className="horizontal-flex-container">
                { loading ? <TailSpin visible={true}/> : sections[courseId] != null ? sections[courseId].map((section) => {
                                return <SectionCard key={section.id} section={section} />
                            }) : <Notice message={"You have not created any sections for this course yet"}/>
                }
            </div>
        </div>
        
    )
}

export default Sections