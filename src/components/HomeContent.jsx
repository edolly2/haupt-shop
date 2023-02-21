import styled from 'styled-components';
import Carousel from './Carousel';

const Container = styled.div`
  /* max-height: 100vh; */
  /* position: relative; */
  /* width: 100%; */
  background-color: white;
  padding: 72px 36px;
  color: white;
  border-top: 72px solid rgb(33, 33, 33);
  border-bottom: 72px solid rgb(33, 33, 33);
  border-left: 36px solid rgb(33, 33, 33);
  border-right: 36px solid rgb(33, 33, 33);
  box-shadow: inset 0 0 100px rgba(33, 33, 33, 0.3);
`;

const HomeContent = () => {
  return (
    <Container>
      <Carousel />
    </Container>
  );
};

export default HomeContent;
