import React, { useState, useContext, useEffect } from "react"
import "../photos/Photo.css"
import { MainContext } from "./MainProvider";
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';


// import "./Main.css"


export const Main = (props) => {
    const { deleteMain, updateMain } = useContext(MainContext)
    
return(

    //  <section className="mainContent" key={props.main.id}>
    //     <h3 className="Main__name">{props.main.name}</h3>
    //     <p className="details">{props.main.details}</p>
    //     <p className="time">{props.main.date}</p>
    //     <a href={props.main.link}>
    //     <img className="imgURL" src={props.main.imageURL} />
    //     </a>
    //     <button onClick={() => deleteMain(props.main.id)}>Delete</button>
    //     <button 
    //         onClick={() => {
    //             props.history.push(`/main/edit/${props.main.id}`)
    //         }}>Edit</button>
    //   </section>

<Card style={{ width: '18rem' }} className="mainContent" key={props.main.id}>
    <a href={props.main.link}>
<Card.Img variant="top" className="imgURL" src={props.main.imageURL} />
</a>
<Card.Body>
  <Card.Title className="Main__name">{props.main.name}</Card.Title>
  <Card.Text className="details">
  {props.main.details}
  </Card.Text>
</Card.Body>
<ListGroup className="list-group-flush">
  <ListGroupItem className="time">{props.main.date}</ListGroupItem>
  <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
  <ListGroupItem>Vestibulum at eros</ListGroupItem>
</ListGroup>
<Card.Body>
<button onClick={() => deleteMain(props.main.id)}>Delete</button>
<button 
    onClick={() => {
    props.history.push(`/main/edit/${props.main.id}`)
    }}>Edit</button>
</Card.Body>
</Card>
    
)
}

