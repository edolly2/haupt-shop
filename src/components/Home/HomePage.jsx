import Hero from './Hero';
import HomeBadges from '../HomeBadges';
import HomeContent from './HomeContent';
import MainLayout from '../../layout/MainLayout';
import styled from 'styled-components';

const Container = styled.div`
  /* display: flex;
  flex-direction: column;
  gap: 64px; */
  background-color: black;
`;

const HomePage = () => {
  return (
    //  <MainLayout>
    <Container>
      <Hero />
      <HomeBadges />
      <HomeContent />
    </Container>
    //  </MainLayout>
  );
};

export default HomePage;
