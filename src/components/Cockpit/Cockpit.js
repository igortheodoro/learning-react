import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import AuthContext from "../../context/auth-context";

const ButtonStyled = styled.button`
  background-color: ${(props) => (props.showAlteration ? "#505050" : "#fff")};
  color: ${(props) => (props.showAlteration ? "#fff" : "#000")};
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #505050;
  margin-right: 5px;
  transition: all 0.3s;

  :hover {
    color: ${(props) => (props.showAlteration ? "#000" : "#fff")};
    background-color: ${(props) => (props.showAlteration ? "#fff" : "#505050")};
  }
`;

const Cockpit = (props) => {
  const marcarBotao = useRef(null);

  useEffect(() => {
    console.log("[CockPit.js] useEffect");

    return () => {
      console.log("[CockPit.js] cleanup work in useEffect");
    };
  }, [props.persons]);

  return (
    <div>
      <h1>{props.title}</h1>
      <ButtonStyled
        ref={marcarBotao}
        showAlteration={props.state}
        onClick={props.clicked}
      >
        Toggle div
      </ButtonStyled>

      <ButtonStyled showAlteration={props.state} onClick={props.showName}>
        Nome completo
      </ButtonStyled>

      <AuthContext.Consumer>
        {(context) => {
          return (<ButtonStyled owAlteration={props.state} onClick={context.login}>
            Login
          </ButtonStyled>);
        }}
      </AuthContext.Consumer>
    </div>
  );
};

export default React.memo(Cockpit);
