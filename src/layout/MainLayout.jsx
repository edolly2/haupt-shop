import styled from 'styled-components';

const Layout = styled.div``;

const MainLayout = ({ children }) => {
  return (
    <Layout>
      <main>{children}</main>
    </Layout>
  );
};

export default MainLayout;
