import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.section`
  /* width: 100vw; */
  /* max-width: 896px; */
  height: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3%;
  margin: 0 auto;
  border-radius: 8px;
  background-color: rgba(96, 96, 96, 0.1);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(33, 33, 33, 0.9);
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Section = ({ justifyContent, alignItems, children }) => {
  const styles = {
    // width: width || '100vw',
    justifyContent: justifyContent || 'flex-start',
    alignItems: alignItems || 'flex-start',
  };
  return <Container style={styles}>{children}</Container>;
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  // style: PropTypes.object,
};

export default Section;
