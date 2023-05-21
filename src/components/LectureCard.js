import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from 'react-router-dom';

function LectureCard (props) {
    return (<> 
        <Card className="lecture-card"> 
            <Card.Header>{props.lecture.title}</Card.Header>
            <Card.Body>
                <p>{props.lecture.description}</p>

                {props.view==="student" ? 
                    <Link className="viewLectureBtn" to={`${props.lecture.id}`}>
                        <Button>
                        Join Lecture
                        </Button>
                    </Link> : 
                <div></div>}

                {props.view==="teacher" ? 
                    <Link className="viewLectureBtn" to={`${props.lecture.id}`}>
                        <Button>
                        Edit Lecture 
                        </Button>
                    </Link> : 
                <div></div>}
            </Card.Body>
        </Card>
    </>)
}

export default LectureCard;