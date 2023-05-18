import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from 'react-router-dom';

function SectionCard (props) { // TODO: write css class for 'section-card'
    return (<>
        <div className="section-card">
            <Card>
                <Card.Header>Section # {props.section.number}</Card.Header>
                <Card.Body>
                    {
                        <Link to={`/${props.courseId}/roster/${props.section.id}`}>
                            <Button className="viewLectureBtn">
                            View students in section
                            </Button>
                        </Link>
                    }
                </Card.Body>
            </Card>
        </div>
    </>)
}

export default SectionCard;