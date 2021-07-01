import React from "react";
import { Link } from "react-router-dom";
import { Container } from "semantic-ui-react";

export default function HomePage(){
    return(
        <Container style={{marginTop:'7em'}}>
            <h3>Home Page</h3>
            <h4>Go to <Link to='/activities'>Activities</Link> </h4>
        </Container>
    )
}