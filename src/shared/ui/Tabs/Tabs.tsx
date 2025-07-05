import { type ReactElement, useState } from "react";
import cls from "./tabs.module.scss";

interface TabsProps {
  children: ReactElement<{ title: string }>[];
  selectedTab?: number;
}

export const Tabs = (props: TabsProps) => {
  const { selectedTab, children } = props;
  const [selectedTabIndex, setSelectedTabIndex] = useState(selectedTab || 0);

  const changeTab = (index: number) => {
    setSelectedTabIndex(index);
  };
  return (
    <div className="relative w-full">
      <ul className={["flex cursor-pointer overflow-x-auto", cls.tabs].join(" ")}>
        {children.map((elem, index) => {
          return (
            <li
              key={index}
              className={[
                "font-ubuntu text-base whitespace-nowrap text-[#7B7454] pb-3 px-4",
                selectedTabIndex === index ? "border-b-2 border-[#7B7454]" : "",
              ].join(" ")}
              onClick={() => changeTab(index)}
            >
              {elem.props.title}
            </li>
          );
        })}
      </ul>
      <hr className={["h-0.5 top-9 bg-[#808080] -z-1 opacity-20 absolute w-full", cls.tabs].join(" ")} />
      <div className="mt-12">{children[selectedTabIndex]}</div>
    </div>
  );
};
