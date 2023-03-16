import styled from 'styled-components';
import { BsTelephone } from 'react-icons/bs';

const Card = styled.div`
  color: #b8cad2;
  max-width: 25rem;
  /* width: 30rem; */
  width: auto;
  margin: 48px 0;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 8px;
  background-color: rgba(96, 96, 96, 0.1);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(33, 33, 33, 0.9);
  @media screen and (max-width: 768px) {
    padding: 16px;
  }
`;

const CardImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-bottom: 24px;
  @media screen and (max-width: 768px) {
    padding-bottom: 16px;
  }
`;

const CardImg = styled.img`
  /* margin-bottom: 24px; */
  /* margin: 0 auto; */
  /* text-align: center; */
  /* display: flex;
  justify-content: center; */
  /* width: 80%; */
  padding-bottom: 24px;
  @media screen and (max-width: 768px) {
    padding-bottom: 16px;
  }
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
  justify-self: center;
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
      {/* <CardImgWrapper> */}
      <CardImg src={car.image} alt={`${car.year} ${car.make} ${car.model}`} />
      {/* </CardImgWrapper> */}
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
      {/* <CardContent> */}
      {/* <ContentLabel>Description:</ContentLabel> {car.description} */}
      {/* </CardContent> */}
      <CardContent style={{ display: 'flex', justifyContent: 'center' }}>
        <InventoryBtn>
          <BsTelephone /> {car.contact}
        </InventoryBtn>
      </CardContent>
    </Card>
  );
};

export default InventoryCard;
