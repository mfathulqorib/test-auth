"use client";

import React, { useState } from "react";
import { API_URL } from "@/config/apiUrl";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  }

  async function handleLogin() {
    setLoading(true);
    const { email, password } = loginData;
    const res = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await res.json();

    if (!data) {
      setLoading(false);
      console.log("error!");
      return;
    }

    setLoading(false);
    console.log(data);
  }

  return { loading, handleChange, handleLogin };
};
