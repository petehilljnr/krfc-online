import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { format } from "date-fns";

const FixtureCard = (props) => {
  const d = props.data;
  const fixture_date = new Date(d.fixture_date);
  const fixture_str =
    d.away_team === "BYE"
      ? format(fixture_date, "EEE MMMM do") + " - No Game"
      : format(fixture_date, "EEE MMMM do") +
        " - Kickoff " +
        format(fixture_date, "h:mm a");
  
  function onClick(id) {
    //console.log(id)
  };

  return (
    <Card className="my-1" key={d.fixture_id} onClick={onClick(d.fixture_id)}>
      <Card.Header className="text-center" style={{ fontWeight: "bold" }}>
        {d.round_name}
      </Card.Header>
      <Card.Body style={{ padding: "0px" }}>
        <Row
          style={{
            paddingTop: "4px",
            paddingBottom: "4px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Col span="5" className="text-center">
            <img src={d.home_logo} height="70" alt={d.home_team} />
            <br /> {d.home_team}
          </Col>
          <Col span="2" className="text-center align-middle">
            <Row>
              <Col span="12">
              <div style={{ fontSize: "0.7rem", justifyContent: "middle" }}>
                vs
              </div>
              </Col>
            </Row>
            <Row>
          <Col
            span="12"
            className="text-center"
            style={{ fontSize: "0.7rem", justifyContent: "middle" }}
          >
           <span dangerouslySetInnerHTML={{ __html: d.trophy}} />
          </Col>
        </Row>
          </Col>
          <Col span="5" className="text-center">
            <img src={d.away_logo} height="70" alt={d.away_team} />
            <br /> {d.away_team}
          </Col>
        </Row>
        
      </Card.Body>
      <Card.Footer className="text-center">{fixture_str}</Card.Footer>
    </Card>
  );
};

export default FixtureCard;
