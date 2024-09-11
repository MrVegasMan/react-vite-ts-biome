import { useState } from "react";
import "../App.scss";
import { ButtonTap } from "../components/Button/ButtonTap.tsx";
import { UserScore } from "../components/UserScore/UserScore.tsx";

function App() {
  const [countTap, setCountTap] = useState(0);

  return (
    <>
      <UserScore />
      <div className={"flex flex-col gap-8px"}>
        <p className={"compact-250-numeric"}>your balance</p>
        <h2 className={"font-brand"}>{countTap}</h2>
        <p className={"compact-300-accent-numeric text-positive-primary"}>
          rank 1 235
        </p>
        <div></div>
      </div>

      <div className={"flex"}>
        <ButtonTap onClick={() => setCountTap((count) => count + 1)} />
      </div>
    </>
  );
}

export default App;
