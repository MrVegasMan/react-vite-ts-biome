import "./AppFooter.scss";
import { Button } from "@headlessui/react";

export function AppFooter() {
  return (
    <nav className={"app-footer flex flex-row justify-between"}>
      <Button className={"app-footer-btn flex flex-col"}>
        <span>
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14 26.8334C21.0876 26.8334 26.8333 21.0877 26.8333 14.0001C26.8333 6.91243 21.0876 1.16675 14 1.16675C6.91234 1.16675 1.16666 6.91243 1.16666 14.0001C1.16666 21.0877 6.91234 26.8334 14 26.8334ZM3.49999 14.0001C3.49999 20.5419 24.5 20.5419 24.5 14.0001C24.5 8.59544 20.4166 4.14452 15.1667 3.56416V8.29952C16.526 8.61984 17.5 9.48413 17.5 10.5001C17.5 11.7887 15.933 12.8334 14 12.8334C12.067 12.8334 10.5 11.7887 10.5 10.5001C10.5 9.48413 11.4739 8.61984 12.8333 8.29952V3.56416C7.58338 4.14452 3.49999 8.59544 3.49999 14.0001Z"
            />
          </svg>
        </span>
        <p>IQ</p>
      </Button>
      <Button>1</Button>
      <Button>1</Button>
      <Button>1</Button>
      <Button>1</Button>
    </nav>
  );
}
