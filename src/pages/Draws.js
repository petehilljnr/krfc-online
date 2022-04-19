import { fixturesFormat, fetchFixtures } from "../utilities/FetchUtilities";
import { Container, Row, Col } from "react-bootstrap";
import FixtureCard from "../components/FixtureCard";
import { useQuery, useQueryClient } from "react-query";
import styled from "styled-components";

const SubTitle = styled.div`
  text-align: center;
  color: white;
  text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
  font-size: 1.3rem;
`;

export const Draws = () => {
  const queryClient = useQueryClient()
  const { isLoading, isError, data, error, isFetching } = useQuery(
    ["draw-current"],
    () => {
      return fetchFixtures(4561, 85899);
    },
    { staleTime: 120 * 1000 }
  );

  let content;
  
  const cachedData = queryClient.getQueryData(["draw-current"], {exact: false})
  
  if(isError && cachedData.data) {
    const draw = fixturesFormat(data.data, "4395");
    content = (
      <>
        <h5>Cached Data</h5>
        {draw.map((fixture, index) => {
          return (
            <Row key={index}>
              <Col
                lg={{ span: 6, offset: 3 }}
                md={{ span: 10, offset: 1 }}
                sm={{ span: 12, offset: 0 }}
              >
                <FixtureCard data={fixture} key={fixture.fixture_id} />
              </Col>
            </Row>
          );
        })}
      </>
    );
  } else if (isError) {
    content = (
      <div>
        <SubTitle>Error: {error.message} </SubTitle>
        <p style={{ textAlign: "center", color: "white" }}>
          Either the ORFU site is down or there's no internet connection
        </p>
      </div>
    );
  } else if (isFetching) {
    content = <SubTitle>Fetching Data ...</SubTitle>;
  } else if (isLoading) {
    content = <SubTitle>Loading Data ...</SubTitle>;
  } else {
    const draw = fixturesFormat(data.data, "4395");
    content = (
      <>
        {draw.map((fixture, index) => {
          return (
            <Row key={index}>
              <Col
                lg={{ span: 6, offset: 3 }}
                md={{ span: 10, offset: 1 }}
                sm={{ span: 12, offset: 0 }}
              >
                <FixtureCard data={fixture} key={fixture.fixture_id} />
              </Col>
            </Row>
          );
        })}
      </>
    );
  }
  return <Container style={{ paddingTop: "5px" }}>{content}</Container>;
};
