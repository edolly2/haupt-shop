import PageTitle from '../PageTitle';
import MainLayout from '../../layout/MainLayout';
import ContactForm from './ContactForm';
import styled from 'styled-components';
import {
  FaFacebookSquare,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from 'react-icons/fa';

const Container = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const PageSection = styled.div`
  width: 33%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const InfoP = styled.p`
  color: #b8cad2;
`;

const SectionTitle = styled.h3`
  margin: 0 0 32px 0;
  color: #005cf0;
  border-bottom: 2px solid white;
  width: 75%;
  white-space: nowrap;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0 0 16px 0;
  }
`;

const SocialContainer = styled.div`
  display: flex;
  gap: 16px;
`;

const ContactPage = () => {
  return (
    <MainLayout>
      <PageTitle text='Get In Touch' />
      <Container>
        <PageSection>
          <SectionTitle>Our Location</SectionTitle>
          <iframe
            title='Directions to the Haupt Shop'
            src='https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d774311.1105243257!2d-97.03272047868208!3d40.70364424664316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d41.1303936!2d-95.96108799999999!4m5!1s0x879643af6e204963%3A0x6a61d0c25986dabb!2shaupt%20shop%20beatrice%20ne!3m2!1d40.2663064!2d-96.7772145!5e0!3m2!1sen!2sus!4v1677564549732!5m2!1sen!2sus'
            width='325'
            height='225'
            // style='border:0;'
            allowfullscreen=''
            loading='lazy'
            referrerpolicy='no-referrer-when-downgrade'
          ></iframe>
        </PageSection>
        <PageSection>
          <SectionTitle>Social Media</SectionTitle>
          <SocialContainer>
            <FaFacebookSquare className='icon' />
            <FaTwitter className='icon' />
            <FaYoutube className='icon' />
            <FaInstagram className='icon' />
          </SocialContainer>
        </PageSection>
        <PageSection>
          <SectionTitle>Contact Information</SectionTitle>
          <InfoP>Example Name</InfoP>
          <InfoP>Example@email.com</InfoP>
          <InfoP>(402)228-9649</InfoP>
          <InfoP>926 W Court St, Beatrice, NE 68310</InfoP>
        </PageSection>
      </Container>
      <Container>
        <PageSection>
          <SectionTitle>Send Us a Message</SectionTitle>
          <ContactForm />
        </PageSection>
      </Container>
    </MainLayout>
  );
};

export default ContactPage;
