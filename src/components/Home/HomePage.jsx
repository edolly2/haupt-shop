import Hero from './Hero';
import HomeBadges from './HomeBadges';
import HomeContent from './HomeContent';
import MainLayout from '../../layout/MainLayout';
import styled from 'styled-components';
import ContentLayout from '../../layout/ContentLayout';
import Carousel from './Carousel';

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
      <ContentLayout>
        <HomeBadges />
      </ContentLayout>
      <ContentLayout>
        <Carousel />
        {/* <HomeContent /> */}
      </ContentLayout>
    </Container>
    //  </MainLayout>
  );
};

export default HomePage;
