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
  background-color: purple;
  color: white;
  display: flex;
  flex-direction: column;
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
  background-color: teal;
  padding: 8px 0 8px 36px;
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
        <FooterHeadings>Copyright</FooterHeadings>
        <FooterHeadings>Terms</FooterHeadings>
        <FooterHeadings>Privacy</FooterHeadings>
      </FooterBottom>
    </PageFooter>
  );
};

export default Footer;
