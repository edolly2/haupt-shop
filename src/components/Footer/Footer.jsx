import styled from 'styled-components';
import Logo from '../../assets/images/haupt-shop.png';
import {
  FaFacebookSquare,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const PageFooter = styled.footer`
  /* position: relative; */
  /* bottom: 0 */
  /* margin-top: auto; */
  /* right: 0; */
  /* left: 0; */
  /* max-height: 10rem; */
  min-height: 10rem;
  background-color: rgb(0, 0, 0);
  color: white;
  display: flex;
  flex-direction: column;
  /* box-shadow: inset 0 6px 10px black; */
  /* padding: 2.4rem 4.8rem 0 4.8rem; */
  margin-top: -1px;
`;

const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 32px;
  align-items: flex-start;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    gap: 32px;
    padding: 24px;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  white-space: nowrap;
  flex: 1;
`;

const FooterLogo = styled.img`
  width: 10vw;
  min-width: 200px;
  height: auto;
  /* margin-bottom: 2.4rem; */
  /* @media screen and (max-width: 768px) { */
`;

const FooterBottom = styled.div`
  display: flex;
  gap: 2.4rem;
  background-color: rgb(0, 0, 0);
  padding: 2px 0 2px 32px;
  font-size: 0.7rem;
  margin: 0;
  @media screen and (max-width: 768px) {
    padding: 2px 0 2px 24px;
  }
`;

const LeftCol = styled.div``;

const FooterGrp = styled.div`
  /* padding: 0 32px; */
  @media screen and (max-width: 768px) {
    /* padding: 0 24px; */
  }
`;

const PhoneLink = styled.a`
  /* color: #b8cad2; */
  color: pink;
  display: flex;
  gap: 0.4rem;
  align-items: center;
  white-space: nowrap;
  /* width: 50%; */
  &:hover {
    /* font-weight: 700; */
  }
`;

const InfoPNumber = styled.p``;

const FooterHeading = styled.h5`
  /* border-bottom: 2px solid white; */
  /* width: 40%; */
`;

const Line = styled.div`
  width: 50%;
  margin: 0.2rem 0;
  height: 2px;
  background-color: #011638;
  /* margin: 36px 0; */
  /* border-radius: 100%; */
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const HoursSection = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    /* width: 100%; */
  }
`;

const HoursGrp = styled.div`
  display: flex;
  /* gap: 1.6rem; */
  justify-content: space-between;
  border-bottom: 2px solid #011638;
  max-width: 200px;
`;

const Day = styled.p`
  color: pink;
  margin-right: 32px;
`;
const Time = styled.p`
  color: green;
  /* margin-left: auto; */
  /* text-align: right; */
`;

const SocialGroup = styled.div`
  display: flex;
  gap: 24px;
`;

const Footer = () => {
  return (
    <PageFooter>
      <FooterWrapper>
        <FooterSection>
          <NavLink to='/haupt-shop/'>
            <FooterLogo src={Logo} alt='llll' />
          </NavLink>
          <FooterGrp>
            <FooterHeading>Phone</FooterHeading>
            <Line />
            <PhoneLink href='tel:402-228-9649'>
              <InfoPNumber>(402)228-9649</InfoPNumber>
            </PhoneLink>
          </FooterGrp>
          <FooterGrp>
            <FooterHeading>Address</FooterHeading>
            <Line />
            <PhoneLink href='https://goo.gl/maps/uRWHdWGH6BPbaJWz6'>
              <InfoPNumber>926 W Court St, Beatrice, NE 68310</InfoPNumber>
            </PhoneLink>
          </FooterGrp>
        </FooterSection>
        <FooterSection>
          <FooterGrp>
            <FooterHeading>Store Hours</FooterHeading>
            <Line />
            <HoursSection>
              <HoursGrp>
                <Day>Monday</Day>
                <Time>9 AM-5 PM</Time>
              </HoursGrp>
              <HoursGrp>
                <Day>Tuesday</Day>
                <Time>9 AM-5 PM</Time>
              </HoursGrp>
              <HoursGrp>
                <Day>Wednesday</Day>
                <Time>9 AM-5 PM</Time>
              </HoursGrp>
              <HoursGrp>
                <Day>Thursday</Day>
                <Time>9 AM-5 PM</Time>
              </HoursGrp>
              <HoursGrp>
                <Day>Friday</Day>
                <Time>9 AM-5 PM</Time>
              </HoursGrp>
              <HoursGrp>
                <Day>Saturday</Day>
                <Time>-CLOSED-</Time>
              </HoursGrp>
              <HoursGrp>
                <Day>Sunday</Day>
                <Time>-CLOSED-</Time>
              </HoursGrp>
            </HoursSection>
          </FooterGrp>
        </FooterSection>
        <FooterSection>
          <FooterGrp>
            <FooterHeading>Links</FooterHeading>
            <Line />
          </FooterGrp>
        </FooterSection>
        <FooterSection>
          <FooterGrp>
            <FooterHeading>Social Media</FooterHeading>
            <Line />
            <SocialGroup>
              <FaFacebookSquare className='icon' />
              <FaTwitter className='icon' />
              <FaYoutube className='icon' />
              <FaInstagram className='icon' />
            </SocialGroup>
          </FooterGrp>
        </FooterSection>
      </FooterWrapper>
      <FooterBottom>
        <small style={{ fontSize: '11px' }}>Copyright</small>
        <small style={{ fontSize: '11px' }}>Terms</small>
        <small style={{ fontSize: '11px' }}>Privacy</small>
      </FooterBottom>
    </PageFooter>
  );
};

export default Footer;
