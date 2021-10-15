import React from "react";
import { AuthenticatedRoutes, UnauthenticatedRoutes } from "./routes";
import { useAuth } from "./auth-context";

export default function App() {
  const { loggedIn } = useAuth();

  return loggedIn ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />;
}
