import React, { Component } from "react";
import PropTypes from "prop-types";
import { DivBox, ButtonDelete } from "./StyledComponentsPerson";
import AuthContext from "../../../context/auth-context";

class Person extends Component {
  componentDidMount() {
    this.inputElement.focus();
  }

  render() {
    return (
      <DivBox>
        <AuthContext.Consumer>
          {context => context.authenticated ? <p> Autenticado </p> : <p>Não Autenticado</p>}
        </AuthContext.Consumer>
          <p>
            Olá, eu sou {this.props.name}. Eu tenho {this.props.age} anos.
          </p>
          <input
            ref={(inputElement) => {
              this.inputElement = inputElement;
            }}
            onChange={this.props.changed}
            value={this.props.value}
            type="text"
          />
          <ButtonDelete onClick={this.props.delete}> Deletar</ButtonDelete>
      </DivBox>
    );
  }
}

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.any,
  changed: PropTypes.func,
  value: PropTypes.string,
  delete: PropTypes.func,
};

export default Person;
