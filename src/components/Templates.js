import React from "react";
import styled from "styled-components";
import {
  ButtonGroup,
  ToggleButton,
} from "react-bootstrap";

const SubTitle = styled.div`
  text-align: center;
  color: white;
  text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
  font-size: 1.3rem;
`;

export const Templates = (props) => {
  const title = props.title;
  const currentValue = props.currentValue;
  const setCurrentValue = props.setCurrentValue;
  const layouts = props.layouts;
  const prefix = props.prefix;

  return (
    <div id={prefix} key={prefix}>
      <SubTitle key={`${prefix}-ST`}>{title}</SubTitle>
      <div style={{ textAlign: "center", marginTop: "0.5rem" }}>
        <div style={{ margin: "20px" }}>
          {Object.keys(layouts).map((radio, idx) => {
            return (
              <ButtonGroup className="me-2" key={`BG-${prefix}-${idx}`} >
                <ToggleButton
                  key={`TB-${prefix}-${idx}`}
                  id={`${prefix}-${idx}`}
                  type="radio"
                  name={title}
                  variant="outline-success"
                  value={radio}
                  checked={currentValue === radio}
                  onChange={(e) => setCurrentValue(e.currentTarget.value)}
                >
                  <div style={{ margin: "10px" }}>
                    <div style={{ color: "white" }}>{layouts[radio].name}</div>
                    <img
                      src={layouts[radio].img}
                      alt="layout option"
                      style={{ paddingTop: "4px", paddingBottom: "4px" }}
                    />
                  </div>
                </ToggleButton>
              </ButtonGroup>
            );
          })}
        </div>
      </div>
    </div>
  );
};
