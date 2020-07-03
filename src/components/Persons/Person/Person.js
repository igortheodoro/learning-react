import React from 'react';
import {DivBox, ButtonDelete} from './StyledComponentsPerson'

const person = (props) => {
  return(
    <DivBox>
      <p>Olá, eu sou {props.name}. Eu tenho {props.age} anos.</p>
      <input onChange={props.changed} value={props.value} type="text"/>
      <ButtonDelete onClick={props.delete}> Deletar</ButtonDelete>
    </DivBox>
  ) 
}

export default person;