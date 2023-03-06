import styled from 'styled-components';

const Card = styled.div`
  color: #b8cad2;
  max-width: 40rem;
  margin: 48px 0;
`;

const CardImg = styled.img``;

const CardTitle = styled.h2`
  color: #005cf0;
`;

const CardContent = styled.p``;

const ContentLabel = styled.span`
  color: #005cf0;
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
        <button>{car.contact}</button>
      </CardContent>
    </Card>
  );
};

export default InventoryCard;
