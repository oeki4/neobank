import type { RouteProps } from "react-router";
import { HomePage } from "@/pages/HomePage";
import { LoanPage } from "@/pages/LoanPage";
import { NotFoundPage } from "@/pages/NotFound";
import { ApplicationPage } from "@/pages/ApplicationPage";

export enum AppRoutes {
  HOME = "home",
  LOAN = "loan",
  APPLICATION = "application",
  NOT_FOUND = "not-found",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: "/",
  [AppRoutes.LOAN]: "/loan",
  [AppRoutes.APPLICATION]: "/application/",
  [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.HOME]: {
    path: RoutePath.home,
    element: <HomePage />,
  },
  [AppRoutes.LOAN]: {
    path: RoutePath.loan,
    element: <LoanPage />,
  },
  [AppRoutes.APPLICATION]: {
    path: `${RoutePath.application}:id`,
    element: <ApplicationPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath["not-found"],
    element: <NotFoundPage />,
  },
};
