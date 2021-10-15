import React, { useState } from "react";
import { useAuth } from "../auth-context";

export function Home() {
  const { login, logout, loggedIn } = useAuth();

  return loggedIn ? (
    <>
      <h2>Welcome</h2>
      <button onClick={logout}>Logout</button>
    </>
  ) : (
    <div>
      <h2>Login</h2>
      <button onClick={login}>Login</button>
    </div>
  );
}
