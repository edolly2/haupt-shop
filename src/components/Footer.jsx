import styled from 'styled-components';

const PageFooter = styled.footer`
  /* position: fixed; */
  /* bottom: 0; */
  /* right: 0; */
  /* left: 0; */
  max-height: 10rem;
  min-height: 10rem;
  background-color: purple;
  color: white;
`;
const Footer = () => {
  return <PageFooter>PageFooter</PageFooter>;
};

export default Footer;
