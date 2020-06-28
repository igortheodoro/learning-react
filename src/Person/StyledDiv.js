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

export default DivBox