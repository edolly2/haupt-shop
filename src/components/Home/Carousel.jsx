import { useState, useRef } from 'react';
import styled from 'styled-components';
import Bug from '../../assets/images/haupt-bug-2.jpg';
import Camaro from '../../assets/images/haupt-camaro.jpg';
import Dodge from '../../assets/images/haupt-dodge.jpg';
import Semi from '../../assets/images/haupt-semi.jpg';
import Redneck from '../../assets/images/haupt-redneck.jpg';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { NavLink } from 'react-router-dom';

const CarouselContainer = styled.div`
  position: relative;
  display: flex;
  padding: 72px 32px;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(33, 33, 33, 0.9);
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  width: 90%;
  /* max-width: 1200px; */
  /* margin: 0 auto; */
  z-index: 1;
  height: 100%;
  /* overflow: hidden; */
  gap: 48px;
  margin: 3% 0;
  @media screen and (max-width: 768px) {
    padding: 64px 24px;
  }
`;
const CarouselCarousel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* overflow: hidden; */
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
`;
const CarouselItem = styled.div`
  flex: 0 0 auto;
  width: 100%;
  /* height: calc(100vh - 108px); */
  /* justify-content: center; */
  /* align-items: center; */
  scroll-snap-align: start;
  background-color: white;
  transform: rotate(6deg);
`;
const CarouselImg = styled.img`
  /* width: 50vw; */
  /* max-width: 864.5px; */
  /* width: 100vw; */
  /* min-width: 100%; */
  /* max-width: 60vw; */
  /* height: 100%; */
  /* height: auto; */
  /* height: 70vh; */
  /* max-height: 70vh; */
  object-fit: cover;
  transform: rotate(-6deg);
  position: relative;
  z-index: 1;
  width: 100vw;
  @media screen and (min-width: 768px) {
    /* min-width: 472.97px; */
    /* height: auto; */
    /* height: 237px; */
  }
`;

const CarouselBtnContainer = styled.div`
  /* width: 100%; */
  display: flex;
  justify-content: center;
  align-items: center;
  /* color: white; */
  /* gap: 50rem; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const CarouselBtns = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  margin-top: 2rem;
`;

const CarouselPrevBtn = styled.button`
  /* position: absolute; */
  /* top: 50%; */
  /* transform: translateY(-50%); */
  z-index: 1;
  /* font-size: 2em; */
  /* background-color: rgba(255, 255, 255, 0.5); */
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  /* left: 5%; */
  /* bottom: 0; */
`;

const CarouselNextBtn = styled.button`
  /* position: absolute; */
  /* top: 50%; */
  /* transform: translateY(-50%); */
  z-index: 1;
  /* font-size: 48px; */
  /* background-color: rgba(255, 255, 255, 0.5); */
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  /* right: 5%; */
  /* bottom: 0; */
`;

const ImgOverlay = styled.div`
  /* background-color: rgba(33, 33, 33, 0.5);
  backdrop-filter: blur(10px);
  transform: rotate(-6deg);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  display: none;
  &:hover {
    cursor: pointer;
  } */
  position: absolute;
  /* top: 0; */
  /* bottom: 0; */
  /* height: 70vh; */
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 2;
  justify-content: center;
  align-items: center;
  transform: rotate(-6deg);
  h2 {
    text-align: center;
    display: none;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(10px);
    cursor: pointer;
    h2 {
      display: block;
    }
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;

const CarouselSwipe = styled.div`
  color: black;
  display: none;
  position: absolute;
  bottom: 5%;
  font-size: 24px;
  /* left: 50%; */
  /* z-index: 30; */
  align-items: center;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const Carousel = ({ images }) => {
  images = [/*Bug*/ Dodge, Camaro /*Semi*/, Redneck];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const touchStartX = useRef(null);

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchMove = (event) => {
    if (touchStartX.current === null) {
      return;
    }

    const touchEndX = event.touches[0].clientX;
    const touchDiff = touchStartX.current - touchEndX;

    if (touchDiff > 0 && currentImageIndex < 2) {
      setCurrentImageIndex(currentImageIndex + 1);
    } else if (touchDiff < 0 && currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
    touchStartX.current = null;
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  const handleMouseLeave = () => {
    setIsHovering(true);
  };
  const prevImage = () => {
    const index =
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(index);
  };

  const nextImage = () => {
    const index =
      currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(index);
  };

  return (
    <CarouselContainer className='carousel'>
      <CarouselBtnContainer>
        <CarouselBtns>
          <CarouselPrevBtn onClick={prevImage}>
            <GrPrevious className='carousel-btns' />
            {/* <span style={{ fontSize: '18px' }}>PREV</span> */}
          </CarouselPrevBtn>
        </CarouselBtns>
      </CarouselBtnContainer>
      <CarouselCarousel
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <CarouselItem>
          <NavLink className='link' to='/haupt-shop/gallery'>
            <ImgOverlay
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{ display: isHovering ? 'flex' : 'none' }}
            >
              <h2>View Gallery</h2>
            </ImgOverlay>
          </NavLink>
          <CarouselImg
            src={images[currentImageIndex]}
            alt='carousel image'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            // style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
          />
          {/* <NavLink to='/haupt-shop/gallery'>
            <h3>view g</h3>
          </NavLink> */}
        </CarouselItem>
        <CarouselSwipe>
          <GrPrevious /> <span style={{ margin: '0 16px' }}>Swipe</span>{' '}
          <GrNext />
        </CarouselSwipe>
      </CarouselCarousel>
      <CarouselBtnContainer>
        <CarouselBtns>
          <CarouselNextBtn onClick={nextImage}>
            {/* <span style={{ fontSize: '18px' }}>NEXT</span>  */}
            <GrNext className='carousel-btns' />
          </CarouselNextBtn>
        </CarouselBtns>
        {/* <CarouselSwipe onSwipedLeft={nextImage} onSwipedRight={prevImage} /> */}
      </CarouselBtnContainer>
    </CarouselContainer>
  );
};

export default Carousel;
