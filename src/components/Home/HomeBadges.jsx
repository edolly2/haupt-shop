import styled from 'styled-components';
import Badge1 from '../../assets/images/trusted-dealer.svg';
import Badge2 from '../../assets/images/satisfaction-g.svg';
import Badge3 from '../../assets/images/expert.svg';

const Container = styled.div`
  min-height: 50vh;
  width: 100%;
  background-color: #b8cad2;
  padding: 72px 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 90%;
  /* margin: 36px auto; */
  border-radius: 0.4rem;
  /* position: relative; */
  /* z-index: 10; */
  @media screen and (max-width: 768px) {
    padding: 64px 24px;
  }
`;

const BadgeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4.8rem;
  @media screen and (max-width: 769px) {
    flex-direction: column;
    gap: 2.4rem;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
  }
`;

const BadgeWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 769px) {
    flex-direction: column;
    gap: 2.4rem;
    justify-content: center;
    /* align-items: center; */
    /* justify-content: flex-start; */
    align-items: flex-start;
    width: 100%;
  }
`;

const BadgeTitle = styled.h2`
  margin: 0 0 2.4rem 0;
`;

const BadgeImg = styled.img`
  /* max-width: 30rem; */
  /* width: 25vw; */
  width: 25vw;
  max-width: 16rem;
  min-width: 13rem;
  height: auto;
  @media screen and (max-width: 769px) {
    max-width: 20rem;
    /* width: 10vw; */
    min-width: 8rem;
  }
`;

const Line = styled.div`
  width: 70%;
  height: 4px;
  background-color: #011638;
  margin: 32px 0;
  border-radius: 100%;
  @media screen and (max-width: 769px) {
    width: 100%;
  }
`;

const SmallLine = styled.div`
  width: 70%;
  height: 4px;
  background-color: #011638;
  margin: 32px 0;
  border-radius: 100%;
  width: 50%;
  @media screen and (max-width: 769px) {
    width: 100%;
  }
`;

const HomeBadges = () => {
  return (
    <Container>
      <BadgeTitle>Why Choose Us?</BadgeTitle>
      <Line></Line>
      <BadgeContainer>
        <BadgeWrapper>
          <BadgeImg src={Badge1} alt='#' />
          {/* <p>
            The Haupt Shop will never sell you a car that does not meet your needs and standards. We believe in offering the fairest price possible and strive to have you leaving the shop with the confidence that you deserve.
          </p> */}
        </BadgeWrapper>
        <BadgeWrapper>
          <BadgeImg src={Badge2} alt='#' />
          {/* <p>
            Here at the Haupt Shop, we take our customer care seriously. We love to build lasting relationships with our customers and treat every interaction with the professionalism, transparency, and with the quality service necessary to earn your trust.
          </p> */}
        </BadgeWrapper>
        <BadgeWrapper>
          <BadgeImg src={Badge3} alt='#' />
          {/* <p>
            Our highly skilled technicians will effectively  analyze, troubleshoot, and diagnose any vehicle issues that may arise. Safely getting you back on the road as quickly as possible, all at an honest price.
          </p> */}
        </BadgeWrapper>
      </BadgeContainer>
      <SmallLine></SmallLine>
    </Container>
  );
};

export default HomeBadges;
