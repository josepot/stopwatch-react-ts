import "./App.css";
import { Button } from "./Button";
import { ButtonType } from "./Button/Button";
import { Lap, LapTable } from "./Laps";
import { LapType } from "./Laps/Lap";
import { Timer } from "./Timer";

function App() {
  return (
    <>
      <Timer time={10000} />
      <div className="buttons">
        <Button>Reset</Button>
        <Button type={ButtonType.Primary}>Start</Button>
      </div>
      <LapTable>
        <Lap number={1} diffTime={5500} />
        <Lap number={2} type={LapType.Max} diffTime={6543} />
        <Lap number={1} type={LapType.Min} diffTime={5432} />
      </LapTable>
    </>
  );
}

export default App;
