import type { RouteProps } from "react-router";
import { HomePage } from "@/pages/HomePage";

export enum AppRoutes {
  HOME = "home",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: "/",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.HOME]: {
    path: RoutePath.home,
    element: <HomePage />,
  },
};
