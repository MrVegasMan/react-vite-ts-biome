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
    <div className={"app-header flex flex-row justify-between"}>
      <Button>Close</Button>
      <div className={"flex flex-col"}>
        <h1>Brain Genius</h1>
        <p>bot</p>
      </div>
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
    </div>
  );
}
