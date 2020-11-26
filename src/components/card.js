import React from 'react'
import styled, { keyframes } from 'styled-components'
import Img from '../../public/gosht.jpg'

const fadeIn = keyframes`
  0% {opacity:0;}
  100% {opacity:1;}
`

const Image = styled.div`
  background-image: url(${Img});
  background-position: center top;
  background-size: cover;
  height: 208px;
`

const SubTitle = styled.h2`
  font-size: 14px;
  margin: 0;
`

const Title = styled.h1`
  font-size: 18px;
  margin: 0;
  text-align: center;
`

const Container = styled.div`
  animation: ${fadeIn} ease 5s;
  background-color: #010409;
  border-radius: 8px;
  border: 0.5px solid #f2f2f2;
  color: white;
  max-width: 224px;
  min-width: 224px;
  padding: 24px 16px;

  > * {
    margin-bottom: 8px;
  }

  > :last-child {
    margin-bottom: 0;
  }
`

const Card = (props) => {
  const { name, difference, strengths, weaknesses } = props

  return (
    <Container>
      <Title>{difference}</Title>
      <Image src={Img} />
      <Title>{name}</Title>
      <SubTitle>Fortalezas</SubTitle>
      <p>{strengths}</p>
      <SubTitle>Debilidades</SubTitle>
      <p>{weaknesses}</p>
    </Container>
  )
}

export default Card
