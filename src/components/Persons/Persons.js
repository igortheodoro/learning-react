import React from "react";
import Person from './Person/Person'

const persons = (props) => props.persons.map((item, index) => {
    return <Person
      name={item.name}
      age={item.age}
      changed={(e) => props.changed(e, index)}
      value={item.name}
      delete={() => props.deleted(index)}
      key={item.id}
    />
})

export default persons;
