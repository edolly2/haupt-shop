import styled from 'styled-components';
import Badge1 from '../assets/images/badge-1.png';
import Badge2 from '../assets/images/badge-2.png';
import Badge3 from '../assets/images/badge-3.png';

const Container = styled.div`
  min-height: 50vh;
  /* width: 100%; */
  background-color: #b8cad2;
  padding: 4.8rem 2.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const BadgeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4.8rem;
  @media screen and (max-width: 769px) {
    flex-direction: column;
    gap: 2.4rem;
  }
`;

const BadgeTitle = styled.h2`
  margin: 0 0 2.4rem 0;
`;

const BadgeImg = styled.img`
  /* max-width: 30rem; */
  /* width: 25vw; */
  width: 25vw;
  max-width: 20rem;
  min-width: 13rem;
  height: auto;
  @media screen and (max-width: 769px) {
    /* max-width: 13rem; */
  }
`;

const HomeBadges = () => {
  return (
    <Container>
      <BadgeTitle>Badge Section Title</BadgeTitle>
      <BadgeWrapper>
        <BadgeImg src={Badge1} alt='#' />
        <BadgeImg src={Badge2} alt='#' />
        <BadgeImg src={Badge3} alt='#' />
      </BadgeWrapper>
    </Container>
  );
};

export default HomeBadges;
