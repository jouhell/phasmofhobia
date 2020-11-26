import React, { useState, useEffect } from 'react'
import Button from './button'
import styled from 'styled-components'
import data from '../../public/data.json'
import useTestsContext from '../context'

const Text = styled.p`
  font-size: 24px;
  margin: 0;
`

const Inner = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const Container = styled.div`
  align-items: center;
  color: white;
  display: flex;
  flex-direction: column;
  width: 280px;

  ${Inner} {
    margin-top: 24px;
  }
`

const Options = (props) => {
  const { number } = props

  const [index, setIndex] = useState(0)

  const { tests, setTests } = useTestsContext()

  const { label } = data.evidences[index]

  useEffect(() => {
    if (index == 0) {
      let newTests = tests

      newTests[number] = null

      setTests([...newTests])
    } else {
      let newTests = tests

      newTests[number] = data.evidences[index]

      setTests([...newTests])
    }
  }, [index])

  const previusButton = () => {
    index > 0 ? setIndex(index - 1) : setIndex(6)
  }

  const nextButton = () => {
    index < 6 ? setIndex(index + 1) : setIndex(0)
  }

  return (
    <Container>
      <Text>Prueba encontrada #{number + 1}:</Text>
      <Inner>
        <Button left onClick={previusButton} />
        <Text>{label}</Text>
        <Button onClick={nextButton} />
      </Inner>
    </Container>
  )
}

export default Options
