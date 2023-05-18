import React from "react";

function StudentListItem (props) {  // TODO: CHECK IF THIS STUDENT IS IN THIS SECTIONS
    return <li className="studentrow">
        {props.student.User.firstName} {props.student.User.lastName} 
        <span className="studentemail">{props.student.User.email}</span>
    </li>
}

export default StudentListItem;