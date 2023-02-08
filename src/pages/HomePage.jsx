import Hero from '../components/Hero';
import HomeBadges from '../components/HomeBadges';
import HomeContent from '../components/HomeContent';
import MainLayout from '../layout/MainLayout';

const HomePage = () => {
  return (
    <MainLayout>
      <Hero />
      <HomeBadges />
      <HomeContent />
    </MainLayout>
  );
};

export default HomePage;
