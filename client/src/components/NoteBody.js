import React, { useEffect, Fragment } from 'react';
import { useSelector } from "react-redux";
import {  Card, CardBody, CardTitle, CardText, Button } 
  from 'reactstrap'
import { useParams } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'

const NoteTitle = () => {

  const { note_ID } = useParams()
  const userId = useSelector(state => state.user._id)
  const note = useSelector(state => state.notes)
    .filter(({_id}) => _id == note_ID)

  // useEffect(()=>{
  //   dispatch(getTodo(note_ID))
  // },[])
  const noteBody = note[0].note

  return ( 
    <Fragment>
      <Card>
        <CardBody>       
          <CardText>
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
          </CardBody>
        </Card>
      <Route exact path={`/todos/${userId}`} />
      </Fragment>
   );
}
 
export default NoteTitle;