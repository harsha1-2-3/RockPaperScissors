import styled from 'styled-components'

export const ScoreColor = styled.p`
  color: ${props => (props.scoreColorStatus ? 'red' : 'green')};
  font-size: 45px;
  padding: 0px;
  font-weight: bold;
  margin: 0px;
  font-family: Roboto;
`
