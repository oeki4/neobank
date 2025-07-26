import { DateTime } from "luxon";
import type { SortType } from "@/shared/types/SortType.ts";

export const sortByDate = ({
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
    return arr.sort(
      (a, b) => DateTime.fromISO(a[field].toString()).toMillis() - DateTime.fromISO(b[field].toString()).toMillis()
    );
  } else {
    return arr.sort(
      (a, b) => DateTime.fromISO(b[field].toString()).toMillis() - DateTime.fromISO(a[field].toString()).toMillis()
    );
  }
};
