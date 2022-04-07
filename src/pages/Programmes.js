import { useState } from "react";
import { Container, Button } from "react-bootstrap";
import { standardTemplate } from "../templates/standard"

export const Programmes = () => {

  return (
    <Container>
      <h1>Programmes</h1>
      <Button onClick={standardTemplate}> Press Me </Button>
      <br/>
      <div>

      </div>
    </Container>
  );
};
