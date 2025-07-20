import { ApplicationRegistration } from "./ApplicationRegistration.tsx";

export const ApplicationPage = () => {
  return (
    <main className="max-w-[1300px] mx-auto px-4 sm:px-5 lg:px-8 box-content md:mt-5">
      <section>
        <ApplicationRegistration />
      </section>
    </main>
  );
};
