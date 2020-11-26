import React from 'react'
import styled from 'styled-components'

const Arrow = styled.div`
  background-color: #c4c4c4;
  height: 50px;
  transform: translate(-33px) rotate(45deg);
  width: 50px;
`

const Container = styled.div`
  height: 50px;
  overflow: hidden;
  width: 35px;

  ${(props) => props.left && `transform: rotate(180deg);`}

  ${Arrow} :hover {
    box-shadow: ${(props) =>
      props.left ? `-3px 0px 5px 1px black;` : `0px 3px 5px 1px black;`};
    cursor: pointer;
  }
`

const Button = (props) => {
  return (
    <Container {...props}>
      <Arrow />
    </Container>
  )
}

export default Button
