import React from "react";
import { useAuth } from "../auth-context";
import { Redirect } from "react-router-dom";

export function Blog() {
  const { loggedIn } = useAuth();

  return loggedIn ? (
    <div>
      <h2>Blog</h2>
    </div>
  ) : (
    <Redirect to="/" />
  );
}
