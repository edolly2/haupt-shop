import styled from 'styled-components';
import { BsTelephone } from 'react-icons/bs';

const Card = styled.div`
  color: #b8cad2;
  max-width: 40rem;
  margin: 48px 0;
`;

const CardImg = styled.img`
  /* margin-bottom: 24px; */
`;

const CardTitle = styled.h2`
  color: #005cf0;
`;

const CardContent = styled.p``;

const ContentLabel = styled.span`
  color: #005cf0;
`;

const InventoryBtn = styled.button`
  padding: 0.4rem;
  border-radius: 0.4rem;
  border: 2px solid #005cf0;
  color: #005cf0;
  background-color: transparent;
  width: 15rem;
  margin-top: 24px;
  &:hover {
    cursor: pointer;
    background-color: #005cf0;
    color: #b8cad2;
    transform: scale(1.1);
  }
`;

const InventoryCard = ({ car }) => {
  return (
    <Card>
      <CardImg src={car.image} alt={`${car.year} ${car.make} ${car.model}`} />
      <CardTitle>
        {car.make} {car.model}
      </CardTitle>
      <CardContent>
        <ContentLabel>Year:</ContentLabel> {car.year}
      </CardContent>
      <CardContent>
        <ContentLabel>Mileage:</ContentLabel> {car.mileage}
      </CardContent>
      <CardContent>
        <ContentLabel>Price:</ContentLabel> {car.price}
      </CardContent>
      <CardContent>
        <ContentLabel>Description:</ContentLabel> {car.description}
      </CardContent>
      <CardContent>
        <InventoryBtn>
          <BsTelephone /> {car.contact}
        </InventoryBtn>
      </CardContent>
    </Card>
  );
};

export default InventoryCard;
