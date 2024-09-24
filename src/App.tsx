import React from "react";

import Control1Example1 from "./components/control1/viewmodels/Control1Example1";
import Control1Example2 from "./components/control1/viewmodels/Control1Example2";
import Control2Example1 from "./components/control2/viewmodels/Control2Example1";

function App() {
  return (
    <div>
      <Control1Example1/>
      <Control1Example2/>
      <hr/>
      <Control2Example1 maxHints={3}/>
      <Control2Example1 maxHints={10}/>
    </div>
  );
}

export default App;
