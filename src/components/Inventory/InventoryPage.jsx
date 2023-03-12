import PageTitle from '../PageTitle';
import MainLayout from '../../Layout/MainLayout';
import inventoryList from './InventoryList';
import InventoryCard from './InventoryCard';
import { useState } from 'react';
import styled from 'styled-components';

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

const InventoryPage = () => {
  const [cars, setCars] = useState(inventoryList);

  return (
    <MainLayout>
      <PageTitle text='Our Inventory' />

      <Container>
        {cars.map((car) => (
          <InventoryCard key={car.id} car={car} />
        ))}
      </Container>
      {/* Filter Option */}
      {/* Sort Option */}
      {/* Pagnation */}
    </MainLayout>
  );
};

export default InventoryPage;
