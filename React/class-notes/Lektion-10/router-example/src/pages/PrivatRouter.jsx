import React from "react";
import { Outlet, Navigate } from "react-router-dom";


const PrivatRouter = () => {

  //? Context, Redux, Mobx, Zustang (global State managment, Local, session)
  const isLogged = true;

  return <div>{isLogged ? <Outlet /> : <Navigate to={"/login"} />}</div>;
};

export default PrivatRouter;



//? useNavigate (Hook) ile Navigate(Component) aslında aynı işi yapar. Yani yönlendirme işlemini gerçekleştirir.
//? Aralarindaki fark kullanım yerleridir. Hook olan bir event ya da useEefect hook'u nun içerisi gibi yerlerde kullanılır. (Fonkisyionların kullanıldığı yerler)

//? Diğeri ise bir component olduğu için JSX içeriside yönlendirme yapmak gerektiği durumlarda kullanılır.

//? Link ise kullanıcıdan bir girdi beklenildiği durumlarda kullanılaiblir.
