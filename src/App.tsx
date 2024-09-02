import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "@radix-ui/themes/styles.css";
import { Theme, ThemePanel } from "@radix-ui/themes";
import { Flex, Text, Button } from "@radix-ui/themes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Theme accentColor="red" grayColor="sage" radius="small">
        <ThemePanel />

        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>

          <button className="button" onClick={() => {}}></button>

          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>

        <Flex
          direction="column"
          className="sm:rt-r-display-grid, sm:rt-r-gap-9"
          gap="2"
        >
          <Text>Hello from Radix Themes :)</Text>
          <Button className={"the-btn"} color={"gray"}>
            Let's go
          </Button>
        </Flex>
      </Theme>
    </>
  );
}

export default App;
