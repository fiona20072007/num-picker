import "./styles.scss";
import Block from "./Block";
import { useState } from "react";

const App = () => {
  const [clickNum, setClickNum] = useState({});
  return <div className="App">
    <div>
      <Block clickNum={clickNum} setClickNum={setClickNum} block="1" />
      <Block clickNum={clickNum} setClickNum={setClickNum} block="2" />
      <Block clickNum={clickNum} setClickNum={setClickNum} block="3" />
      <Block clickNum={clickNum} setClickNum={setClickNum} block="4" />
    </div>
  </div>;
};
export default App;
