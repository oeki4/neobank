import { Suspense } from "react";
import { Route, type RouteProps, Routes } from "react-router";
import { routeConfig } from "@/shared/config/routes/routes.tsx";

export const AppRouter = () => {
  const renderWithWrapper = (route: RouteProps) => {
    const element = <Suspense fallback={<div>Loading...</div>}>{route.element}</Suspense>;

    return <Route key={route.path} path={route.path} element={element} />;
  };

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};
