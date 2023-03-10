import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3%;
  margin: 5% 0;
  position: relative;
  @media screen and (max-width: 768px) {
    /* padding: 1.5%; */
    /* margin: 5% 0; */
  }
`;

const Section = styled.section`
  min-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  /* overflow: hidden; */
`;

const ContentLayout = ({ children }) => {
  return (
    <Container>
      <Section>{children}</Section>
    </Container>
  );
};

export default ContentLayout;
