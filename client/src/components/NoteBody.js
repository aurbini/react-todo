import React from 'react';
import { useSelector } from "react-redux";
import {  Card, CardBody, Col, CardText, Button, Row, CardTitle } 
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
      <Card 
        body 
        inverse style={{ 
          backgroundColor: '#333', 
          borderColor: '#333',
          minHeight:'300px' }}
        className="text-center">
        <CardTitle
          style={{fontSize: '2rem'}}> Note </CardTitle>
        <CardText
          xs={5}
          style={{fontSize: '1.3rem'}}>
          {noteBody}
        </CardText>
        <Link>
          <Button
            tag={Link}
            to={`/todos/${userId}`}
            style={{marginBottom: '2rem'}}
            >Close Note
          </Button>
        </Link>
      </Card>
      <Route exact path={`/todos/${userId}`} />
    </Col>
   );
}
 
export default NoteTitle;