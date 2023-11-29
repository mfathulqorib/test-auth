"use client";

import React from "react";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import { useLogin } from "../hooks/useLogin";

export const Login = () => {
  const { loading, handleChange, handleLogin } = useLogin();

  return (
    <main className="space-y-3">
      <Input
        placeholder="email@domain.com"
        type="email"
        name="email"
        onChange={handleChange}
      ></Input>
      <Input
        placeholder="password"
        type="password"
        name="password"
        onChange={handleChange}
      ></Input>
      <Button isDisabled={loading} color="primary" onClick={handleLogin}>
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
