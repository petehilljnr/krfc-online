import React from 'react'
import styled  from 'styled-components';

const Title = styled.h1`
    text-align: center;
    color: white;
    text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black
`;

export const PageTitle = (props) => {
  return (
    <Title>{ props.text } </Title>
  )
}
