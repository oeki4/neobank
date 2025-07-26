import type { SortType } from "@/shared/types/SortType.ts";

export const sortByNumber = ({
  arr,
  field,
  sortType,
}: {
  arr: Array<{
    [key: string]: string | number;
  }>;
  field: string;
  sortType: SortType;
}) => {
  if (sortType === "asc") {
    return arr.sort((a, b) => +a[field] - +b[field]);
  } else {
    return arr.sort((a, b) => +b[field] - +a[field]);
  }
};
