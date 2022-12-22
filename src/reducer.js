// initial data (= frontend database)
export const initialState = {
  message: "",
  feedback: [],
  watches: [
    { _id: "w1", name: "Medusa", price: 599 },
    { _id: "w2", name: "Apple", price: 399 },
    { _id: "w3", name: "Luxury Snake", price: 799 },
  ],
};

// REDUCER => does all CHANGES to state (=logic)
export const reducer = (state, action) => {
  // do something with the state... (add, update, delete)
  console.log("Action received:", action)

  // check what the user wants (=> which action)
  switch(action.type) {
    
    // message cases
    case "UPDATE_MESSAGE":
      return { ...state, message: action.payload }
    
    // watch cases
    case "UPDATE_WATCH":
      
      let messageNew = ""

      const watchesCopy = state.watches.map((watch) => {
        // if we want to do MULTIPLE things on update
        // ternary not possible anymore => if else helps here!
        if (watch._id === action.payload) {

          // we found item => create message about the updated item
          messageNew = `Updated ${watch.name} - new price: ${
            watch.price + 1
          }`;          

          // update item by creating copy and set new price
          return { ...watch, price: watch.price + 1 };
        } 
        // we dont look for this item => keep it as it is :)
        else return watch;
      });

      // update overall state 
      // => possible to update two things at the same time: watches & message
      return { ...state, watches: watchesCopy, message: messageNew }

  }

  return state;
};
