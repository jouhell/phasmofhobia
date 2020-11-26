import React from 'react'
import Options from './options'
import styled from 'styled-components'
import { map } from 'lodash'

const Container = styled.div`
  justify-self: center;
  margin-top: 120px;

  > * {
    margin-bottom: 24px;
  }

  > :last-child {
    margin-bottom: 0;
  }
`

const ListOfOptions = (props) => {
  const renderOptions = map([0, 1, 2], (_, index) => (
    <Options key={index} number={index} />
  ))

  return <Container {...props}>{renderOptions}</Container>
}

export default ListOfOptions