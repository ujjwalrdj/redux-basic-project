import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store";
const Counter = () => {
  const dispatch = useDispatch();
  const initialCounter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const incrementHandler = () => {
    // dispatch({ type: "increment" });
    dispatch(counterActions.increment());
  };

  const incrementByFiveHandler = () => {
    // dispatch({ type: "increase", amount: 5 });
    dispatch(counterActions.increase(5));
  };

  const decrementHandler = () => {
    // dispatch({ type: "decrement" });
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    // dispatch({ type: "toggle" });
    dispatch(counterActions.toggleCounter());
  };

  return (
    <>
      {isAuth && (
        <main className={classes.counter}>
          <h1>Redux Counter</h1>
          {show && <div className={classes.value}>{initialCounter}</div>}
          {show && (
            <div>
              <button onClick={decrementHandler}>Decrement</button>
              <button onClick={incrementHandler}>Increment</button>
              <button onClick={incrementByFiveHandler}>Increment By 5</button>
            </div>
          )}
          <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
      )}
    </>
  );
};

export default Counter;
