import styled from 'styled-components';
import HeroBack from '../../assets/images/charger.jpg';

const Container = styled.div`
  /* min-width: 100vw; */
  min-height: calc(100vh - 159px);
  max-height: calc(100vh - 159px);
  margin-top: -1px;
  background-image: url(${HeroBack});
  background-repeat: no-repeat;
  /* background-position: left; */
  background-size: cover;
  background-position: center;
  padding: 36px;

  display: flex;
  justify-content: center;
  /* align-items: center; */
  background-color: rgb(33, 33, 33);
  @media screen and (max-width: 920px) {
    min-height: calc(100vh - 132px);
    max-height: calc(100vh - 132px);
    /* background-size: contain; */
    background-position: center;
    background-size: cover;
  }
  @media screen and (max-width: 600px) {
    padding: 16px;
  }
  /* @media screen and (max-width: 675px) {
    background-size: 60%;
  }


  @media screen and (max-width: 550px) {
    background-size: 65%;
  } */
`;

const HeroContentContainer = styled.div`
  /* max-width: 35%; */
  margin-top: 10.4rem;
  /* margin-top: 20%; */
  background-color: rgba(255, 255, 255, 0.01);
  backdrop-filter: blur(10px);
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);

  /* background-color: transparent; */
  color: #b8cad2;
  width: 80%;
  /* color: transparent; */
  padding: 0 16px;
  word-spacing: 3px;
  /* white-space: nowrap; */
  border-radius: 0.4rem;
  /* font-size: 1.8rem; */
  text-align: center;
  /* height: 20vh; */
  max-height: 25vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* margin: auto; */
  /* @media screen and (); */
  @media screen and (max-width: 800px) {
    width: 100%;

    /* max-width: 75%; */
    /* padding: 16px; */
    /* text-align: center; */
    /* margin: auto; */
    /* margin-top: 2.4rem; */
  }
`;

const HeroContentText = styled.h1`
  /* margin-top: 4.8rem; */
  /* font-weight: 300; */
  font-size: calc(30px + (42 - 30) * ((100vw - 360px) / (1500 - 360)));

  text-shadow: -4px -4px 0 #011638, 4px -4px 0 #011638, -4px 4px 0 #011638,
    4px 4px 0 #011638, 0 -4px 0 #011638, -4px 0 0 #011638, 4px 0 0 #011638,
    0 4px 0 #011638, 1px -4px 0 #011638, -4px 1px 0 #011638, 4px 1px 0 #011638,
    1px 4px 0 #011638, -1px -4px 0 #011638, -4px -1px 0 #011638,
    4px -1px 0 #011638, -1px 4px 0 #011638, -2px -4px 0 #011638,
    -4px -2px 0 #011638, 4px -2px 0 #011638, -2px 4px 0 #011638,
    2px -4px 0 #011638, -4px 2px 0 #011638, 4px 2px 0 #011638, 2px 4px 0 #011638,
    -3px -4px 0 #011638, -4px -3px 0 #011638, 4px -3px 0 #011638,
    -3px 4px 0 #011638, 3px -4px 0 #011638, -4px 3px 0 #011638,
    4px 3px 0 #011638, 3px 4px 0 #011638;
`;

const HeroContentSubText = styled.h2`
  color: #011638;
  /* text-shadow: -4px -4px 0 #b8cad2, 4px -4px 0 #b8cad2, -4px 4px 0 #b8cad2,
    4px 4px 0 #b8cad2, 0 -4px 0 #b8cad2, -4px 0 0 #b8cad2, 4px 0 0 #b8cad2,
    0 4px 0 #b8cad2, 1px -4px 0 #b8cad2, -4px 1px 0 #b8cad2, 4px 1px 0 #b8cad2,
    1px 4px 0 #b8cad2, -1px -4px 0 #b8cad2, -4px -1px 0 #b8cad2,
    4px -1px 0 #b8cad2, -1px 4px 0 #b8cad2, -2px -4px 0 #b8cad2,
    -4px -2px 0 #b8cad2, 4px -2px 0 #b8cad2, -2px 4px 0 #b8cad2,
    2px -4px 0 #b8cad2, -4px 2px 0 #b8cad2, 4px 2px 0 #b8cad2, 2px 4px 0 #b8cad2,
    -3px -4px 0 #b8cad2, -4px -3px 0 #b8cad2, 4px -3px 0 #b8cad2,
    -3px 4px 0 #b8cad2, 3px -4px 0 #b8cad2, -4px 3px 0 #b8cad2,
    4px 3px 0 #b8cad2, 3px 4px 0 #b8cad2; */
`;

const Hero = () => {
  return (
    <Container>
      <HeroContentContainer>
        <HeroContentText>
          {/* The Haupt Shop */}
          Putting You On the Road to Reliability
        </HeroContentText>
        {/* <HeroContentSubText>We Are Driven to Serve You</HeroContentSubText> */}
        {/* <HeroContentText>Locally Operated, Globally Excelled</HeroContentText> */}
      </HeroContentContainer>
    </Container>
  );
};

export default Hero;
