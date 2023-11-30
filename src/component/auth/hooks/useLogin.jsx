"use client";

import React, { useState } from "react";
import { API_URL } from "@/config/apiUrl";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export const useLogin = () => {
  const router = useRouter();
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
    const { email, password } = loginData;
    if (email && password) {
      setLoading(true);

      const res = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();

      if (res.status === 200) {
        setLoading(false);
        // console.log(data);
        Cookies.set("token", data.token);
        setTimeout(() => router.push("/dashboard"), 1000);
        return "Login success. Redirecting...";
      } else {
        setLoginData({
          ...loginData,
          password: "",
        });
        setLoading(false);
        throw data.message;
      }

      // setLoading(true);
      // const res = await fetch(`${API_URL}/login`, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ name, email, password }),
      // });
      // const data = await res.json();

      // if (!data) {
      //   setLoading(false);
      //   console.log("error!");
      //   return;
      // }

      // setLoading(false);
      // console.log(data);
    } else {
      throw "Login failed, please input email and password";
    }
  }
  return { loading, handleChange, handleLogin, loginData };
};
