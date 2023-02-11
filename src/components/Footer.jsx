import styled from 'styled-components';
import Logo from '../assets/images/haupt-shop.png';

const PageFooter = styled.footer`
  /* position: relative; */
  /* bottom: 0; */
  /* right: 0; */
  /* left: 0; */
  max-height: 10rem;
  min-height: 10rem;
  background-color: purple;
  color: white;
`;

const FooterSection = styled.div`
  width: 25%;
`;

const FooterLogo = styled.img`
  width: 10vw;
  height: auto;
`;

const Footer = () => {
  return (
    <PageFooter>
      <FooterSection>
        <FooterLogo src={Logo} alt='llll' />
      </FooterSection>
      <FooterSection></FooterSection>
      <FooterSection></FooterSection>
      <FooterSection></FooterSection>
    </PageFooter>
  );
};

export default Footer;
