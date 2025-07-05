import type { RouteProps } from "react-router";
import { HomePage } from "@/pages/HomePage";
import { LoanPage } from "@/pages/LoanPage";

export enum AppRoutes {
  HOME = "home",
  LOAN = "loan",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: "/",
  [AppRoutes.LOAN]: "/loan",
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
};
