import styled from 'styled-components';
import Badge1 from '../assets/images/trusted-dealer.svg';
import Badge2 from '../assets/images/satisfaction-g.svg';
import Badge3 from '../assets/images/expert.svg';

const Container = styled.div`
  min-height: 50vh;
  /* width: 100%; */
  background-color: #b8cad2;
  padding: 72px 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    padding: 60px 24px;
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
    /* justify-content: flex-start; */
    /* align-items: flex-start; */
    width: 100%;
  }
`;

const BadgeWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 769px) {
    flex-direction: column;
    gap: 2.4rem;
    justify-content: center;
    align-items: center;
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
  max-width: 20rem;
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
  margin: 36px 0;
  border-radius: 100%;
  @media screen and (max-width: 769px) {
    width: 100%;
  }
`;

const SmallLine = styled.div`
  width: 70%;
  height: 4px;
  background-color: #011638;
  margin: 36px 0;
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            tempore nisi omnis mollitia. Ratione voluptatum corrupti iusto
            veniam sequi sapiente dignissimos accusantium sed fugiat facilis.
          </p> */}
        </BadgeWrapper>
        <BadgeWrapper>
          <BadgeImg src={Badge2} alt='#' />
          {/* <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            reprehenderit. Laboriosam ea rem explicabo consectetur.
          </p> */}
        </BadgeWrapper>
        <BadgeWrapper>
          <BadgeImg src={Badge3} alt='#' />
          {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            delectus cupiditate vero, provident reiciendis porro maxime quae.
            Cupiditate, aliquam hic.
          </p> */}
        </BadgeWrapper>
      </BadgeContainer>
      <SmallLine></SmallLine>
    </Container>
  );
};

export default HomeBadges;
