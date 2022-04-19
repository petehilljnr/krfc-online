import React from "react";
import { Container } from "react-bootstrap";
import { PageTitle } from "../components/PageTitle";
import {  useQuery } from "react-query";
import { fetchFixtures, fixturesFormat } from "../utilities/FetchUtilities";

export const Home = () => {
  const compGrades = [
    { comp_id: 4561, grade_id: 85899 },
    { comp_id: 4999, grade_id: 85899 }
  ];
  console.log(compGrades);

  const { isLoading, isError, data, error, isFetching } = useQuery(["draws-broken"], () => {return fetchFixtures(4999, 858990)});

  const draw = !(isError || isLoading) ? fixturesFormat(data.data, "") : [];

  return (
      <Container>
        <PageTitle text="Home" />
        <p> isLoading: { JSON.stringify(isLoading) } </p>
        <p> isError: { JSON.stringify(isError)} </p>
        <p> isFetching: { JSON.stringify(isFetching)} </p>
        <p> Error: { JSON.stringify(error) } </p>
        <p> Draw Data: { JSON.stringify(draw) } </p>
      </Container>
    )
};
//https://sportsgroundproduction.blob.core.windows.net/skedcache/fixtures/4999/85899