import "./AppHeader.scss";
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";

export function AppHeader() {
  return (
    <div className={"app-header grid grid-cols-3 bg-layer-floor-1 px-12 py-8"}>
      <Button className={"title justify-self-start"}>Close</Button>
      <div className={"flex flex-col"}>
        <h1 className={"title"}>Brain Genius</h1>
        <p className={"subtitle"}>bot</p>
      </div>
      <Menu>
        <MenuButton className={"justify-self-end"}>---</MenuButton>
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
    </div>
  );
}
