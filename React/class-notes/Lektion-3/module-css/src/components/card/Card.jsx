import Button from "../button/Button";
import "./Card.css";

const Card = ({ lang, img }) => {
  return (
    <div>
      <div className="wrapper">
        <h1>{lang} </h1>
      </div>
      <img className="images" src={img} alt={lang} />
      <Button />
    </div>
  );
};
export default Card;