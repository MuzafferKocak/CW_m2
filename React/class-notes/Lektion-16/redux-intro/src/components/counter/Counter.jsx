import { useSelector, useDispatch } from "react-redux";

import "./Counter.css";
import {
  arttir,
  arttirma,
  azalt,
  azaltma,
  sil,
  silme,
} from "../store/counterReducer";

const Counter = () => {
  //? Global State'den veri okimak icin useSelector() hooku kullanilir
  // const count = useSelector((state) => state.count);
  // const count = useSelector((state) => state.counter.count);
  const {count} = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  console.log(count);

  return (
    <div className="app">
      <h2 className="counter-header">Counter With Redux</h2>
      <h1>counter:{count}</h1>
      <div>
        <button
          className="counter-button positive"
          onClick={() => dispatch(arttirma())}
          // onClick={() => dispatch({ type: arttir })}
          // onClick={() => dispatch({ type: "ARTTIR" })}
        >
          increase
        </button>
        <button
          className="counter-button zero"
          onClick={() => dispatch(silme())}
          // onClick={() => dispatch({ type: sil }}
          // onClick={() => dispatch({ type: "SIL" })}
        >
          reset
        </button>
        <button
          className="counter-button negative"
          onClick={() => dispatch(azaltma())}
          // onClick={() => dispatch({ type: azalt })}
          // onClick={() => dispatch({ type: "AZALT" })}
        >
          decrease
        </button>
      </div>
    </div>
  );
};

export default Counter;
