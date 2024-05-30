import "./card.css";

interface CardProps {
  title: string;
  image: string;
  price: number;
}

const Card = ({ price, image, title }: CardProps) => {
  return (
    <div className="card">
      <img src={image} alt="" />
      <h2>{title}</h2>
      <p>
        <b>Valor:</b>
        {price}
      </p>
    </div>
  );
};

export default Card;
