import "./index.css";
import Clock from "./components/Clock";
import { useState } from "react";

function App() {
  const [deg, setDeg] = useState({
    degreeOne: 20,
    degreeTwo: 80,
    degreeThree: 180,
  });

  setInterval(
    () =>
      setDeg({
        ...deg,
        degreeOne: deg.degreeOne + 10,
        degreeTwo: deg.degreeTwo + 10,
        degreeThree: deg.degreeThree + 10,
      }),
    1000
  );

  return (
    <div className="App">
      <Clock deg={deg.degreeOne} letter="london" />
      <Clock deg={deg.degreeTwo} letter="earth" />
      <Clock deg={deg.degreeThree} letter="seoul" />
    </div>
  );
}

export default App;
