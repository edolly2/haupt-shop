import PageTitle from '../PageTitle';
import MainLayout from '../../layout/MainLayout';
import inventoryList from './InventoryList';
import InventoryCard from './InventoryCard';
import { useState } from 'react';

const InventoryPage = () => {
  const [cars, setCars] = useState(inventoryList);

  return (
    <MainLayout>
      <PageTitle text='Our Inventory' />

      <div>
        <div>
          {cars.map((car) => (
            <InventoryCard key={car.id} car={car} />
          ))}
        </div>
      </div>
      {/* Filter Option */}
      {/* Sort Option */}
      {/* Pagnation */}
    </MainLayout>
  );
};

export default InventoryPage;
