import { useState } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";

import { PageTitle } from "../components/PageTitle";
import { Sponsors } from "../components/Sponsors";
import { createPrintOut } from "../templates/standard";
import styled from "styled-components";

// import styled from "styled-components";

import layout1img from "../assets/layout1.png";
import layout2img from "../assets/layout2.png";
import { Templates } from "../components/Templates";
import Select from "react-select";

const SubTitle = styled.div`
  text-align: center;
  color: white;
  text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
  font-size: 1.3rem;
`;

export const Programmes = () => {
  const [insideLeftValue, setInsideLeftValue] = useState("layout1");
  const [insideRightValue, setInsideRightValue] = useState("layout2");
  const [outsideRightValue, setOutsideRightValue] = useState("layout1");
  const [selectedSponsors, setSelectedSponsors] = useState([]);
  
  const layouts = {
    layout1: { name: "Standard with photos", img: layout1img },
    layout2: { name: "List with no photos", img: layout2img },
  };

  const handleSponsorSelect = (e) => {
    setSelectedSponsors(e);
  };

  const onClick = () => {
    //addSponsors(0, (11.7/2)-0.19685, 8.3,selectedSponsors)
    createPrintOut({
        fixture_id: 0,
        il_layout: insideLeftValue,
        ir_layout: insideRightValue,
        sponsors: selectedSponsors
    });
    
  };

console.log(selectedSponsors)
  return (
    <Container>
      <PageTitle text="Printed Programmes" />
      <Button onClick={onClick}>Click</Button>
      <Row>
        <Col>
          <Templates
            prefix="IL"
            key={"IL"}
            title="Inside Left Layout"
            currentValue={insideLeftValue}
            setCurrentValue={setInsideLeftValue}
            layouts={layouts}
          />
        </Col>
        <Col>
          <Templates
            prefix="IR"
            key={"IR"}
            title="Inside Right Layout"
            currentValue={insideRightValue}
            setCurrentValue={setInsideRightValue}
            layouts={layouts}
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <SubTitle> Select Game Sponsors </SubTitle>
          <Select
            isMulti
            name="game_sponsors"
            options={Sponsors}
            className="basic-multi-select"
            classNamePrefix="select"
            maxMenuHeight={200}
            value={selectedSponsors}
            onChange={handleSponsorSelect}
          />
        </Col>
        <Col>
          <Templates
            prefix="OR"
            key={"OR"}
            title="Front Page"
            currentValue={outsideRightValue}
            setCurrentValue={setOutsideRightValue}
            layouts={layouts}
          />
        </Col>
      </Row>
    </Container>
  );
};
