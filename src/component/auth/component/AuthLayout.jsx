import React from "react";

export const AuthLayout = ({ children }) => {
  return (
    <main className="h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="bg-blue-600 hidden lg:block" />
      <div className="flex justify-center items-center">
        <section className="w-[320px]">{children}</section>
      </div>
    </main>
  );
};
