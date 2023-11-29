"use client";

import React, { useState } from "react";
import { API_URL } from "@/config/apiUrl";
import toast from "react-hot-toast";

export const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  }

  async function handleSubmitRegister() {
    setLoading(true);
    const { name, email, password } = registerData;
    const res = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await res.json();

    if (!data) {
      setLoading(false);
      toast.error("Error registering...");
      return;
    }

    setLoading(false);
    toast.success("User registered, please login");

    //     try {
    //       const res = await fetch(`${API_URL}/register`, {
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({ name, email, password }),
    //       });

    //       if (res.status === 200) {
    //         const data = await res.json();
    //         setLoading(false);
    //         return data;
    //       } else {
    //         setLoading(false);
    //         console.log("Error creating data. Status:", res.status);
    //       }
    //     } catch (error) {
    //       setLoading(false);
    //     }
  }

  return { loading, handleChange, handleSubmitRegister };
};
