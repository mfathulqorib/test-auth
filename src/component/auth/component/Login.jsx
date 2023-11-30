"use client";

import React from "react";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import { useLogin } from "../hooks/useLogin";
import toast from "react-hot-toast";

export const Login = () => {
  const { loginData, loading, handleChange, handleLogin } = useLogin();
  const { email, password } = loginData;
  const toastPromise = () => {
    toast.promise(handleLogin(), {
      loading: "Loading",
      success: (data) => ` ${data}`,
      error: (err) => `${err.toString()}`,
    });
  };

  return (
    <main className="space-y-3">
      <Input
        value={email}
        placeholder="email@domain.com"
        type="email"
        name="email"
        onChange={handleChange}
      ></Input>
      <Input
        value={password}
        placeholder="password"
        type="password"
        name="password"
        onChange={handleChange}
      ></Input>
      <Button isDisabled={loading} color="primary" onClick={toastPromise}>
        Login
      </Button>
      <div className="flex gap-1">
        <div>Don't have an account ?</div>
        <Link className="text-blue-600" href="/register">
          Register
        </Link>
      </div>
    </main>
  );
};
