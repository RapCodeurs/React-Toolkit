import "./App.css";
import Counter from "./Counter";
import { useEffect } from "react";
import { randomColor } from "./redux/colorSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const color = useSelector((state) => state.reducer.color.value);
  const dispatch = useDispatch();

  useEffect(() => {
    document.querySelector("body").style.backgroundColor = color;
  }, [color]);

  return (
    <>
      <button
        onClick={() => {
          dispatch(randomColor());
        }}
      >
        Change Background Color
      </button>
      <Counter />;
    </>
  );
}

export default App;
