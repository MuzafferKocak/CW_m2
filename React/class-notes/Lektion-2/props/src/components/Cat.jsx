//* React importu artık zorunlu değil
// import React from "react";

//? named exportun importu, süslü içinde ve aynı isimle import edilmeli
import { Name } from "./Name";

//? componentler function dec. veya arrow func. ile oluşturulabilir
const Cat = ({ name, img, color = "grey", isBlueEyed }) => {
  //? destr.
  //   const { name, img, color } = props;
  return (
    //* JSX ifadeleri birden fazla ise mutlaka bir parent ile sarmalanmalıdır
    <div>
      <Name name={name} />
      <p>Blue eyed? : {isBlueEyed ? "Yes" : "No"}</p>
      <img src={img} alt="cat-img" height="300px" />
      <p style={{ backgroundColor: color }}>Color: {color} </p>
      <hr />
    </div>
  );
};

export default Cat;

// const Cat = (props) => {
//   return (
//     //* JSX ifadeleri birden fazla ise mutlaka bir parent ile sarmalanmalıdır
//     <div>
//       <Name />
//       <img src={props.img} alt="cat-img" height="300px" />
//       <p style={{ backgroundColor: props.color }}>Color: {props.color} </p>
//       <hr />
//     </div>
//   );
// };

// export default Cat;

