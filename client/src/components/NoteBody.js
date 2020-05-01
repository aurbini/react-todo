import React from 'react';
import { useSelector } from "react-redux";
import {  Card, CardBody, Col, CardText, Button, Row } 
  from 'reactstrap'
import { useParams } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'

const NoteTitle = () => {

  const { note_ID } = useParams()
  const userId = useSelector(state => state.user._id)
  const note = useSelector(state => state.notes)
    .filter(({_id}) => _id == note_ID)

  const noteBody = note[0].note
  
  return ( 
    <Col sm="6">
      <h3 style={{marginLeft: '3rem'}}>Note</h3>
      <Card>
        <CardBody>
          <Row>
            <Col xs="4" sm="8">
              <CardText>
                {noteBody}
              </CardText>
            </Col>
            <Col sm="4">
              <Link>
              <Button
                tag={Link}
                to={`/todos/${userId}`}
                style={{marginBottom: '2rem'}}
                >Close Note
              </Button>
            </Link>
            </Col>
         
          </Row>
          </CardBody>
        </Card>
      <Route exact path={`/todos/${userId}`} />
      </Col>
   );
}
 
export default NoteTitle;