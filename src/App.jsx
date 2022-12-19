import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [watches, setWatches] = useState([
    { _id: "w1", name: "Medusa", price: 599 },
    { _id: "w2", name: "Apple", price: 399 },
    { _id: "w3", name: "Luxury Snake", price: 799 },
  ]);

  // change price => increase by 1 on click
  const onPriceIncrease = (id) => {
    console.log(id);

    // update price logic
    const watchesCopy = watches.map( watch => {
      return watch._id === id ? { ...watch, price: watch.price + 1 } : watch
    })
    setWatches(watchesCopy)
  };

  // convert watches to "HTML"
  const jsxWatches = watches.map((watch) => (
    <div key={watch._id}>
      <span>{watch.name}</span> &nbsp;&nbsp;
      <span onClick={() => onPriceIncrease(watch._id)}>{watch.price} &euro;</span>
    </div>
  ));

  return (
    <div className="App">
      <header className="App-header">{jsxWatches}</header>
    </div>
  );
}

export default App;
