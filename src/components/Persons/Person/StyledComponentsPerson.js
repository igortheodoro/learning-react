import styled from 'styled-components'

const DivBox = styled.div`
  margin: 0 auto;
  margin-top: 15px;
  margin-bottom: 15px;
  width: 45%;
  box-shadow: 1px 2px 5px #000000a1;
  padding: 15px;
  border-radius: 15px;

  @media (min-width: 500px) {
    width: 400px;
  }
`

const ButtonDelete = styled.button`
  padding: 8px;
  border-radius: 5px;
  border: none;
  margin-left: 5px;
  color: #fff;
  background-color: #911606;

  :hover{
    background-color: #bf1600;
    cursor: pointer;
  }
`

export{
  DivBox,
  ButtonDelete
}