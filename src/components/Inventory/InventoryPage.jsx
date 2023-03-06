import PageTitle from '../PageTitle';
import MainLayout from '../../layout/MainLayout';
import inventoryList from './InventoryList';
import InventoryCard from './InventoryCard';
import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  /* display: flex; */
  /* display: e; */
  /* grid-template-columns: repeat(4, 1fr); */
  /* grid-template-rows: repeat(4, 1fr); */
`;

const CardWrapper = styled.div`
  /* grid-column: 2 / 3; */
`;

const InventoryPage = () => {
  const [cars, setCars] = useState(inventoryList);

  return (
    <MainLayout>
      <PageTitle text='Our Inventory' />

      <Container>
        <CardWrapper>
          {cars.map((car) => (
            <InventoryCard key={car.id} car={car} />
          ))}
        </CardWrapper>
      </Container>
      {/* Filter Option */}
      {/* Sort Option */}
      {/* Pagnation */}
    </MainLayout>
  );
};

export default InventoryPage;
