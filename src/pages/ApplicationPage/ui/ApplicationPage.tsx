import { ApplicationRegistration } from "./ApplicationRegistration.tsx";
import { useNavigate, useParams } from "react-router";
import { APPLICATION_STEP, CURRENT_APPLICATION_ID } from "@/shared/const/storageItems.ts";
import { useEffect } from "react";

export const ApplicationPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (!id) navigate("/not-found");

    const savedApplicationId = localStorage.getItem(CURRENT_APPLICATION_ID);
    const applicationStep = localStorage.getItem(APPLICATION_STEP);
    if (applicationStep && +applicationStep !== 1) navigate("/not-found");
    else {
      localStorage.setItem(APPLICATION_STEP, "1");
    }

    if (!savedApplicationId && id) {
      localStorage.setItem(CURRENT_APPLICATION_ID, id.toString());
    }
    if (savedApplicationId && id && !(+savedApplicationId === +id)) {
      navigate("/not-found");
    }
  }, [id, navigate]);

  return (
    <main className="max-w-[1300px] mx-auto px-4 sm:px-5 lg:px-8 box-content md:mt-5">
      <section>
        <ApplicationRegistration />
      </section>
    </main>
  );
};
