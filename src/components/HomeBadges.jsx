import styled from 'styled-components';
import Badge1 from '../assets/images/badge-1.png';
import Badge2 from '../assets/images/badge-2.png';
import Badge3 from '../assets/images/badge-3.png';

const Container = styled.div`
  min-height: 50vh;
  width: 100%;
  background-color: #b8cad2;
  padding: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BadgeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;
`;

const BadgeImg = styled.img`
  max-width: 30rem;
`;

const HomeBadges = () => {
  return (
    <Container>
      <BadgeWrapper>
        <BadgeImg src={Badge1} alt='#' />
        <BadgeImg src={Badge2} alt='#' />
        <BadgeImg src={Badge3} alt='#' />
      </BadgeWrapper>
    </Container>
  );
};

export default HomeBadges;
