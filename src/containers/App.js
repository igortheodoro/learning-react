import React, { Component } from "react";
import "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import AuthContext from "../context/auth-context";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      persons: [
        { name: "Igor", age: 19, id: "9*-asHASDulof" },
        { name: "Roger", age: 27, id: "*5-652asdSDulof" },
        { name: "Mayk", age: 65, id: "0-9asd**asd455$" },
      ],
      click: true,
      show: false,
      counter: 0,
      authenticated: false
    };

    console.log("[App.js] - Construtor");
  }

  state = {};

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] - getDerivedStateFromProps", props);
    return state;
  }

  componentDidMount() {
    console.log("[App.js] - componentDidMount");
  }

  change = (e, index) => {
    var personInputed = e.target.value;
    var newPerson = this.state.persons;

    newPerson[index].name = personInputed;

    this.setState((prevState, props) => {
      return { persons: newPerson, counter: prevState.counter + 1 };
    });
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

  loginHandler = () => {
    let authenticated = !this.state.authenticated

    this.setState({
      authenticated
    })
  }

  render() {
    console.log("[App.js] - Render");
    return (
      <div className="App">

        <AuthContext.Provider value={{
          authenticated: this.state.authenticated,
          login: this.loginHandler
        }}>

          <Cockpit
            title={this.props.title}
            state={this.state.show}
            clicked={this.show}
            showName={this.clicked}
            persons={this.state.persons}
          />
          {this.state.show ? (
            <Persons
              persons={this.state.persons}
              changed={this.change}
              deleted={this.delete}
            />
          ) : null}
        </AuthContext.Provider>
      </div>
    );
  }
}

export default App;
