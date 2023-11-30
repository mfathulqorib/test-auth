"use client";

import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import { useRegister } from "../hooks/useRegister";

export const Register = () => {
  const { loading, handleChange, handleSubmitRegister, registerData } =
    useRegister();
  const { name, email, password } = registerData;

  return (
    <form className="space-y-3">
      <Input
        required
        value={name}
        name="name"
        placeholder="name"
        type="text"
        onChange={handleChange}
      ></Input>
      <Input
        required
        value={email}
        name="email"
        placeholder="email@domain.com"
        type="email"
        onChange={handleChange}
      ></Input>
      <Input
        required
        value={password}
        name="password"
        placeholder="password"
        type="password"
        onChange={handleChange}
      ></Input>
      <Button
        isDisabled={loading}
        color="primary"
        onClick={handleSubmitRegister}
      >
        Register
      </Button>
      <div className="flex gap-1">
        <div>Have an account ?</div>
        <Link className="text-blue-600" href="/login">
          Login
        </Link>
      </div>
    </form>
  );
};
