import { PinInput } from "@/shared/ui/PinCode/PinCode.tsx";
import { useEffect, useState } from "react";
import { checkCode } from "@/pages/PinCodePage/api/checkCode.ts";
import { NavLink, useNavigate, useParams } from "react-router";
import {
  APPLICATION_ITEMS,
  APPLICATION_STEP,
  CURRENT_APPLICATION_ID,
  GET_CARD_STEP,
} from "@/shared/const/storageItems.ts";

export const PinCodePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [codeCorrect, setCodeCorrect] = useState(false);
  const [codeWithError, setCodeWithError] = useState(false);
  const [code, setCode] = useState("");
  useEffect(() => {
    if (!id) navigate("/not-found");

    const savedApplicationId = localStorage.getItem(CURRENT_APPLICATION_ID);
    const applicationStep = localStorage.getItem(APPLICATION_STEP);
    if (savedApplicationId !== id) navigate("/not-found");
    if (!(savedApplicationId && applicationStep && +applicationStep === 4)) navigate("/not-found");
  }, [id, navigate]);
  useEffect(() => {
    if (code.length === 4 && id) {
      checkCode(+id, code).then((res) => {
        if (!(res.status === 200)) {
          setCodeWithError(true);
        } else {
          setCodeCorrect(true);
          localStorage.removeItem(GET_CARD_STEP);
          localStorage.removeItem(CURRENT_APPLICATION_ID);
          localStorage.removeItem(APPLICATION_ITEMS);
          localStorage.removeItem(APPLICATION_STEP);
        }
      });
    } else {
      setCodeWithError(false);
    }
  }, [code, id]);
  if (!id || isNaN(+id)) {
    navigate("/not-found");
    return;
  }

  return (
    <div className="max-w-[1300px] mx-auto px-4 sm:px-5 lg:px-8 box-content pb-24 pt-16">
      {codeCorrect ? (
        <div className="w-full flex flex-col gap-8 items-center">
          <img src="/box.webp" className="w-[150px] h-[150px]" alt="box" />
          <h2 className="font-ubuntu font-bold text-3xl max-sm:text-xl text-center text-[#1C1C1E]">
            Congratulations! You have completed your new credit card.
          </h2>
          <p className="font-ubuntu font-medium text-base text-center text-[#4F5665]">
            Your credit card will arrive soon. Thank you for choosing us!
          </p>
          <NavLink
            to="/"
            className="bg-[#003CFF] text-center text-base font-bold cursor-pointer transition-colors hover:bg-[#7796C0] text-white py-4 px-4 leading-none font-ubuntu rounded-2xl"
          >
            View other offers of our bank
          </NavLink>
        </div>
      ) : (
        <>
          <div className="w-full flex flex-col gap-8 items-center">
            <h1 className="font-ubuntu font-bold text-3xl text-[#1C1C1E]">Please enter confirmation code</h1>
            <PinInput length={4} onChange={(value) => setCode(value)} />
          </div>
          {codeWithError ? (
            <p className="font-ubuntu font-medium text-base text-[#FF5631] w-full mt-4 text-center">
              Invalid confirmation code
            </p>
          ) : null}
        </>
      )}
    </div>
  );
};
