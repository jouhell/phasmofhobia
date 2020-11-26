import styled from 'styled-components'
import ListOfOptions from '../src/components/list-of-options'
import ListOfCards from '../src/components/list-of-cards'

const Inner = styled.div`
  align-items: center;
  display: grid;
  flex-shrink: 1;
  grid-gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(400px, 1fr));
  justify-content: center;
  width: 100%;
`

const Container = styled.div`
  background-attachment: fixed;
  background-image: url(${require('../public/background.png').default});
  background-position: center top;
  background-size: cover;
  display: flex;
  min-height: 100vh;
  overflow: hidden;
  /* padding-top: 64px; */
`

const Home = () => {
  return (
    <>
      <Container>
        <Inner>
          <ListOfOptions />
          <ListOfCards />
        </Inner>
      </Container>
    </>
  )
}

export default Home
