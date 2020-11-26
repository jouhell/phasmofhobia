import React, { useEffect, useState } from 'react'
import Card from './card'
import styled from 'styled-components'
import useTestsContext from '../context'
import data from '../../data.json'
import { filter, map, sortBy, isEmpty, difference, find } from 'lodash'

const Container = styled.div`
  display: flex;
  overflow: auto;
  padding: 16px;
  height: fit-content;

  > * {
    margin-right: 24px;
  }

  > :last-child {
    margin-right: 0;
  }
`

const ListOfCards = () => {
  const { tests } = useTestsContext()

  const [state, setState] = useState(undefined)

  const { ghosts, evidences } = data

  useEffect(() => {
    const testsFilter = filter(tests, (test) => !!test)

    const testsIds = map(testsFilter, (item) => item.id)

    let result = []

    if (isEmpty(testsIds) || testsIds.length < 2) {
      setState(undefined)

      return
    }

    const resultFiltered = filter(ghosts, (ghost) => {
      const evidencesIdsSorted = sortBy(ghost.evidencesId)

      const testsIdSorted = sortBy(testsIds)

      const differences = difference(evidencesIdsSorted, testsIdSorted)

      const isTrue = differences.length === 1

      if (isTrue && testsIds.length === 2) {
        result.push({
          ...ghost,
          difference: find(evidences, (item) => item.id === differences[0])
            .label,
        })
      }

      return isTrue
    })

    setState(isEmpty(result) ? resultFiltered : result)
  }, [tests])

  const renderCards = map(state, (item) => <Card key={item.id} {...item} />)

  return <Container>{renderCards}</Container>
}

export default ListOfCards
