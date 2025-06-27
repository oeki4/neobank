import { BankIcon } from "@/shared/ui/Icons/BankIcon.tsx";
import { NavLink } from "react-router";
import { useEffect, useState } from "react";
import { fetchExchangeRates } from "@/widgets/ExchangeRates/api/fetchExchangeRates.ts";
import { DateTime } from "luxon";

const RATE_LABELS = ["USD", "EUR", "AUD", "AZN", "GBP", "AMD"];

export const ExchangeRates = () => {
  const [lastUpdate, setLastUpdate] = useState<DateTime>(DateTime.now());
  const [rates, setRates] = useState<Record<string, number>>({});
  useEffect(() => {
    fetchExchangeRates().then((rates) => {
      setRates(rates.conversion_rates);
      setLastUpdate(DateTime.fromSeconds(rates.time_last_update_unix));
    });
  }, []);

  return (
    <section className="flex flex-col gap-4 rounded-2xl bg-[#c9c9c9] bg-gradient-to-t from-[#c9c9c9] to-[#f0f0f0] p-8 mb-12">
      <div className="flex justify-between items-center flex-wrap">
        <h3 className="font-ubuntu font-medium text-[30px] text-[#1C1C1E]">Exchange rate in internet bank</h3>
        <p className="font-ubuntu font-medium text-base">
          Update every 1 hour, MSC {lastUpdate.toFormat("HH:mm dd.LL.yy")}
        </p>
      </div>
      <div className="flex justify-between items-center flex-wrap">
        <p className="font-ubuntu font-medium text-xl leading-12 mb-8">Currency</p>
      </div>
      <div className="flex justify-between items-center flex-wrap mb-12">
        <div className="flex flex-wrap md:grid md:grid-cols-3 gap-8">
          {RATE_LABELS.map((rate) => (
            <div key={rate} className="font-ubuntu font-bold flex gap-5">
              <p className="text-[#808080] text-xl leading-5">{rate}:</p>
              <p className="text-black text-xl leading-5">{rates?.[rate] ? (1 / rates?.[rate]).toFixed(2) : "none"}</p>
            </div>
          ))}
        </div>
        <BankIcon className="max-w-[120px] hidden md:block" />
      </div>
      <NavLink
        className="font-ubuntu hover:opacity-50 transition-opacity font-bold text-white text-xl leading-5"
        to="/"
      >
        All courses
      </NavLink>
    </section>
  );
};
