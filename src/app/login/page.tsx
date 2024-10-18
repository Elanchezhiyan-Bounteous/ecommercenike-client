"use client";
import React, { useState } from "react";
import { useLogin } from "../../hooks/useAuth";
import { Typography } from "@/src/components/common/Typography";
import { useAtom } from "jotai";
import { userAtom } from "@/src/lib/authAtoms";

const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const mutation = useLogin();
  const [userSession] = useAtom(userAtom);

  const handleSubmit = () => {
    mutation.mutate({ email, password });
  };

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleSubmit} disabled={mutation.isPending}>
        {mutation.isPending ? "Logging in..." : "Login"}
      </button>

      {mutation.isError && (
        <p style={{ color: "red" }}>{mutation.error?.message}</p>
      )}
      {userSession && (
        <Typography>
          Login successful! User: {userSession.name}, Token: {userSession.token}{" "}
          Id: {userSession.id}
        </Typography>
      )}
    </div>
  );
};

export default LoginComponent;
