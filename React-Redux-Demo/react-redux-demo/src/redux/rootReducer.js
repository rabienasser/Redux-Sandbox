import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./ice-cream/iceCreamReducer";
import buttonReducer from "./button/buttonReducer";

const rootReducer = combineReducers({
   cake: cakeReducer,
   iceCream: iceCreamReducer,
   button: buttonReducer,
});

export default rootReducer;
