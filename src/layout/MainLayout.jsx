import styled from 'styled-components';
import MainLayoutBack from '../assets/images/lifts.jpg';

const Container = styled.div`
  padding: 0 16px;
  background-color: rgb(33, 33, 33);
  min-height: 75vh;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(33, 33, 33, 1) 100%
  );
  margin-top: -1px;
  @media screen and (max-width: 768px) {
    padding: 8px;
  }
`;

const Layout = styled.div`
  /* background-image: url(${MainLayoutBack}); */
  /* background-repeat: no-repeat; */
  /* background-size: cover; */
  /* background-position: center; */
  /* background: rgb(37, 43, 96);
  background: radial-gradient(
    circle,
    rgba(37, 43, 96, 1) 0%,
    rgba(24, 27, 45, 1) 57%,
    rgba(0, 0, 0, 1) 100%
  ); */
  /* background: rgb(62, 62, 62);
  background: radial-gradient(
    circle,
    rgba(62, 62, 62, 1) 0%,
    rgba(40, 40, 40, 1) 57%,
    rgba(0, 0, 0, 1) 100%
  ); */
  background: rgb(62, 62, 62);
  background: linear-gradient(
    90deg,
    rgba(62, 62, 62, 1) 0%,
    rgba(40, 40, 40, 1) 50%,
    rgba(0, 0, 0, 1) 100%
  );
  padding: 16px;
  min-height: 75vh;

  @media screen and (max-width: 768px) {
    padding: 8px;
  }
`;

const MainLayout = ({ children }) => {
  return (
    <Container>
      <Layout>
        <main>{children}</main>
      </Layout>
    </Container>
  );
};

export default MainLayout;
