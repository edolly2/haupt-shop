import styled from 'styled-components';
import HeroBack from '../../assets/images/haupt-background.png';

const Container = styled.div`
  /* min-width: 100vw; */
  min-height: 60vh;
  max-height: 60vh;
  margin-top: -1px;
  background-image: url(${HeroBack});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: flex-end;
  @media screen and (max-width: 768px) {
    min-height: 25vh;
  }
`;

const HeroContent = styled.div`
  max-width: 50%;
  margin-top: 2.4rem;
  background-color: transparent;
  color: #b8cad2;
  /* @media screen and (); */
`;

const Hero = () => {
  return (
    <Container>
      <HeroContent>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
        dignissimos voluptate accusantium, omnis eaque incidunt tempore
        laboriosam voluptas ullam similique hic nesciunt, officia eius. Dolor
        cumque aut labore sequi veniam.
      </HeroContent>
    </Container>
  );
};

export default Hero;
