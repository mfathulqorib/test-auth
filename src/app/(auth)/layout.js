import { AuthLayout } from "@/component/auth/component/AuthLayout";
import React from "react";

export default function Layout({ children }) {
  return <AuthLayout>{children}</AuthLayout>;
}
