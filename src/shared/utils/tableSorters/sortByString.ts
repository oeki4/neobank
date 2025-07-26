import type { SortType } from "@/shared/types/SortType.ts";

export const sortByString = ({
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
    return arr.sort((a, b) => a[field].toString().localeCompare(b[field].toString()));
  } else {
    return arr.sort((a, b) => b[field].toString().localeCompare(a[field].toString()));
  }
};
