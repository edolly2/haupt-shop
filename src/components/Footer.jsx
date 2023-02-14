import styled from 'styled-components';
import Logo from '../assets/images/haupt-shop.png';

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
`;

const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 36px;
  align-items: flex-start;
`;

const FooterSection = styled.div`
  /* width: 25%; */
`;

const FooterLogo = styled.img`
  width: 10vw;
  height: auto;
`;

const FooterBottom = styled.div`
  display: flex;
  gap: 2.4rem;
  background-color: rgb(0, 0, 0);
  padding: 2px 0 2px 36px;
  font-size: 0.7rem;
  margin: 0;
`;

const FooterHeadings = styled.h5``;

const Footer = () => {
  return (
    <PageFooter>
      <FooterWrapper>
        <FooterSection>
          <FooterLogo src={Logo} alt='llll' />
          <FooterHeadings>Phone</FooterHeadings>
          <FooterHeadings>Address</FooterHeadings>
        </FooterSection>
        <FooterSection>
          <FooterHeadings>Store Hours</FooterHeadings>
        </FooterSection>
        <FooterSection>
          <FooterHeadings>Links</FooterHeadings>
        </FooterSection>
        <FooterSection>
          <FooterHeadings>Social Media</FooterHeadings>
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
