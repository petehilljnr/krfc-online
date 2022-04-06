import { useEffect, useState } from "react";
import XMLParser from "react-xml-parser";
import { FixturesCall } from "../utilities/FetchUtilities";
import { Container, Row, Col } from "react-bootstrap";
import FixtureCard from "../components/FixtureCard";

export const Draws = () => {
  const [draw, setDraw] = useState([]);

  useEffect(() => {
    fetch(
      "https://sportsgroundproduction.blob.core.windows.net/skedcache/fixtures/4561/85899"
    )
      .then((res) => res.text())
      .then((data) => {
        var xml = new XMLParser().parseFromString(data);
        setDraw(FixturesCall(xml, "4395"));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container style={{ paddingTop: "5px" }}>
      {draw.map((fixture, index) => {
        return (
          <Row key={index}>
            <Col lg={{ span: 6, offset: 3 }} md={{ span: 10, offset: 1 }} sm={{ span: 12, offset: 0 }}>
              <FixtureCard data={fixture} key={fixture.fixture_id} />
            </Col>
          </Row>
        );
      })}
    </Container>
  );
};
