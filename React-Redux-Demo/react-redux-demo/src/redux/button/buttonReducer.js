/* eslint-disable default-case */
import { CLICK_BUTTON } from "./buttonTypes";
import { HOVER_BUTTON } from "./buttonTypes";

const initialState = {
   number: 10,
};

const buttonReducer = (state = initialState, action) => {
   switch (action.type) {
      case CLICK_BUTTON:
         return {
            ...state,
            number: state.number * 2,
         };
      case HOVER_BUTTON:
         return {
            ...state,
            number: state.number - 1,
         };

      default:
         return state;
   }
};

export default buttonReducer;
