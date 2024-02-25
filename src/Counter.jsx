import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/counterSlice";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispach = useDispatch();

  return (
    <div>
      <span>{count}</span>
      <button onClick={() => dispach(increment())}>
        Incrementé le compteur
      </button>
      <button onClick={() => dispach(decrement())}>
        Décrementé le compteur
      </button>
    </div>
  );
}
