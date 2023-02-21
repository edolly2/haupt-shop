import styled from 'styled-components';
import Carousel from './Carousel';

const Container = styled.div`
  height: 100vh;
  /* width: 100%; */
  background-color: green;
  padding: 36px;
  color: white;
`;

const HomeContent = () => {
  return (
    <Container>
      <Carousel />
    </Container>
  );
};

export default HomeContent;
