import { createBrowserRouter } from "react-router-dom";
import { LandingPage } from "../pages/landing-page";
import { AppHome } from "../pages/app/home";
import { Patients } from "../pages/app/patients";
import { Patientmiddle } from "../pages/app/patientsmiddlepage";
import { Notifications } from "../pages/app/notifications";
import { Settings } from "../pages/app/settings";
import { SignInScreen } from "../pages/authentication/sign-in";
import { SignUpScreen } from "../pages/authentication/sign-up";
import { ChatScreen } from "../pages/app/chat";
import { AboutTheApp } from "../pages/app/about-the-app";
import { AccountDataScreen } from "../pages/app/account-data";
import { ChangePasswordScreen } from "../pages/app/change-password";
import { TermsOfUseScreen } from "../pages/app/terms-of-use";
import { PrivacyPolicyScreen } from "../pages/app/privacy-policy";
import { Listagem } from "../pages/app/list-patients";

export const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <SignInScreen />,
  },
  {
    path: "/cadastrar",
    element: <SignUpScreen />,
  },
  {
    path: "/app",
    element: <AppHome />,
  },
  {
    path: "/app/pacientes",
    element: <Patients />,
  },
  {
    path: "/app/pacientes/:studentId",
    element: <Patientmiddle />,
  },
  {
    path: "/app/notificacoes",
    element: <Notifications />,
  },
  {
    path: "/app/configuracoes",
    element: <Settings />,
  },
  {
    path: "/app/chat/:studentId",
    element: <ChatScreen />,
  },
  {
    path: "/app/sobre-o-app",
    element: <AboutTheApp />,
  },
  {
    path: "/app/dados-cadastrais",
    element: <AccountDataScreen />,
  },
  {
    path: "/app/trocar-senha",
    element: <ChangePasswordScreen />,
  },
  {
    path: "/app/termos-de-uso",
    element: <TermsOfUseScreen />,
  },
  {
    path: "/app/politica-de-privacidade",
    element: <PrivacyPolicyScreen />,
  },
  {
    path: "/app/listagem",
    element: <Listagem />,
  },
]);