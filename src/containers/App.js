import React, { Component } from "react";
import "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import styled from "styled-components";

class App extends Component {
  state = {
    persons: [
      { name: "Igor", age: 19, id: "9*-asHASDulof" },
      { name: "Roger", age: 27, id: "*5-652asdSDulof" },
      { name: "Mayk", age: 65, id: "0-9asd**asd455$" },
    ],
    click: true,
    show: false,
  };

  change = (e, index) => {
    var personInputed = e.target.value;
    var newPerson = this.state.persons;

    newPerson[index].name = personInputed;

    this.setState({ persons: newPerson });
  };

  clicked = () => {
    if (this.state.click) {
      this.setState({
        persons: [
          {
            name: "Igor Theodo Oliveira",
            age: "dezenove",
            id: "9*-asHASDulof",
          },

          {
            name: "Roger Batista Silva",
            age: "vinte e sete",
            id: "*5-652asdSDulof",
          },

          {
            name: "Mayk Fonseca Brito",
            age: "sessenta e cinco",
            id: "0-9asd**asd455$",
          },
        ],
      });
    } else {
      this.setState({
        persons: [
          { name: "Igor", age: 19, id: "9*-asHASDulof" },

          { name: "Roger", age: 27, id: "*5-652asdSDulof" },

          { name: "Mayk", age: 65, id: "0-9asd**asd455$" },
        ],
      });
    }

    this.setState({
      click: !this.state.click,
    });
  };

  show = () => {
    const display = this.state.show;

    this.setState({
      show: !display,
    });
  };

  delete = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);

    this.setState({
      persons,
    });
  };

  render() {
    return (
      <div className="App">
        <Cockpit
          state={this.state.show}
          clicked={this.show}
          showName={this.clicked}
        />
        {this.state.show ? (
          <Persons
            persons={this.state.persons}
            changed={this.change}
            deleted={this.delete}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
