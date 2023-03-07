import PageTitle from '../PageTitle';
import MainLayout from '../../layout/MainLayout';
import styled from 'styled-components';

const Section = styled.div`
  margin: 0 0 64px 0;
`;

const SectionTitle = styled.h2`
  color: #005cf0;
  margin-bottom: 16px;
  text-align: center;
`;

const AboutInfo = styled.p`
  width: 100%;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 16px;
  color: #b8cad2;

  @media screen and (min-width: 700px) {
    width: 85%;
  }

  @media screen and (min-width: 1200px) {
    width: 60%;
  }
`;

const TeamInfoContainer = styled.div`
  display: grid;
  text-align: center;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const TeamInfo = styled.div``;

const TeamInfoTitle = styled.h3`
  color: #005cf0;
`;

const TeamInfoImg = styled.img``;

const Line = styled.div`
  width: 70%;
  height: 4px;
  background-color: #011638;
  margin: 32px 0;
  border-radius: 100%;
  @media screen and (max-width: 769px) {
    width: 100%;
  }
`;

const AboutPage = () => {
  return (
    <MainLayout>
      <PageTitle text='About Us' />
      <Section>
        <Line></Line>
        <SectionTitle>Mission Statement</SectionTitle>
        <AboutInfo>
          Here at The Haupt Shop, our goal is to give each client an enjoyable
          and easy experience with the customer care that is above the rest. We
          understand that buying a new car or getting a repair on an existing
          car can be a stressful situation to be in. That is why we offer the
          the best prices on all of our cars and services, as well as the
          expertise to have you leaving with the confidence that you got the
          best value and the work was done properly.
        </AboutInfo>
        <Line></Line>
      </Section>
      <Section>
        <Line></Line>
        <SectionTitle>Our Story</SectionTitle>
        <AboutInfo>
          We are a family owned and operated business located in Beatrice
          Nebraska. We sell cars at a fair price as well as offer a list of
          services for any of your car needs. We started in XXXX and have been
          building friendships with our clients ever since.
        </AboutInfo>
        <Line></Line>
      </Section>
      <Section>
        <Line></Line>
        <SectionTitle>Meet The Team</SectionTitle>
        <AboutInfo style={{ marginBottom: '48px' }}>
          The Haupt Shop team is full of expert technicians with the experience
          to get any job done to the highest of standards
        </AboutInfo>
        <TeamInfoContainer>
          <TeamInfo>
            <TeamInfoImg src='https://via.placeholder.com/150' alt='#' />
            <TeamInfoTitle>John Doe</TeamInfoTitle>
          </TeamInfo>
          <TeamInfo>
            <TeamInfoImg src='https://via.placeholder.com/150' alt='#' />
            <TeamInfoTitle>John Doe</TeamInfoTitle>
          </TeamInfo>
          <TeamInfo>
            <TeamInfoImg src='https://via.placeholder.com/150' alt='#' />
            <TeamInfoTitle>John Doe</TeamInfoTitle>
          </TeamInfo>
          <TeamInfo>
            <TeamInfoImg src='https://via.placeholder.com/150' alt='#' />
            <TeamInfoTitle>John Doe</TeamInfoTitle>
          </TeamInfo>
        </TeamInfoContainer>
        <Line></Line>
      </Section>
    </MainLayout>
  );
};

export default AboutPage;
