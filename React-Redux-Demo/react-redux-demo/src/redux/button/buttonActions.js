import { CLICK_BUTTON, HOVER_BUTTON } from "./buttonTypes";

export const clickButton = () => {
   return {
      type: CLICK_BUTTON,
   };
};

export const hoverButton = () => {
   return {
      type: HOVER_BUTTON,
   };
};
