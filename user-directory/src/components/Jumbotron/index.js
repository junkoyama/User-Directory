import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import {Container} from 'react-bootstrap';

export default function setJumbotron() {
  return (
    <>
      <Jumbotron fluid>
        <Container>
          <h1>User Directory</h1>
          <p>
            Start to view your employees here
          </p>
        </Container>
      </Jumbotron>
    </>
  );
}
