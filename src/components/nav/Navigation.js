import TopNavbar from './TopNavbar'
import SideNavbar from './SideNavbar'
import { Outlet } from 'react-router-dom';
import useCourse from '../../hooks/useCourse'
import styled from '@emotion/styled/macro';

function Navigation(props) {
    const [ course, role, message, error, loading ] = useCourse()
    const displaySidebar = (props.inCourse && role == 'teacher')

    const Content = styled.div`
        position: absolute;
        left: ${displaySidebar ? `15vw` : `0`};
        top: 5vh;
        color: black;
    `

    return <>
        <TopNavbar />
        <div className="mainBody">
            { displaySidebar && <SideNavbar course={course} /> }
            <Content><Outlet/></Content>
        </div>
    </> 
}

export default Navigation