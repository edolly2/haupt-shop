import styled from 'styled-components';
import PropTypes from 'prop-types';
const Title = styled.h2`
  color: #005cf0;
  text-shadow: 4px 4px 8px rgb(0, 0, 0);
  white-space: nowrap;
  border-bottom: 2px solid white;
  margin: 0 auto;
  margin-bottom: 1.6rem;
  padding-bottom: 1.6rem;
  width: 100%;
  /* @media screen and (min-width: 600px) {
    width: 70%;
  }

  @media screen and (min-width: 1200px) {
    width: 50%;
  } */
`;

const SectionTitle = ({ title, textAlign }) => {
  const styles = {
    textAlign: textAlign || 'left',
  };

  return (
    <Title title={title} style={styles}>
      {title}
    </Title>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  // style: PropTypes.object,
};

export default SectionTitle;
