import PageTitle from '../PageTitle';
import MainLayout from '../Layout/MainLayout';
import styled from 'styled-components';
import GalleryCard from './GalleryCard';
import { useState } from 'react';
import galleryList from './GalleryList';
const Container = styled.div`
  display: grid;
  /* justify-content: center; */
  gap: 32px;
  grid-template-columns: repeat(4, 1fr);
  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 550px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const GalleryPage = () => {
  const [cars, setCars] = useState(galleryList);
  return (
    <MainLayout>
      <PageTitle text='View Our Work' />
      <Container>
        {cars.map((car) => (
          <GalleryCard key={car.id} car={car} />
        ))}
      </Container>
    </MainLayout>
  );
};

export default GalleryPage;
