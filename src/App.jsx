import { useReducer } from "react";
import "./App.css";
import { initialState, reducer } from "./reducer";

function App() {
  // state => contains ALL our data
  // dispatch => our only SETTER for everything!
  const [state, dispatch] = useReducer(reducer, initialState);

  // zweiter Reducer für States, die alle zusammengehören (z.B. todo states)
  // const [stateTodos, dispatchTodos] = useReducer(reducerTodos, initialStateTodos);

  // destructure items from state we need in this page
  const { watches, message } = state;

  // change price => increase by 1 on click
  const onPriceIncrease = (id) => {
    // Step 1: Create an ACTION
    const action = { type: "UPDATE_WATCH", payload: id };
    // Step 2: SEND action to reducer using dispatch !
    dispatch(action)
  };

  // convert watches to "HTML"
  const jsxWatches = watches.map((watch) => (
    <div key={watch._id}>
      <span>{watch.name}</span> &nbsp;&nbsp;
      <span onClick={() => onPriceIncrease(watch._id)}>
        {watch.price} &euro;
      </span>
    </div>
  ));

  return (
    <div className="App">
      <header className="App-header">
        <div className="watches">{jsxWatches}</div>
        <div className="message">{message}</div>
      </header>
    </div>
  );
}

export default App;
