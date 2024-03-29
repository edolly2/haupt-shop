import styled from 'styled-components';
import Carousel from './Carousel';
import Section from '../Layout/Section/Section.jsx';
const Container = styled.div`
  /* max-height: 100vh; */
  /* position: relative; */
  /* width: 100%; */
  background-color: white;
  /* background-color: transparent; */
  padding: 72px 32px;
  color: white;
  /* border-top: 72px solid rgb(33, 33, 33);
  border-bottom: 72px solid rgb(33, 33, 33);
  border-left: 32px solid rgb(33, 33, 33);
  border-right: 32px solid rgb(33, 33, 33); */
  border-top: 72px solid rgb(0, 0, 0);
  border-bottom: 72px solid rgb(0, 0, 0);
  border-left: 32px solid rgb(0, 0, 0);
  border-right: 32px solid rgb(0, 0, 0);
  box-shadow: inset 0 0 100px rgba(33, 33, 33, 0.3);
  @media screen and (max-width: 768px) {
    padding: 24px 0;
  }
`;

const HomeContent = () => {
  return (
    // <Container>
    <Section>
      <Carousel />
    </Section>
    //  </Container>
  );
};

export default HomeContent;
