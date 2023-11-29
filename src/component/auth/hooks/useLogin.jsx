"use client";

import React, { useState } from "react";
import { API_URL } from "@/config/apiUrl";
import toast from "react-hot-toast";
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
    setLoading(true);
    try {
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
        toast.success("Login success. Redirecting...");
        setTimeout(() => router.push("/dashboard"), 1000);
      } else {
        setLoading(false);
        // console.log(data.message);
        toast.error(`Login failed ${data.message}`);
      }
    } catch (error) {
      toast.error(`Login failed, ${error}`);
      setLoading(false);
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
  }

  return { loading, handleChange, handleLogin };
};
