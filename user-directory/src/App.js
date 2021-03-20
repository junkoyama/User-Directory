import React from "react";
import Jumbotron from "./components/Jumbotron";
import getTable from "./components/Table";
import {Container} from "react-bootstrap";

function App() {
  return (
    <div className="App">
        <Jumbotron />
      <Container>
        <getTable/>
      </Container>
    </div>
  );
}

export default App;
