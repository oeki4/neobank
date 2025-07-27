import { BottomFilledArrow } from "@/shared/ui/Icons/BottomFilledArrow.tsx";
import { useState } from "react";
import { sortByDate } from "@/shared/utils/tableSorters/sortByDate.ts";
import type { SortType } from "@/shared/types/SortType.ts";
import { sortByNumber } from "@/shared/utils/tableSorters/sortByNumber.ts";
import { sortByString } from "@/shared/utils/tableSorters/sortByString.ts";

interface TableProps {
  head: TableHeadItem[];
  body: Array<{
    [key: string]: string | number;
  }>;
}

type TableHeadItem = {
  label: string;
  key: string;
  type: string;
};

export const Table = (props: TableProps) => {
  const { head, body } = props;
  const [sortedBody, setSortedBody] = useState(body);
  const [sortByColumn, setSortByColumn] = useState<number | null>(null);
  const [sortType, setSortType] = useState<SortType>("desc");
  const sortColumn = ({ index, dataType, field }: { index: number; dataType: string; field: string }) => {
    setSortType(sortType === "asc" ? "desc" : "asc");
    setSortByColumn(index);
    switch (dataType) {
      case "date": {
        const sortedArray = sortByDate({ arr: sortedBody, field, sortType });
        setSortedBody(sortedArray);
        break;
      }
      case "number": {
        const sortedArray = sortByNumber({ arr: sortedBody, field, sortType });
        setSortedBody(sortedArray);
        break;
      }
      case "string": {
        const sortedArray = sortByString({ arr: sortedBody, field, sortType });
        setSortedBody(sortedArray);
        break;
      }
      default:
        setSortedBody(body);
    }
  };
  return (
    <table className="w-full overflow-x-auto">
      <thead>
        <tr>
          {head.map((item, index) => (
            <td key={index} className="border-b pr-6 border-[#E2E8F0]">
              <button
                onClick={() => sortColumn({ index, field: item.key, dataType: item.type })}
                className="font-ubuntu py-3 flex items-center gap-2 cursor-pointer font-medium text-[12px] uppercase text-[#4A5568]"
              >
                {item.label}
                <BottomFilledArrow
                  className={["shrink-0", sortByColumn === index ? "rotate-0" : "rotate-180"].join(" ")}
                />
              </button>
            </td>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedBody.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {head.map((item, index) => (
              <td
                key={index}
                className="border-b border-[#E2E8F0] font-ubuntu py-3 font-medium text-[12px] text-[#1A202C]"
              >
                {row[item.key].toString()}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
