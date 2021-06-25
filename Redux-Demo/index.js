const redux = require("redux");
const reduxLogger = require("redux-logger");

const createStore = redux.createStore; //create store from redux
const combineReducers = redux.combineReducers; //combine reducers from redux
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

// ACTIONS
const BUY_CAKE = "BUY_CAKE";
const BUY_ICE_CREAM = "BUY_ICE_CREAM";

// {
//    type: BUY_CAKE,
//    info: 'First redux action'    //this line is optional
// }

// This is an action creator - *a function that returns an action*
function buyCake() {
   return {
      type: BUY_CAKE,
      info: "First redux action",
   };
}

buyIceCream = () => {
   return {
      type: BUY_ICE_CREAM,
   };
};

// REDUCERS
// current state
// const initialState = {
//    numOfCakes: 10,
//    numOfIceCreams: 20,
// };

const initialCakeState = {
   numOfCakes: 10,
};

const initialIceCreamState = {
   numOfIceCreams: 20,
};

// reducer
const cakeReducer = (state = initialCakeState, action) => {
   switch (action.type) {
      case BUY_CAKE:
         return {
            ...state, //asking to first make a copy of the state, and then change the numOfCakes
            numOfCakes: state.numOfCakes - 1,
         };
      default:
         return state;
   }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
   switch (action.type) {
      case BUY_ICE_CREAM:
         return {
            ...state, //asking to first make a copy of the state, and then change the numOfCakes
            numOfIceCreams: state.numOfIceCreams - 1,
         };
      default:
         return state;
   }
};

// STORE
const rootReducer = combineReducers({
   //COMBINING REDUCERS
   cake: cakeReducer,
   iceCream: iceCreamReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger)); //store takes in reducer, pass in logger into middleware
console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(() => {});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();
