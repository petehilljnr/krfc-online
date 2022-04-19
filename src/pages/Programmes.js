import { useState } from "react";
import {
  Container, Button
} from "react-bootstrap";

import { PageTitle } from "../components/PageTitle";
import { createPrintOut } from "../templates/standard";
// import styled from "styled-components";

import layout1img from "../assets/layout1.png";
import layout2img from "../assets/layout2.png";
import { Templates } from "../components/Templates";

export const Programmes = () => {
  const [insideLeftValue, setInsideLeftValue] = useState("layout1");
  const [insideRightValue, setInsideRightValue] = useState("layout1");
  //const handleClick = () => standardTemplate({ player_names: player_names });
  const layouts = {
    layout1: { name: "Standard with photos", img: layout1img },
    layout2: { name: "List with no photos", img: layout2img },
  };

  const onClick = () => { createPrintOut(null)}
  return (
    <Container>
      <PageTitle text="Printed Programmes" />
    <Button onClick={onClick}>Click</Button>
      <Templates prefix="IL" key={"IL"} title="Inside Left Layout" currentValue={insideLeftValue} setCurrentValue={setInsideLeftValue} layouts={layouts} />
      <Templates prefix="IR" key={"IR"} title="Inside Right Layout" currentValue={insideRightValue} setCurrentValue={setInsideRightValue} layouts={layouts} />
    </Container>
  );
};
