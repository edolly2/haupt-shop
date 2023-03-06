import PageTitle from '../PageTitle';
import MainLayout from '../../layout/MainLayout';
import styled from 'styled-components';

const Section = styled.div``;

const SectionTitle = styled.h2`
  color: #005cf0;
`;
const AboutPage = () => {
  return (
    <MainLayout>
      <PageTitle text='About Us' />
      <Section>
        <SectionTitle>Our Story</SectionTitle>
      </Section>
      <Section>
        <SectionTitle>Meet The Team</SectionTitle>
      </Section>
      <Section>
        <SectionTitle>Mission Statement</SectionTitle>
      </Section>
    </MainLayout>
  );
};

export default AboutPage;
