import React from 'react';
import DivBox from './StyledDiv'

const person = (props) => {
  return(
    <DivBox>
      <p>Olá, eu sou {props.name}. Eu tenho {props.age} anos.</p>
      <input onChange={props.changed} value={props.value} type="text"/>
      <button onClick={props.delete}> Deletar</button>
    </DivBox>
  ) 
}

export default person;