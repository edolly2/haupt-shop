import styled from 'styled-components';
import HeroBack from '../assets/images/haupt-background.png';

const Container = styled.div`
  min-width: 100vw;
  min-height: 60vh;
  max-width: 100vw;
  max-height: 60vh;
  margin-top: -1px;
  background-image: url(${HeroBack});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: flex-end;
`;

const HeroContent = styled.div`
  max-width: 50%;
  margin-top: 2.4rem;
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
