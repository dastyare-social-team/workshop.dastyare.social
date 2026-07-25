import type { ReactNode } from "react";

const WindowLayout = ({ children }: { children: ReactNode }) => {
  return <div className="w-full">{children}</div>;
};

export default WindowLayout;
