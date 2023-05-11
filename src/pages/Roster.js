import { Link, useParams } from 'react-router-dom';
import useSections from '../hooks/useSections';

function Roster(props) {
    const { courseId } = useParams()
    const [sections, message, error, loading] = useSections()
    return(
        <div>{sections[courseId].map((section) =>
            section.id    
        )}
        </div>
    )
}

export default Roster;