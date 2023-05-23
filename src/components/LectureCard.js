import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from 'react-router-dom';

function LectureCard (props) {
    return (<>
        <div className="lecture-card">
            <Card>
                <Card.Header>{props.lecture.title}</Card.Header>
                <Card.Body>
                    <p>{props.lecture.description}</p>

                    {props.view==="student" ? 
                        <Link to={`${props.lecture.id}`}>
                            <Button className="viewLectureBtn">
                            Join Lecture
                            </Button>
                        </Link> : 
                    <div></div>}

                    {props.view==="teacher" ? 
                        <Link to={props.section ? `lectures/${props.lecture.id}` : `${props.lecture.id}`}>
                            <Button className="viewLectureBtn">
                            { props.section ? `View Lecture` : `Edit Lecture`}
                            </Button>
                        </Link> : 
                    <div></div>}
                </Card.Body>
            </Card>
        </div>
    </>)
}

export default LectureCard;