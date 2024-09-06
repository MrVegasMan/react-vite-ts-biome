import { useState } from "react";
import "../App.scss";
import { ButtonTap } from "../components/Button/ButtonTap.tsx";
import { UserScore } from "../components/UserScore/UserScore.tsx";

function App() {
  const [countTap, setCountTap] = useState(0);

  return (
    <>
      <UserScore />
      <div className="card">
        <h2 className={"font-brand"}>{countTap}</h2>
      </div>

      <div className="flex">
        <ButtonTap onClick={() => setCountTap((count) => count + 1)} />
      </div>
    </>
  );
}

export default App;
