import { Button } from "@headlessui/react";
import "./ButtonFooter.scss";
import { ReactNode } from "react";

interface ButtonFooterProps {
  children: ReactNode;
  footerBtnTitle: string;
}

export function ButtonFooter({ children, footerBtnTitle }: ButtonFooterProps) {
  return (
    <Button
      className={"app-footer-btn flex flex-col gap-4px items-center grow"}
    >
      {children}
      <p>{footerBtnTitle}</p>
    </Button>
  );
}
