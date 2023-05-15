import React from "react";

function StudentRow (props) { // TODO: write css class for 'section-card'
    return (<>
        Student ID: {props.student.id}
        <br></br>
    </>)
}

export default StudentRow;