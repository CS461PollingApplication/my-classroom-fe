import apiUtil from '../utils/apiUtil'
import { addSections } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { getSections } from '../redux/selectors'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function useSections() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { courseId } = useParams()
    const sections = useSelector(getSections)
    const [ error, setError ] = useState(false)
    const [ message, setMessage ] = useState("")
    const [ loading, setLoading ] = useState(true)

    useEffect( () => {
        async function populateSections(){
            setLoading(true)
            const response = await apiUtil("get", `courses/${courseId}/sections`, { dispatch: dispatch, navigate: navigate} );
            setMessage(response.message)
            setError(response.error)
            if (response.status === 200) {
                dispatch(addSections(response.data.sections))
            }
            setLoading(false)
        }
        if (sections[courseId] != null) {
            populateSections()
        }
        else {
            setLoading(false)
        }
    }, [])

    return [ sections, message, error, loading ]
}

export default useSections