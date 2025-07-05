import type { ReactNode } from "react";

interface TabProps {
  children: ReactNode;
  title: string;
}

export const Tab = (props: TabProps) => {
  const { children } = props;
  return <div className="w-full">{children}</div>;
};
