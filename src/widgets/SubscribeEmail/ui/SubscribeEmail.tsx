import { MailIcon } from "@/shared/ui/Icons/MailIcon.tsx";
import { SendIcon } from "@/shared/ui/Icons/SendIcon.tsx";
import { useCallback, useEffect, useState } from "react";
import { subscribeEmail } from "@/widgets/SubscribeEmail/api/subscribeEmail.ts";

export const SubscribeEmail = () => {
  const [subscribeBtnActive, setSubscribeBtnActive] = useState(false);
  const [email, setEmail] = useState("");
  const [emailSubscribed, setEmailSubscribed] = useState(false);

  useEffect(() => {
    // Простая проверка на валидность email с помощью регулярного выражения
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(email);

    setSubscribeBtnActive(isValidEmail);
  }, [email]);

  useEffect(() => {
    console.log(localStorage.getItem("emailSubscribed"));
    if (localStorage.getItem("emailSubscribed")) {
      setEmailSubscribed(true);
    }
  }, []);

  const subscribe = useCallback(() => {
    subscribeEmail({
      email: email,
    }).then((res) => {
      if (res) {
        localStorage.setItem("emailSubscribed", "true");
        setEmailSubscribed(true);
      }
    });
  }, [email]);
  return (
    <section className="mb-[100px]">
      <h4 className="text-2xl font-ubuntu font-bold text-center text-[#EB801D] mb-[30px]">Support</h4>
      <p className="text-3xl font-ubuntu font-bold text-center text-[#1C1C1E] mb-6">Subscribe Newsletter & get</p>
      <p className="text-3xl font-ubuntu font-medium text-center text-[#1C1C1E] mb-10">Bank News</p>
      <div className="flex justify-center">
        <div className="px-4 md:px-8 py-5 bg-white shadow-[0_10px_20px_rgba(54,58,120,0.1)] flex flex-col w-full sm:w-auto gap-y-4 sm:flex-row rounded-2xl">
          {!emailSubscribed ? (
            <>
              <div className="flex">
                <MailIcon className="w-7" />
                <input
                  type="email"
                  placeholder="Your email"
                  onInput={(e) => {
                    setEmail(e.target?.value || "");
                  }}
                  className="outline-0 placeholder:text-[#9092B0] placeholder:font-nunito font-nunito px-2 w-full"
                />
              </div>
              <button
                disabled={!subscribeBtnActive}
                onClick={subscribe}
                className="bg-[#686DF1] disabled:opacity-50 rounded-3xl cursor-pointer justify-center sm:justify-start hover:opacity-50 transition-opacity flex items-center pl-3.5 pr-7 py-2 sm:py-0.5 text-base font-ubuntu font-bold text-white"
              >
                <SendIcon className="w-6 mr-2.5" />
                Subscribe
              </button>
            </>
          ) : (
            <p>You are already subscribed to the newsletter</p>
          )}
        </div>
      </div>
    </section>
  );
};
