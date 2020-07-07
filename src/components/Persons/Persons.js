import React, { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {
  render() {
    console.log("[Persons.js] - Are loaded");

    return this.props.persons.map((item, index) => {
      return (
        <Person
          name={item.name}
          age={item.age}
          changed={(e) => this.props.changed(e, index)}
          value={item.name}
          delete={() => this.props.deleted(index)}
          key={item.id}
        />
      );
    });
  }
}

export default Persons;
