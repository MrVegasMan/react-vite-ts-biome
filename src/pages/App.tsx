import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "../App.css";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ButtonTap } from "../components/Button/ButtonTap.tsx";

function App() {
  const [count, setCount] = useState(0);
  const [countTap, setCountTap] = useState(0);
  return (
    <>
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
        <h2>{countTap}</h2>
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
      <div className="flex">
        <Menu>
          <MenuButton>My account</MenuButton>
          <MenuItems anchor="bottom" className={"menu-dd"}>
            <MenuItem>
              <a className="block data-[focus]:bg-blue-100" href="/settings">
                Settings
              </a>
            </MenuItem>
            <MenuItem>
              <a className="block data-[focus]:bg-blue-100" href="/support">
                Support
              </a>
            </MenuItem>
            <MenuItem>
              <a className="block data-[focus]:bg-blue-100" href="/license">
                License
              </a>
            </MenuItem>
          </MenuItems>
        </Menu>
        <ButtonTap onClick={() => setCountTap((count) => count + 1)} />
      </div>
    </>
  );
}

export default App;
