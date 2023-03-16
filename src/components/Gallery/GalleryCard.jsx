import styled from 'styled-components';
import { useState } from 'react';

const Card = styled.div``;
const CardImg = styled.img``;
const CardTitle = styled.h2``;
const CardContent = styled.p``;
const CardContentLabel = styled.span``;

const GalleryCard = ({ car }) => {
  const [readMore, setReadMore] = useState('');
  const handleClick = (e) => {
    setReadMore(e.target.value);
    console.log(e.target.value);
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
        <p style={{ cursor: 'pointer', color: 'white' }} onClick={handleClick}>
          Read More
        </p>
      </CardContent>
      <CardContent>
        <CardContentLabel>Notes:</CardContentLabel> {car.description}
      </CardContent>
    </Card>
  );
};

export default GalleryCard;
