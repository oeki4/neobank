import type { RouteProps } from "react-router";
import { HomePage } from "@/pages/HomePage";
import { LoanPage } from "@/pages/LoanPage";
import { NotFoundPage } from "@/pages/NotFound";
import { ApplicationPage } from "@/pages/ApplicationPage";
import { DocumentPage } from "@/pages/DocumentPage";
import { DocumentsSignPage } from "@/pages/DocumentsSignPage";
import { PinCodePage } from "@/pages/PinCodePage";

export enum AppRoutes {
  HOME = "home",
  LOANS = "loans",
  LOAN = "loan",
  DOCUMENT = "document",
  DOCUMENTS_SIGN = "documents-sign",
  PIN_CODE = "pin-code",
  NOT_FOUND = "not-found",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: "/",
  [AppRoutes.LOANS]: "/loans",
  [AppRoutes.LOAN]: "/loan/",
  [AppRoutes.DOCUMENT]: "/loan/",
  [AppRoutes.DOCUMENTS_SIGN]: "/loan/",
  [AppRoutes.PIN_CODE]: "/loan/",
  [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.HOME]: {
    path: RoutePath.home,
    element: <HomePage />,
  },
  [AppRoutes.LOANS]: {
    path: RoutePath.loans,
    element: <LoanPage />,
  },
  [AppRoutes.LOAN]: {
    path: `${RoutePath.loan}:id`,
    element: <ApplicationPage />,
  },
  [AppRoutes.DOCUMENT]: {
    path: `${RoutePath.loan}:id/document`,
    element: <DocumentPage />,
  },
  [AppRoutes.DOCUMENTS_SIGN]: {
    path: `${RoutePath.loan}:id/document/sign`,
    element: <DocumentsSignPage />,
  },
  [AppRoutes.PIN_CODE]: {
    path: `${RoutePath.loan}:id/code`,
    element: <PinCodePage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath["not-found"],
    element: <NotFoundPage />,
  },
};
