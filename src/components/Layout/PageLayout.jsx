import styled from 'styled-components';

const Layout = styled.div`
  /* max-width: 100vw; */
`;

const PageLayout = ({ children }) => {
  return <Layout>{children}</Layout>;
};

export default PageLayout;
