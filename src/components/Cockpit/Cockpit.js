import React from 'react'
import styled from 'styled-components'

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

   //showAlteration={this.state.show} this.state.show this.clicked
   //onClick={this.show}

const Cockpit = (props) => {
  return ( 
  <div>
    <h1>Pessoas</h1>
    <ButtonStyled 
    showAlteration={props.state}
    onClick={props.clicked}>
      Toggle div
    </ButtonStyled>

    <ButtonStyled
    showAlteration={props.state}
    onClick={props.showName}>
      Nome completo
    </ButtonStyled> 
  </div>
  )
}

export default Cockpit