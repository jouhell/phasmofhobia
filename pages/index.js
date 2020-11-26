import styled from 'styled-components'
import ListOfOptions from '../src/components/list-of-options'
import ListOfCards from '../src/components/list-of-cards'
import Image from 'next/image'

const InnerContainer = styled.div`
  display: flex;
  height: calc(100vh - 60px);
  overflow: hidden;
  position: absolute;
  top: 60px;
  width: 100%;

  @media (max-width: 663px) {
    top: 120px;
    height: calc(100vh - 120px);
  }
`

const Inner = styled.div`
  align-items: center;
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  justify-content: center;
  overflow: auto;
  width: 100%;
  z-index: 1;
`

const Container = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
  position: absolute;
  width: 100vw;
  z-index: -1;
`

const Home = () => {
  return (
    <Container>
      <Image
        src="/background.png"
        alt="background"
        layout="fill"
        quality={100}
        priority
      />
      <InnerContainer>
        <Inner>
          <ListOfOptions />
          <ListOfCards />
        </Inner>
      </InnerContainer>
    </Container>
  )
}

export default Home
