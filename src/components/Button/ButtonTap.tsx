import { Button } from "@headlessui/react";
import "./ButtonTap.scss";

interface ButtonTapProps {
  onClick?: () => void;
}

export function ButtonTap({ onClick }: ButtonTapProps) {
  return <Button className={"tap-btn"} onClick={onClick}></Button>;
}
