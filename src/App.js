import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Igor', age: 19, id: '9*-asHASDulof'},
      {name: 'Roger', age: 27, id: '*5-652asdSDulof'},
      {name: 'Mayk', age: 65, id: '0-9asd**asd455$'}
    ],
    click: true,
    show: false
  }

  change = (e, index) => {
    var personInputed = e.target.value
    var newPersons = this.state.persons

    newPersons[index].name = personInputed

    this.setState({persons: newPersons})
  }

  clicked = () => {
    if(this.state.click){
      this.setState({
        persons: [
          {name: 'Igor Theodo Oliveira', 
          age: "dezenove", 
          id: '9*-asHASDulof'},

          {name: 'Roger Batista Silva', 
          age: "vinte e sete", 
          id: '*5-652asdSDulof'},

          {name: 'Mayk Fonseca Brito',
          age: "sessenta e cinco", 
          id: '0-9asd**asd455$'}
        ]
      })
    }else{
      this.setState({
        persons: [
          {name: 'Igor', 
          age: 19, 
          id: '9*-asHASDulof'},

          {name: 'Roger', 
          age: 27, 
          id: '*5-652asdSDulof'},

          {name: 'Mayk', 
          age: 65, 
          id: '0-9asd**asd455$'}
        ]
      })
    }

    this.setState({
      click: !this.state.click
    })
  }

  show = () => {
    const display = this.state.show

    this.setState({
      show: !display
    })
  }

  delete = (index) => {
    const persons = [...this.state.persons]
    persons.splice(index, 1)

    this.setState({
      persons
    })

  }

  render() {
    return (
      <div className="App"> 
        <h1>Pessoas</h1>
        <button onClick={this.show}>Toggle div</button>
        { this.state.show ? 
          this.state.persons.map((item, index) => <Person 
            name={item.name} 
            age={item.age} 
            changed={(e) => this.change(e, index)}
            value={item.name}
            delete={() => this.delete(index)}
            key={item.id}
            />
          ) : null
        }
        <button onClick={this.clicked}>Nome completo</button>
      </div>
    );
  }
}

export default App;
