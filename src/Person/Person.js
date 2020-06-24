import React from 'react';
import './Person.css'

const person = (props) => {
  return(
    <div className="div-box">
      <p>Olá, eu sou {props.name}. Eu tenho {props.age} anos.</p>
      <input onChange={props.changed} value={props.value} type="text"/>
      <button onClick={props.delete}> Deletar</button>
    </div>
  ) 
}

export default person;