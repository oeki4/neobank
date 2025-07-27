import { ApplicationRegistration } from "./ApplicationRegistration.tsx";
import { useNavigate, useParams } from "react-router";
import { APPLICATION_STEP, CURRENT_APPLICATION_ID } from "@/shared/const/storageItems.ts";
import { useEffect } from "react";

export const ApplicationPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (!id) navigate("/not-found");

    let savedApplicationId = localStorage.getItem(CURRENT_APPLICATION_ID);
    let applicationStep = localStorage.getItem(APPLICATION_STEP);

    if (!applicationStep && !savedApplicationId && id) {
      localStorage.setItem(APPLICATION_STEP, "1");
      localStorage.setItem(CURRENT_APPLICATION_ID, id.toString());
    }

    savedApplicationId = localStorage.getItem(CURRENT_APPLICATION_ID);
    applicationStep = localStorage.getItem(APPLICATION_STEP);
    if (savedApplicationId !== id) navigate("/not-found");

    if (!(savedApplicationId && applicationStep && (+applicationStep === 1 || +applicationStep === 2)))
      navigate("/not-found");
  }, [id, navigate]);

  return (
    <main className="max-w-[1300px] mx-auto px-4 sm:px-5 lg:px-8 box-content md:mt-5">
      <section>
        <ApplicationRegistration />
      </section>
    </main>
  );
};
