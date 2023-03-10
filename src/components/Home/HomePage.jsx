import Hero from './Hero';
import HomeBadges from './HomeBadges';
import HomeContent from './HomeContent';
import MainLayout from '../../layout/MainLayout';
import styled from 'styled-components';
import ContentLayout from '../../layout/ContentLayout';
import Carousel from './Carousel';
import SkullsBack from '../../assets/images/skulls-1.jpg';

const Container = styled.div`
  /* display: flex;
  flex-direction: column;
  gap: 64px; */
  background-color: black;
`;

const Wrapper = styled.div`
  background-image: url(${SkullsBack});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const HomePage = () => {
  return (
    //  <MainLayout>
    <Container>
      <Hero />
      <Wrapper>
        <ContentLayout>
          <HomeBadges />
        </ContentLayout>
        <ContentLayout>
          <Carousel />
          {/* <HomeContent /> */}
        </ContentLayout>
      </Wrapper>
    </Container>
    //  </MainLayout>
  );
};

export default HomePage;
