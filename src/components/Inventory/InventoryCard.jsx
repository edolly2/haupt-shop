const InventoryCard = ({ car }) => {
  return (
    <div>
      <img src={car.image} alt={`${car.year} ${car.make} ${car.model}`} />
      <h2>
        {car.make} {car.model}
      </h2>
      <p>{car.year}</p>
      <p>{car.mileage}</p>
      <p>{car.price}</p>
      <p>{car.description}</p>
      <p>{car.contact}</p>
    </div>
  );
};

export default InventoryCard;
