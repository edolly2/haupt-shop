import styled from 'styled-components';
import { useState } from 'react';

const Card = styled.div`
  color: #b8cad2;
`;
const CardImg = styled.img``;
const CardTitle = styled.h2`
  color: #005cf0;
`;
const CardContent = styled.p``;
const CardContentLabel = styled.span`
  color: #005cf0;
`;

const GalleryCard = ({ car }) => {
  const [readMore, setReadMore] = useState(false);
  const handleClick = () => {
    setReadMore(!readMore);
  };
  return (
    <Card>
      <CardImg src={car.image} alt={`${car.workDone} ${car.onItem}`} />
      <CardTitle>{car.title}</CardTitle>
      <CardContent>
        <CardContentLabel>Project Focus:</CardContentLabel> {car.onItem}
      </CardContent>
      <CardContent>
        <CardContentLabel>Project Type:</CardContentLabel> {car.workDone}
      </CardContent>
      <CardContent>
        {readMore && <CardContent>{car.description}</CardContent>}
        <p
          style={{ cursor: 'pointer', color: '#eaee00', marginTop: '3%' }}
          onClick={handleClick}
        >
          {readMore ? 'Hide Details' : 'Show Details'}
        </p>
      </CardContent>
    </Card>
  );
};

export default GalleryCard;
