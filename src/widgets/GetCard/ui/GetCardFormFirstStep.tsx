import { AmountRangeInput } from "@/shared/ui/Input/AmountRangeInput.tsx";
import { Input } from "@/shared/ui/Input/Input.tsx";
import { Select } from "@/shared/ui/Select/Select.tsx";
import { type SubmitHandler, useForm } from "react-hook-form";
import { DateTime } from "luxon";
import { useState } from "react";
import { Loader } from "@/shared/ui/Loader/Loader.tsx";
import * as React from "react";
import { useMask } from "@react-input/mask";
import { createApplication } from "@/widgets/GetCard/api/createApplication.ts";
import type { Application } from "@/entities/application";
import { numberWithSpaces } from "@/shared/utils/numberWithSpaces.ts";
import { APPLICATION_ITEMS, GET_CARD_STEP } from "@/shared/const/storageItems.ts";

interface GetCardFormFirstStepProps {
  onSetApplications: (payload: Application[]) => void;
  onSetStep: (payload: number) => void;
}

interface Inputs {
  amount: number;
  lastName: string;
  firstName: string;
  patronymic: string;
  term: string;
  email: string;
  dateOfBirth: string;
  passportSeries: number;
  passportNumber: number;
}

export const GetCardFormFirstStep = (props: GetCardFormFirstStepProps) => {
  const { onSetApplications, onSetStep } = props;
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors, isSubmitted },
  } = useForm<Inputs>({ defaultValues: { amount: 15000 } });
  const [inLoading, setInLoading] = useState<boolean>(false);
  const watchedAmount = watch("amount");
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setInLoading(true);
    setTimeout(() => {
      setInLoading(false);
      const [day, month, year] = data.dateOfBirth.split(".");
      const birthDate = DateTime.fromObject({
        day: parseInt(day, 10),
        month: parseInt(month, 10),
        year: parseInt(year, 10),
      });
      createApplication({
        amount: +data.amount,
        term: +data.term,
        middleName: data.patronymic,
        lastName: data.lastName,
        passportSeries: data.passportSeries.toString(),
        passportNumber: data.passportNumber.toString(),
        email: data.email,
        birthdate: birthDate.toFormat("yyyy-LL-dd"),
        firstName: data.firstName,
      }).then((res) => {
        if (res.length) {
          onSetApplications(res);
          onSetStep(2);
          localStorage.setItem(APPLICATION_ITEMS, JSON.stringify(res));
          localStorage.setItem(GET_CARD_STEP, "2");
          reset();
        } else {
          console.log(res);
        }
      });
    }, 2000);
  };
  const inputRef = useMask({
    mask: "______",
    replacement: { _: /\d/ },
  });
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-6 lg:p-8 w-full rounded-[28px] mt-11 relative shadow-[0_2px_4px_rgba(0,0,0,0.2)]"
    >
      <div
        className={[
          "w-full h-full bg-[#D9D9D964] transition-all absolute top-0 left-0 z-10 rounded-[28px] flex justify-center items-center",
          inLoading ? "block" : "hidden",
        ].join(" ")}
      >
        <Loader />
      </div>
      <div className="flex flex-col gap-8 lg:gap-0 lg:grid lg:grid-cols-2">
        <div className="lg:pr-10 flex flex-col gap-8 lg:border-r lg:border-dashed lg:border-[#80808066]">
          <div className="flex max-sm:flex-col justify-between gap-4">
            <h2 className="font-ubuntu text-3xl font-bold">Customize your card</h2>
            <p className="text-base font-medium font-ubuntu text-black">Step 1 of 5</p>
          </div>
          <div className="w-full border border-[#5B35D5] rounded-[10px] flex flex-col p-6">
            <p className="font-ubuntu font-medium text-base text-black">Select amount:</p>
            <div className="flex flex-col mb-10">
              <input
                type="text"
                ref={inputRef}
                value={+watchedAmount}
                className="font-ubuntu font-medium mb-2.5 text-base focus:outline-none"
                onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                  if (+e.target?.value > 600000) {
                    setValue("amount", 600000);
                    e.target.value = "600000";
                  }

                  if (e.target?.value != undefined) {
                    setValue("amount", +e.target?.value);
                  }
                }}
              />
              <AmountRangeInput
                {...register("amount", {
                  validate: (value) => {
                    if (value < 15000 || value > 600000) {
                      return "The amount must be between 15.000 and 600.000";
                    }
                    return true;
                  },
                })}
                value={watchedAmount}
                step={5000}
                min={15000}
                max={600000}
              />
              {errors.amount ? (
                <p className="mt-5 font-ubuntu font-medium text-base text-[#FF5631]">{errors.amount.message}</p>
              ) : null}
            </div>
          </div>
        </div>
        <div className="lg:pl-10 flex flex-col gap-4">
          <p className="font-ubuntu font-bold text-xl text-black">You have chosen the amount</p>
          <p className="font-ubuntu font-medium text-base text-black">{numberWithSpaces(watchedAmount)} ₽</p>
        </div>
      </div>
      <h3 className="font-ubuntu font-bold text-xl mt-8">Contact Information</h3>
      <div className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 grid-cols-4 gap-4 w-full mt-6.5">
        <Input
          {...register("lastName", {
            required: "Last name is required",
          })}
          error={errors.lastName?.message}
          label="Your last name"
          placeholder="For Example Doe"
          required
          success={isSubmitted && !errors.lastName}
        />
        <Input
          {...register("firstName", {
            required: "First name is required",
          })}
          error={errors.firstName?.message}
          label="Your first name"
          placeholder="For Example John"
          required
          success={isSubmitted && !errors.firstName}
        />
        <Input
          {...register("patronymic")}
          error={errors.patronymic?.message}
          label="Your patronymic"
          placeholder="For Example Victorovich"
          required
          success={isSubmitted && !errors.patronymic}
        />
        <Select
          required
          label="Select term"
          {...register("term")}
          defaultValue={{ value: "6", label: "6 month" }}
          items={[
            { value: "6", label: "6 month" },
            { value: "12", label: "12 months" },
            { value: "18", label: "18 month" },
            { value: "24", label: "24 month" },
          ]}
        />
        <Input
          {...register("email", {
            validate: (value) => {
              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              if (!emailRegex.test(value)) {
                return "Please enter a valid email address";
              }
              return true;
            },
          })}
          error={errors.email?.message}
          label="Your email"
          placeholder="test@gmail.com"
          required
          success={isSubmitted && !errors.email}
        />
        <Input
          label="Your date of birth"
          error={errors.dateOfBirth?.message}
          mask="__.__.____"
          replacement={{ _: /\d/ }}
          showMask
          placeholder="Select Date and Time"
          required
          success={isSubmitted && !errors.dateOfBirth}
          {...register("dateOfBirth", {
            validate: (value) => {
              if (!value || value.includes("_")) {
                return "Please enter a valid date";
              }

              // Парсим дату в формате "DD.MM.YYYY"
              const [day, month, year] = value.split(".");
              const birthDate = DateTime.fromObject({
                day: parseInt(day, 10),
                month: parseInt(month, 10),
                year: parseInt(year, 10),
              });

              // Проверяем, что дата валидна (например, 30.02.2000 не существует)
              if (!birthDate.isValid) {
                return "Invalid date";
              }

              // Вычисляем возраст
              const now = DateTime.now();
              let age = now.diff(birthDate, "years").years;

              // Если день рождения в этом году ещё не наступил, вычитаем 1 год
              if (now.month < birthDate.month || (now.month === birthDate.month && now.day < birthDate.day)) {
                age -= 1;
              }

              // Проверяем, что возраст >= 18
              if (age < 18) {
                return "You must be at least 18 years old";
              }
              return true;
            },
          })}
        />
        <Input
          {...register("passportSeries", {
            validate: (value) => {
              if (value.toString().length < 4) return "Please enter a correct passport series";
              return true;
            },
          })}
          success={isSubmitted && !errors.passportSeries}
          error={errors.passportSeries?.message}
          label="Your passport series"
          mask="____"
          replacement={{ _: /\d/ }}
          placeholder="0000"
          required
        />
        <Input
          error={errors.passportNumber?.message}
          {...register("passportNumber", {
            validate: (value) => {
              if (value.toString().length < 6) return "Please enter a correct passport number";
              return true;
            },
          })}
          label="Your passport number"
          mask="______"
          replacement={{ _: /\d/ }}
          placeholder="000000"
          required
          success={isSubmitted && !errors.passportNumber}
        />
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-[#003CFF] block mt-8 cursor-pointer w-full text-center sm:w-min whitespace-nowrap text-sm sm:text-base transition-colors font-bold hover:bg-[#7796C0] text-white py-4 px-4 leading-none font-ubuntu rounded-lg"
        >
          Apply for card
        </button>
      </div>
    </form>
  );
};
