"use client";

import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import { useRegister } from "../hooks/useRegister";

export const Register = () => {
  const { loading, handleChange, handleSubmitRegister } = useRegister();

  return (
    <main className="space-y-3">
      <Input
        name="name"
        placeholder="name"
        type="text"
        onChange={handleChange}
      ></Input>
      <Input
        name="email"
        placeholder="email@domain.com"
        type="email"
        onChange={handleChange}
      ></Input>
      <Input
        name="password"
        placeholder="password"
        type="password"
        onChange={handleChange}
      ></Input>
      <Button color="primary" onClick={handleSubmitRegister}>
        Register
      </Button>
      <div className="flex gap-1">
        <div>Have an account ?</div>
        <Link className="text-blue-600" href="/login">
          Login
        </Link>
      </div>
    </main>
  );
};
