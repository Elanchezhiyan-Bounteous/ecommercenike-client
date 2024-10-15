"use client";
import React, { useState } from "react";
import { useLogin } from "../../hooks/useAuth";
import { useSelector } from "react-redux";
import { SelectAuth } from "../../lib/features/authSlice";
import { RootState } from "@/src/lib/store";

const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const mutation = useLogin();
  const { token, name } = useSelector(SelectAuth); 

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
      {token && name && (
        <p>
          Login successful! User: {name}, Token: {token}
        </p>
      )}
    </div>
  );
};

export default LoginComponent;
