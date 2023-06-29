import styled from 'styled-components';
import Badge1 from '../../assets/images/trusted-dealer.svg';
import Badge2 from '../../assets/images/satisfaction-g.svg';
import Badge3 from '../../assets/images/expert.svg';
import { useState } from 'react';
import SectionTitle from '../Layout/Section/SectionTitle';

const Container = styled.div`
  min-height: 50vh;
  width: 100%;
  /* background-color: #b8cad2; */
  border-radius: 8px;
  background-color: rgba(96, 96, 96, 0.1);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(33, 33, 33, 0.9);
  margin: 3% 0 0 0;
  padding: 72px 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 90%;
  /* margin: 36px auto; */
  /* position: relative; */
  /* z-index: 10; */
  @media screen and (max-width: 769px) {
    padding: 64px 24px;
    align-items: flex-start;
  }
`;

const BadgeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4.8rem;
  @media screen and (max-width: 769px) {
    flex-direction: column;
    /* gap: 3.2rem; */
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
  }
`;

const BadgeDesktopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 769px) {
    /* display: none; */
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

const BadgeDesktopInfo = styled.div`
  min-height: 150px;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  width: 65%;
  margin: 0 auto;
  @media screen and (max-width: 769px) {
    display: none;
  }
`;

const BadgeWrapper = styled.div`
  display: flex;
  /* gap: 6.2rem; */
  @media screen and (min-width: 769px) {
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 768px) {
    align-items: flex-start;
    /* flex-direction: column; */
    gap: 2.4rem;
    justify-content: center;
    /* align-items: center; */
    /* justify-content: flex-start; */
    width: 100%;
  }
`;

const BadgeImg = styled.img`
  /* max-width: 30rem; */
  /* width: 25vw; */
  width: 25vw;
  max-width: 16rem;
  min-width: 13rem;
  height: auto;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  @media screen and (max-width: 769px) {
    max-width: 20rem;
    /* width: 10vw; */
    min-width: 8rem;
    &:hover {
      cursor: pointer;
      transform: none;
    }
  }
`;

const BadgeInfo = styled.p`
  color: #b8cad2;
  padding: 0 3%;
  @media screen and (min-width: 769px) {
    display: none;
  }
`;

const BadgeInfoDesktop = styled.p`
  color: #b8cad2;
  padding: 3%;
  /* position: relative; */
`;

const Line = styled.div`
  width: 70%;
  height: 4px;
  background-color: #b8cad2;
  /* background-color: #011638; */
  margin: 32px 0;
  border-radius: 100%;
  @media screen and (max-width: 769px) {
    width: 100%;
  }
`;

const HomeBadges = () => {
  const [whichBadgeActive, setWhichBadgeActive] = useState('');
  const badge1Para = `The Haupt Shop will never sell you a car that does not meet your
  needs and standards. We believe in offering the fairest price
  possible and strive to have you leaving the shop with the confidence
  that you deserve.`;
  const badge2Para = `Here at the Haupt Shop, we take our customer care seriously. We love
  to build lasting relationships with our customers and treat every
  interaction with the professionalism, transparency, and with the
  quality service necessary to earn your trust.`;
  const badge3Para =
    /*`Our highly skilled technicians are experienced in working on all
  types of vehicles, from the latest models to classic cars. They
  effectively analyze, troubleshoot, and diagnose any issues
  that may arise. Quickly and safely getting you back on the road.`;*/
    `Our highly skilled technicians are experienced in working on all
  types of vehicles, from the latest models to classic cars. They
  effectively analyze, troubleshoot, and diagnose any vehicle issues
  that may arise. Safely getting you back on the road as quickly as
possible, all at an honest price.`;
  return (
    <Container>
      <SectionTitle title='Why Choose Us?' textAlign='center' />
      <BadgeDesktopWrapper>
        <BadgeContainer>
          <BadgeWrapper>
            <BadgeImg
              src={Badge1}
              alt='#'
              onClick={() => {
                setWhichBadgeActive('Badge1');
              }}
            />
            <BadgeInfo>
              {badge1Para}
              {/* The Haupt Shop will never sell you a car that does not meet your
            needs and standards. We believe in offering the fairest price
            possible and strive to have you leaving the shop with the confidence
            that you deserve. */}
            </BadgeInfo>
          </BadgeWrapper>
          <BadgeWrapper>
            <BadgeImg
              src={Badge2}
              alt='#'
              onClick={() => {
                setWhichBadgeActive('Badge2');
              }}
            />
            <BadgeInfo>
              {badge2Para}
              {/* Here at the Haupt Shop, we take our customer care seriously. We love
            to build lasting relationships with our customers and treat every
            interaction with the professionalism, transparency, and with the
            quality service necessary to earn your trust. */}
            </BadgeInfo>
          </BadgeWrapper>
          <BadgeWrapper>
            <BadgeImg
              src={Badge3}
              alt='#'
              onClick={() => {
                setWhichBadgeActive('Badge3');
              }}
            />
            <BadgeInfo>
              {badge3Para}
              {/* Our highly skilled technicians are experienced in working on all
            types of vehicles, from the latest models to classic cars. They
            effectively analyze, troubleshoot, and diagnose any vehicle issues
            that may arise. Safely getting you back on the road as quickly as
          possible, all at an honest price. */}
            </BadgeInfo>
          </BadgeWrapper>
        </BadgeContainer>
        <BadgeDesktopInfo>
          {(() => {
            if (whichBadgeActive === 'Badge1') {
              return <BadgeInfoDesktop>{badge1Para}</BadgeInfoDesktop>;
            } else if (whichBadgeActive === 'Badge2') {
              return <BadgeInfoDesktop>{badge2Para}</BadgeInfoDesktop>;
            } else if (whichBadgeActive === 'Badge3') {
              return <BadgeInfoDesktop>{badge3Para}</BadgeInfoDesktop>;
            } else {
              return null;
            }
          })()}
        </BadgeDesktopInfo>
      </BadgeDesktopWrapper>
    </Container>
  );
};

export default HomeBadges;
