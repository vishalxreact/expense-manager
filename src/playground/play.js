import { createStore } from "redux";

const incrementf = ({ inc = 1 } = {}) => {
  return {
    type: "INCREMENT",
    inc,
  };
};

const decrementf = ({ dec = 10 } = {}) => {
  return {
    type: "DECREMENT",
    dec,
  };
};

const resetf = () => {
  return {
    type: "RESET",
  };
};

const setf = ({ count }) => {
  return {
    type: "SET",
    count,
  };
};

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.inc,
      };

    case "DECREMENT":
      return {
        count: state.count - action.dec,
      };
    case "SET":
      return {
        count: action.count,
      };
    case "RESET":
      return {
        count: 0,
      };
    default:
      return state;
  }
};

const store = createStore(countReducer);
store.subscribe(() => {
  console.log(store.getState());
});

// store.dispatch({
//   type: "INCREMENT",
//   inc: 4,
// });

store.dispatch(incrementf({ inc: 4 }));

store.dispatch(incrementf());

// store.dispatch({
//   type: "RESET",
// });

store.dispatch(resetf());

store.dispatch(decrementf({ dec: 10 }));

// store.dispatch({
//   type: "DECREMENT",
// });

store.dispatch(decrementf());

store.dispatch(setf({ count: 1111 }));
