import type { SelectValueType } from "@/shared/types/SelectValueType.ts";

export type Gender = "MALE" | "FEMALE";
export type GenderSelectValueType = SelectValueType<Gender>;

export type MaritalStatus = "MARRIED" | "DIVORCED" | "SINGLE" | "WIDOW_WIDOWER";
export type MaritalStatusSelectValueType = SelectValueType<MaritalStatus>;

export type EmploymentStatus = "UNEMPLOYED" | "SELF_EMPLOYED" | "EMPLOYED" | "BUSINESS_OWNER";
export type EmploymentStatusSelectValueType = SelectValueType<EmploymentStatus>;

export type Position = "WORKER" | "MID_MANAGER" | "TOP_MANAGER" | "OWNER";
export type PositionSelectValueType = SelectValueType<Position>;

export type DependentAmount = "1" | "2" | "3" | "4";
export type DependentAmountValueType = SelectValueType<DependentAmount>;
