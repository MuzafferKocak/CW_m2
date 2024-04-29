import { useSelector, useDispatch } from "react-redux";

import "./Counter.css";

const Counter = () => {
  //? Global State'den veri okimak icin useSelector() hooku kullanilir
  const count = useSelector((state) => state.count);

  const dispatch = useDispatch();

  console.log(count);

  return (
    <div className="app">
      <h2 className="counter-header">Counter With Redux</h2>
      <h1>counter:{count}</h1>
      <div>
        <button
          className="counter-button positive"
          onClick={() => dispatch({ type: "ARTTIR" })}
        >
          increase
        </button>
        <button className="counter-button zero">reset</button>
        <button className="counter-button negative">decrease</button>
      </div>
    </div>
  );
};

export default Counter;
