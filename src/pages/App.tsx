import { useState } from "react";
import "../App.scss";
import { ButtonTap } from "../components/Button/ButtonTap.tsx";

function App() {
  const [countTap, setCountTap] = useState(0);

  return (
    <>
      <div className="card">
        <h2>{countTap}</h2>
      </div>

      <div className="flex">
        <ButtonTap onClick={() => setCountTap((count) => count + 1)} />
      </div>
    </>
  );
}

export default App;
