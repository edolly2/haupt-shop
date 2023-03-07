import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import styled from 'styled-components';

const Container = styled.div`
  @media screen and (min-width: 769px) {
    display: none;
  }
`;

const CarouselSwipe = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // const handleSwipeLeft = () => {
  //   setCurrentIndex(currentIndex + 1);
  // };

  // const handleSwipeRight = () => {
  //   setCurrentIndex(currentIndex - 1);
  // };
  const handlers = useSwipeable({
    onSwiped: (eventData) => console.log('User Swiped!', eventData),
  });

  return (
    <Container style={props.style}>
      <div
        {...handlers}
        onSwipedLeft={props.onSwipedLeft}
        onSwipedRight={props.onSwipedRight}
      >
        <div>Current index: {currentIndex}</div>
      </div>
    </Container>
  );
};

export default CarouselSwipe;

/*
const Container = styled.div``;

const CarouselSwipe = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipeLeft = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const handleSwipeRight = () => {
    setCurrentIndex(currentIndex - 1);
  };

  return (
    <Container>
      <Swipeable
        onSwipedLeft={handleSwipeLeft}
        onSwipedRight={handleSwipeRight}
      >
        <div>Current index: {currentIndex}</div>
      </Swipeable>
    </Container>
  );
};

export default CarouselSwipe;

*/
