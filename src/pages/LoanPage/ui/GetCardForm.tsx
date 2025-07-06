import { AmountRangeInput } from "@/shared/ui/Input/AmountRangeInput.tsx";
import { Input } from "@/shared/ui/Input/Input.tsx";
import { Select } from "@/shared/ui/Select/Select.tsx";
import { type SubmitHandler, useForm } from "react-hook-form";
import { DateTime } from "luxon";

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

export const GetCardForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({ defaultValues: { amount: 15000 } });
  const watchedAmount = watch("amount");
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-6 lg:p-8 w-full rounded-[28px] mt-11 shadow-[0_2px_4px_rgba(0,0,0,0.2)]"
    >
      <div className="flex flex-col gap-8 lg:gap-0 lg:grid lg:grid-cols-2">
        <div className="lg:pr-10 flex flex-col gap-8 lg:border-r lg:border-dashed lg:border-[#80808066]">
          <div className="flex max-sm:flex-col justify-between gap-4">
            <h2 className="font-ubuntu text-3xl font-bold">Customize your card</h2>
            <p className="text-base font-medium font-ubuntu text-black">Step 1 of 5</p>
          </div>
          <div className="w-full border border-[#5B35D5] rounded-[10px] flex flex-col p-6">
            <p className="font-ubuntu font-medium text-base text-black">Select amount</p>
            <AmountRangeInput {...register("amount")} value={watchedAmount} step={5000} min={15000} max={600000} />
          </div>
        </div>
        <div className="lg:pl-10 flex flex-col gap-4">
          <p className="font-ubuntu font-bold text-xl text-black">You have chosen the amount</p>
          <p className="font-ubuntu font-medium text-base text-black">150 000 ₽</p>
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
        />
        <Input
          {...register("firstName", {
            required: "First name is required",
          })}
          error={errors.firstName?.message}
          label="Your first name"
          placeholder="For Example John"
          required
        />
        <Input
          {...register("patronymic", {
            required: "Patronymic name is required",
          })}
          error={errors.patronymic?.message}
          label="Your patronymic"
          placeholder="For Example Victorovich"
          required
        />
        <Select
          required
          label="Select term"
          {...register("term")}
          items={[
            { value: "1", label: "6 month" },
            { value: "2", label: "12 months" },
            { value: "3", label: "18 month" },
            { value: "4", label: "24 month" },
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
        />
        <Input
          label="Your date of birth"
          error={errors.dateOfBirth?.message}
          mask="__.__.____"
          replacement={{ _: /\d/ }}
          showMask
          placeholder="Select Date and Time"
          required
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
