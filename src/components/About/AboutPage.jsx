import PageTitle from '../PageTitle';
import MainLayout from '../../layout/MainLayout';
import styled from 'styled-components';

const SectionTitle = styled.h2`
  color: #005cf0;
`;
const AboutPage = () => {
  return (
    <MainLayout>
      <PageTitle text='About Us' />
      <SectionTitle>Our Story</SectionTitle>
      <SectionTitle>Meet The Team</SectionTitle>
      <SectionTitle>Mission Statement</SectionTitle>
    </MainLayout>
  );
};

export default AboutPage;
