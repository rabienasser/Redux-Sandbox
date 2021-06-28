import React from "react";
import "./App.css";
import { Provider } from "react-redux";

import store from "./redux/store";
import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import Button from "./components/Button";

import IceCreamContainer from "./components/IceCreamContainer";

function App() {
   return (
      <Provider store={store}>
         <div className="App">
            <CakeContainer />
            <HooksCakeContainer />
            <IceCreamContainer />
            <Button />
         </div>
      </Provider>
   );
}

export default App;
