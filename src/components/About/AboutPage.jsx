import PageTitle from '../PageTitle';
import MainLayout from '../../Layout/MainLayout';
import styled from 'styled-components';
import Section from '../../Layout/Section/Section';
import Spacer from '../../Layout/Spacer';
import SectionTitle from '../../Layout/Section/SectionTitle';

// const Section = styled.div`
//   margin: 0 0 64px 0;
//   background-color: rgba(255, 255, 255, 0.3);
//   backdrop-filter: blur(10px);
//   border: 2px solid rgba(33, 33, 33, 0.9);
//   padding: 72px 32px;
//   @media screen and (max-width: 768px) {
//     padding: 64px 24px;
//   }
// `;

// const SectionTitle = styled.h2`
//   color: #005cf0;
//   margin-bottom: 16px;
//   text-align: center;
//   border-bottom: 2px solid white;
//   padding-bottom: 8px;
//   text-shadow: 4px 4px 8px rgb(0, 0, 0);
// `;

const AboutInfo = styled.p`
  width: 100%;
  line-height: 2;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 16px;
  color: #b8cad2;

  @media screen and (min-width: 700px) {
    width: 85%;
  }

  @media screen and (max-width: 900px) {
    text-indent: 2em;
    text-align: left;
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
        <SectionTitle title='Mission Statement' textAlign='center' />
        <AboutInfo>
          Here at The Haupt Shop, our goal is to give each client an enjoyable
          and easy experience with the customer care that is above the rest. We
          understand that buying a new car or getting a repair on an existing
          car can be a stressful situation to be in. That is why we offer the
          the best prices on all of our cars and services, as well as the
          expertise to have you leaving with the confidence that you got the
          best value and the work was done properly.
        </AboutInfo>
      </Section>
      <Spacer />
      <Section>
        <SectionTitle title='Our Story' textAlign='center' />
        {/* <SectionTitle>Our Story</SectionTitle> */}
        <AboutInfo>
          We are a family owned and operated business located in Beatrice
          Nebraska. We sell cars at a fair price as well as offer a list of
          services for any of your car needs. We started in XXXX and have been
          building friendships with our clients ever since.
        </AboutInfo>
      </Section>
      <Spacer />
      <Section>
        <SectionTitle title='Meet The Team' textAlign='center' />
        {/* <SectionTitle>Meet The Team</SectionTitle> */}
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
      </Section>
    </MainLayout>
  );
};

export default AboutPage;
