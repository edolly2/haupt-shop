// const prevButton = document.querySelector('.prevBtn');
// const nextButton = document.querySelector('.nextBtn');
// const carousel = document.querySelector('#carousel');

// let scrollAmount = 0;
// const itemWidth = carousel
//   .querySelector('.carouselItem')
//   .getBoundingClientRect().width;
// const itemsCount = carousel.querySelectorAll('.carouselItem').length;
// const totalWidth = itemWidth * itemsCount;

// window.addEventListener('resize', () => {
//   const itemWidth = carousel
//     .querySelector('.carousel-item')
//     .getBoundingClientRect().width;
//   const itemsCount = carousel.querySelectorAll('.carousel-item').length;
//   const totalWidth = itemWidth * itemsCount;
//   scrollAmount = 0;
//   carousel.scrollTo({
//     left: scrollAmount,
//     behavior: 'instant',
//   });
// });

// const Carousel = () => {
//   return (
//     <CarouselContainer>
//       <CarouselCarousel id='carousel'>
//         <CarouselItem className='carouselItem'>
//           <CarouselImg src={Dodge} alt='X' />
//         </CarouselItem>
//         <CarouselItem className='carouselItem'>
//           <CarouselImg src={Camaro} alt='X' />
//         </CarouselItem>
//         <CarouselItem className='carouselItem'>
//           <CarouselImg src={Bug} alt='X' />
//         </CarouselItem>
//         <CarouselItem className='carouselItem'>
//           <CarouselImg src={Semi} alt='X' />
//         </CarouselItem>
//         <CarouselItem className='carouselItem'>
//           <CarouselImg src={Redneck} alt='X' />
//         </CarouselItem>
//       </CarouselCarousel>
//       <CarouselPrevBtn
//         id='prevBtn'
//         onClick={() => {
//           scrollAmount -= itemWidth;
//           if (scrollAmount < 0) {
//             scrollAmount = 0;
//           }
//           carousel.scrollTo({
//             left: scrollAmount,
//             behavior: 'smooth',
//           });
//         }}
//       >
//         Prev
//       </CarouselPrevBtn>
//       <CarouselNextBtn
//         id='nextBtn'
//         onClick={() => {
//           scrollAmount += itemWidth;
//           if (scrollAmount > totalWidth - itemWidth) {
//             scrollAmount = totalWidth - itemWidth;
//           }
//           carousel.scrollTo({
//             left: scrollAmount,
//             behavior: 'smooth',
//           });
//         }}
//       >
//         Next
//       </CarouselNextBtn>
//     </CarouselContainer>
//   );
// };

// export default Carousel;

import { useState } from 'react';
import styled from 'styled-components';
import Bug from '../assets/images/haupt-bug.jpg';
import Camaro from '../assets/images/haupt-camaro.jpg';
import Dodge from '../assets/images/haupt-dodge.jpg';
import Semi from '../assets/images/haupt-semi.jpg';
import Redneck from '../assets/images/haupt-redneck.jpg';
import { GrNext, GrPrevious } from 'react-icons/gr';

const CarouselContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  z-index: 1;
  height: 100%;
  overflow: hidden;
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
`;
const CarouselImg = styled.img`
  /* width: 100%; */
  min-width: 50vw;
  /* min-width: 100%; */
  max-width: 50vw;
  /* height: 100%; */
  height: auto;
  max-height: 50vh;
  object-fit: cover;
`;

const CarouselPrevBtn = styled.button`
  position: absolute;
  /* top: 50%; */
  /* transform: translateY(-50%); */
  z-index: 1;
  font-size: 2em;
  /* background-color: rgba(255, 255, 255, 0.5); */
  background-color: transparent;
  border: none;
  cursor: pointer;
  left: 5%;
  bottom: 0;
`;

const CarouselNextBtn = styled.button`
  position: absolute;
  /* top: 50%; */
  /* transform: translateY(-50%); */
  z-index: 1;
  font-size: 2em;
  /* background-color: rgba(255, 255, 255, 0.5); */
  background-color: transparent;
  border: none;
  cursor: pointer;
  right: 5%;
  bottom: 0;
`;

const Carousel = ({ images }) => {
  images = [Bug, Dodge, Camaro, Semi, Redneck];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
      <CarouselCarousel>
        <CarouselItem>
          <CarouselImg src={images[currentImageIndex]} alt='carousel image' />
        </CarouselItem>
      </CarouselCarousel>
      <CarouselPrevBtn onClick={prevImage}>
        <GrPrevious />
      </CarouselPrevBtn>
      <CarouselNextBtn onClick={nextImage}>
        <GrNext />
      </CarouselNextBtn>
    </CarouselContainer>
  );
};

export default Carousel;
