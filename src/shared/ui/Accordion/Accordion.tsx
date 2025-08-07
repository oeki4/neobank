import { useState } from "react";
import { ArrowIcon } from "../Icons/ArrowIcon.tsx";

interface AccordionProps {
  items: Array<{ title: string; text: string }>;
  className?: string;
}

export const Accordion = (props: AccordionProps) => {
  const { items, className } = props;
  const [openedItem, setOpenedItem] = useState<number | null>(null);
  const toggleOpenedItem = (index: number) => {
    if (openedItem !== index) {
      setOpenedItem(index);
    } else {
      setOpenedItem(null);
    }
  };

  return (
    <div data-testid="accordion-root" className={["w-full border border-[#E2E8F0]", className].join(" ")}>
      {items.map((el, index) => (
        <div className="w-full border-b border-[#E2E8F0]">
          <div
            onClick={() => toggleOpenedItem(index)}
            className="w-full p-6 sm:p-8 gap-4 select-none flex justify-between cursor-pointer items-center"
          >
            <p className="font-ubuntu font-medium text-[#1C1C1E] text-sm sm:text-base">{el.title}</p>
            <button>
              <ArrowIcon className={["stroke-[#33363F] w-6 h-6", openedItem === index ? "" : "rotate-180"].join(" ")} />
            </button>
          </div>
          {openedItem === index ? (
            <div className="w-full pl-6 sm:pl-8 pr-12 sm:pr-16 py-4 sm:py-6 text-ubuntu text-sm sm:text-base text-[#7B7454]">
              <p>{el.text}</p>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};
