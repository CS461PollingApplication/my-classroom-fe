import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from 'react-router-dom';

function SectionCard (props) {
    return (
          //Using Card imported from React
          <div> 
            <Card>
            <Card.Header>{props.section.number}</Card.Header>
            <Card.Body>
              <Link to={`/${props.section.id}/lectures`}> {/* TODO: remove /lectures once the single course page has been updated with more functionality */}
                <Button className="hideBtn">View Section</Button>
              </Link>

            </Card.Body>
          </Card>
        </div>
      );
}

export default SectionCard;