import { Select } from "@/shared/ui/Select/Select.tsx";
import { type SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { Loader } from "@/shared/ui/Loader/Loader.tsx";
import { Input } from "@/shared/ui/Input/Input.tsx";
import { DateTime } from "luxon";
import type {
  DependentAmount,
  DependentAmountValueType,
  EmploymentStatus,
  EmploymentStatusSelectValueType,
  Gender,
  GenderSelectValueType,
  MaritalStatus,
  MaritalStatusSelectValueType,
  Position,
  PositionSelectValueType,
} from "@/shared/types/SelectTypes.ts";
import { registerApplication } from "@/pages/ApplicationPage/api/registerApplication.ts";

const GENDER_SELECT_VALUES: Array<GenderSelectValueType> = [
  {
    label: "Male",
    value: "MALE",
  },
  {
    label: "Female",
    value: "FEMALE",
  },
];

const MARITAL_STATUS_SELECT_VALUES: Array<MaritalStatusSelectValueType> = [
  {
    label: "Single",
    value: "SINGLE",
  },
  {
    label: "Married",
    value: "MARRIED",
  },
  {
    label: "Divorced",
    value: "DIVORCED",
  },
  {
    label: "Widow widower",
    value: "WIDOW_WIDOWER",
  },
];

const EMPLOYMENT_STATUS_SELECT_VALUES: Array<EmploymentStatusSelectValueType> = [
  {
    label: "Unemployed",
    value: "UNEMPLOYED",
  },
  {
    label: "Employed",
    value: "EMPLOYED",
  },
  {
    label: "Self Employed",
    value: "SELF_EMPLOYED",
  },
  {
    label: "Business Owner",
    value: "BUSINESS_OWNER",
  },
];

const POSITION_SELECT_VALUES: Array<PositionSelectValueType> = [
  {
    label: "Worker",
    value: "WORKER",
  },
  {
    label: "Mid Manager",
    value: "MID_MANAGER",
  },
  {
    label: "Top Manager",
    value: "TOP_MANAGER",
  },
  {
    label: "Owner",
    value: "OWNER",
  },
];

const DEPENDENT_AMOUNT_SELECT_VALUES: Array<DependentAmountValueType> = [
  {
    label: "One",
    value: "1",
  },
  {
    label: "Two",
    value: "2",
  },
  {
    label: "Three",
    value: "3",
  },
  {
    label: "Four",
    value: "4",
  },
];

interface Inputs {
  gender: Gender;
  maritalStatus: MaritalStatus;
  dependentAmount: DependentAmount;
  passportIssueDate: string;
  passportIssueBranch: string;
  employmentStatus: EmploymentStatus;
  employerINN: string;
  salary: number;
  position: Position;
  workExperienceTotal: number;
  workExperienceCurrent: number;
}

export const ApplicationRegistration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm<Inputs>();
  const [inLoading, setInLoading] = useState<boolean>(false);
  const [successRegister, setSuccessRegister] = useState<boolean>(false);
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setInLoading(true);
    const [day, month, year] = data.passportIssueDate.split(".");
    const parsedPassportIssueDate = DateTime.fromObject({
      day: parseInt(day, 10),
      month: parseInt(month, 10),
      year: parseInt(year, 10),
    });
    registerApplication({
      applicationId: 8,
      gender: data.gender,
      maritalStatus: data.maritalStatus,
      dependentAmount: +data.dependentAmount,
      passportIssueDate: parsedPassportIssueDate.toFormat("yyyy-LL-dd"),
      passportIssueBranch: data.passportIssueBranch,
      employmentStatus: data.employmentStatus,
      employerINN: data.employerINN,
      salary: data.salary,
      position: data.position,
      workExperienceTotal: data.workExperienceTotal,
      workExperienceCurrent: data.workExperienceCurrent,
    })
      .then((res) => {
        console.log(res);
        setTimeout(() => {
          setInLoading(false);
          if (res.status === 200) setSuccessRegister(true);
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
        setTimeout(() => {
          setInLoading(false);
        }, 2000);
      });
  };
  return (
    <>
      {successRegister ? (
        <div className="w-full py-[160px] flex flex-col items-center gap-8">
          <h1 className="font-ubuntu font-bold text-3xl">Wait for a decision on the application</h1>
          <p className="font-ubuntu font-medium text-base">The answer will come to your mail within 10 minutes</p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-6 mb-24 lg:p-8 w-full rounded-[28px] mt-11 relative shadow-[0_2px_4px_rgba(0,0,0,0.2)]"
        >
          <div
            className={[
              "w-full h-full bg-[#D9D9D964] transition-all absolute top-0 left-0 z-10 rounded-[28px] flex justify-center items-center",
              inLoading ? "block" : "hidden",
            ].join(" ")}
          >
            <Loader />
          </div>
          <div className="flex gap-20 max-md:justify-between max-md:gap-4 items-center">
            <h2 className="font-ubuntu text-3xl font-bold">Continuation of the application</h2>
            <p className="text-base font-medium font-ubuntu whitespace-nowrap text-black">Step 2 of 5</p>
          </div>
          <div className="grid min-lg:grid-cols-3 max-lg:min-md:grid-cols-2 max-sm:grid-cols-1 mt-10.5 gap-4">
            <Select
              required
              label="What's your gender"
              {...register("gender", {
                validate: (value) => {
                  if (!value) return "Select one of the options";
                },
              })}
              error={errors.gender?.message}
              items={GENDER_SELECT_VALUES}
            />
            <Select
              required
              label="Your marital status"
              {...register("maritalStatus", {
                validate: (value) => {
                  if (!value) return "Select one of the options";
                },
              })}
              error={errors.maritalStatus?.message}
              items={MARITAL_STATUS_SELECT_VALUES}
            />
            <Select
              required
              label="Your number of dependents"
              {...register("dependentAmount", {
                validate: (value) => {
                  if (!value) return "Select one of the options";
                },
              })}
              error={errors.dependentAmount?.message}
              items={DEPENDENT_AMOUNT_SELECT_VALUES}
            />
          </div>
          <div className="grid grid-cols-2 max-sm:grid-cols-1 mt-4.5 gap-4">
            <Input
              label="Date of issue of the passport"
              error={errors.passportIssueDate?.message}
              mask="__.__.____"
              showMask
              replacement={{ _: /\d/ }}
              placeholder="Select Date"
              required
              success={isSubmitted && !errors.passportIssueDate}
              {...register("passportIssueDate", {
                validate: (value) => {
                  if (!value || value.includes("_")) {
                    return "Incorrect date of passport issue date";
                  }

                  const [day, month, year] = value.split(".");
                  const passportIssueDate = DateTime.fromObject({
                    day: parseInt(day, 10),
                    month: parseInt(month, 10),
                    year: parseInt(year, 10),
                  });

                  if (!passportIssueDate.isValid) {
                    return "Incorrect date of passport issue date";
                  }

                  const now = DateTime.now();
                  if (now < passportIssueDate) {
                    return "Incorrect date of passport issue date";
                  }
                  return true;
                },
              })}
            />
            <Input
              {...register("passportIssueBranch", {
                validate: (value) => {
                  if (value.toString().length < 7) return "The series must be 6 digits";
                  return true;
                },
              })}
              success={isSubmitted && !errors.passportIssueBranch}
              error={errors.passportIssueBranch?.message}
              label="Division code"
              mask="___-___"
              replacement={{ _: /\d/ }}
              placeholder="000-000"
              required
            />
          </div>
          <h3 className="font-ubuntu font-bold text-xl mt-8">Employment</h3>
          <div className="mt-8 grid grid-cols-3 max-md:grid-cols-1 min-md:max-lg:grid-cols-2 gap-x-4">
            <Select
              required
              label="Your employment status"
              {...register("employmentStatus", {
                validate: (value) => {
                  if (!value) return "Select one of the options";
                },
              })}
              error={errors?.employmentStatus?.message}
              items={EMPLOYMENT_STATUS_SELECT_VALUES}
            />
            <Input
              {...register("employerINN", {
                validate: (value) => {
                  if (value.toString().length < 12) return "Department code must be 12 digits";
                  return true;
                },
              })}
              success={isSubmitted && !errors.employerINN}
              error={errors.employerINN?.message}
              label="Division code"
              mask="____________"
              replacement={{ _: /\d/ }}
              placeholder="000000000000"
              required
            />
            <Input
              {...register("salary", {
                validate: (value) => {
                  if (!value) return "Enter your salary";
                  if (isNaN(+value)) return "Incorrect salary";
                  return true;
                },
              })}
              success={isSubmitted && !errors.salary}
              error={errors.salary?.message}
              label="Your salary"
              placeholder="For example 100 000"
              required
            />
            <Select
              required
              label="Your position"
              {...register("position", {
                validate: (value) => {
                  if (!value) return "Select one of the options";
                },
              })}
              items={POSITION_SELECT_VALUES}
              error={errors?.position?.message}
            />
            <Input
              {...register("workExperienceTotal", {
                validate: (value) => {
                  if (!value) return "Enter your work experience total";
                  if (isNaN(+value)) return "Incorrect work experience total";
                  return true;
                },
              })}
              success={isSubmitted && !errors.workExperienceTotal}
              error={errors.workExperienceTotal?.message}
              label="Your work experience total"
              placeholder="For example 10"
              required
            />
            <Input
              {...register("workExperienceCurrent", {
                validate: (value) => {
                  if (!value) return "Enter your work experience current";
                  if (isNaN(+value)) return "Incorrect work experience current";
                  return true;
                },
              })}
              success={isSubmitted && !errors.workExperienceCurrent}
              error={errors.workExperienceCurrent?.message}
              label="Your work experience current"
              placeholder="For example 2"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[#003CFF] block mt-8 cursor-pointer w-full text-center sm:w-min whitespace-nowrap text-sm sm:text-base transition-colors font-bold hover:bg-[#7796C0] text-white py-4 px-4 leading-none font-ubuntu rounded-lg"
            >
              Continue
            </button>
          </div>
        </form>
      )}
    </>
  );
};
