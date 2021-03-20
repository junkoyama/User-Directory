import React from "react";
import Jumbotron from "./components/Jumbotron";
import UserTable from "./components/UserTable";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Jumbotron />
      <Container>
        <UserTable />
      </Container>
    </div>
  );
}

export default App;
