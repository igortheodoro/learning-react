import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import styled from 'styled-components';

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
    var newPerson = this.state.persons

    newPerson[index].name = personInputed

    this.setState({persons: newPerson})
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

    const ButtonStyled = styled.button`
      background-color: ${props => props.showAlteration ? '#505050' : '#fff'};
      color: ${props => props.showAlteration ? '#fff' : '#000'};
      padding: 8px;
      border-radius: 5px;
      border: 1px solid #505050;
      margin-right: 5px;
      transition: all .3s;

      :hover{
        color: ${props => props.showAlteration ? '#000' : '#fff'};
        background-color: ${props => props.showAlteration ? '#fff' : '#505050'};
      }
    `

    return (
      <div className="App"> 
        <h1>Pessoas</h1>
        <ButtonStyled 
         showAlteration={this.state.show}
         onClick={this.show}>
          Toggle div
        </ButtonStyled>

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

        <ButtonStyled
         showAlteration={this.state.show}
         onClick={this.clicked}>
          Nome completo
        </ButtonStyled>
        
      </div>
    );
  }
}

export default App;
