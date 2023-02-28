import Hero from './Hero';
import HomeBadges from '../HomeBadges';
import HomeContent from './HomeContent';
import MainLayout from '../../layout/MainLayout';

const HomePage = () => {
  return (
    // <MainLayout>
    <>
      <Hero />
      <HomeBadges />
      <HomeContent />
    </>
    // </MainLayout>
  );
};

export default HomePage;
