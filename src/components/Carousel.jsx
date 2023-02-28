import { useState } from 'react';
import styled from 'styled-components';
import Bug from '../assets/images/haupt-bug.jpg';
import Camaro from '../assets/images/haupt-camaro.jpg';
import Dodge from '../assets/images/haupt-dodge.jpg';
import Semi from '../assets/images/haupt-semi.jpg';
import Redneck from '../assets/images/haupt-redneck.jpg';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { NavLink } from 'react-router-dom';

const CarouselContainer = styled.div`
  position: relative;
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  z-index: 1;
  height: 100%;
  /* overflow: hidden; */
  gap: 36px;
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
  background-color: black;
  transform: rotate(6deg);
`;
const CarouselImg = styled.img`
  width: 50vw;
  /* min-width: 70vw; */
  /* min-width: 100%; */
  /* max-width: 60vw; */
  /* height: 100%; */
  /* height: auto; */
  height: 70vh;
  /* max-height: 70vh; */
  object-fit: cover;
  transform: rotate(-6deg);
  position: relative;
  z-index: 1;
`;

const CarouselBtnContainer = styled.div`
  /* width: 100%; */
  display: flex;
  justify-content: center;
  align-items: center;
  /* gap: 50rem; */
`;

const CarouselBtns = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

const CarouselPrevBtn = styled.button`
  /* position: absolute; */
  /* top: 50%; */
  /* transform: translateY(-50%); */
  z-index: 1;
  font-size: 2em;
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
  font-size: 2em;
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
  height: 70vh;
  left: 0;
  right: 0;
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
  }
`;

const Carousel = ({ images }) => {
  images = [Bug, Dodge, Camaro, Semi, Redneck];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

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
            <GrPrevious /> <span style={{ fontSize: '18px' }}>PREV</span>
          </CarouselPrevBtn>
        </CarouselBtns>
      </CarouselBtnContainer>
      <CarouselCarousel>
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
          />
          {/* <NavLink to='/haupt-shop/gallery'>
            <h3>view g</h3>
          </NavLink> */}
        </CarouselItem>
      </CarouselCarousel>
      <CarouselBtnContainer>
        <CarouselBtns>
          <CarouselNextBtn onClick={nextImage}>
            <span style={{ fontSize: '18px' }}>NEXT</span> <GrNext />
          </CarouselNextBtn>
        </CarouselBtns>
      </CarouselBtnContainer>
    </CarouselContainer>
  );
};

export default Carousel;
