import React from "react";

function StudentListItem (props) {  // TODO: CHECK IF THIS STUDENT IS IN THIS SECTIONS
    return <li className="studentrow">Student ID: {props.student.id}</li>
}

export default StudentListItem;