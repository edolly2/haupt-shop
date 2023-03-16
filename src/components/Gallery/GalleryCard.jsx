import styled from 'styled-components';
import { useState } from 'react';

const Card = styled.div``;
const CardImg = styled.img``;
const CardTitle = styled.h2``;
const CardContent = styled.p``;
const CardContentLabel = styled.span``;

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
        <p style={{ cursor: 'pointer', color: 'white' }} onClick={handleClick}>
          {readMore ? 'Hide Details' : 'Show Details'}
        </p>
      </CardContent>
    </Card>
  );
};

export default GalleryCard;
