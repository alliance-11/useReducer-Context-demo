import { useState } from "react";
import "./App.css";

function App() {

  const [message, setMessage] = useState("")

  const [watches, setWatches] = useState([
    { _id: "w1", name: "Medusa", price: 599 },
    { _id: "w2", name: "Apple", price: 399 },
    { _id: "w3", name: "Luxury Snake", price: 799 },
  ]);

  // change price => increase by 1 on click
  const onPriceIncrease = (id) => {

    // update price logic
    const watchesCopy = watches.map( watch => {

      // if we want to do MULTIPLE things on update
      // ternary not possible anymore => if else helps here! 
      if(watch._id === id) {
        setMessage(`Updated ${watch.name} - new price: ${watch.price + 1}`);        
        return { ...watch, price: watch.price + 1 }
      }
      else 
        return watch
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
      <header className="App-header">
        <div className="watches">
        {jsxWatches}
        </div>
        <div className="message">
          {message}
        </div>
      </header>
    </div>
  );
}

export default App;
