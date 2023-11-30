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
    const { name, email, password } = registerData;

    if (name && email && password) {
      // Check if email registered
      setLoading(true);
      try {
        const responseLogin = await fetch(`${API_URL}/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
        const dataLogin = await responseLogin.json();

        console.log(responseLogin);
        console.log(dataLogin);

        if (responseLogin.status === 200 || responseLogin.status === 410) {
          setLoading(false);
          toast.error("Account already registered!");
        } else {
          // Registered account if email didn't exist
          const responseRegister = await fetch(`${API_URL}/register`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, password }),
          });
          const dataRegistered = await responseRegister.json();

          console.log(dataRegistered);

          setLoading(false);
          setRegisterData({
            name: "",
            email: "",
            password: "",
          });
          toast.success("User registered, please login");
        }
      } catch (error) {
        setLoading(false);
      }
    } else {
      toast.error(
        `Register failed, please input your ${name ? "" : "name,"} ${
          email ? "" : "email, and"
        } ${password ? "" : "password"}`
      );
    }

    // register account
    // const res = await fetch(`${API_URL}/register`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ name, email, password }),
    // });
    // const data = await res.json();

    // if (!data) {
    //   setLoading(false);
    //   toast.error("Error registering...");
    //   return;
    // }

    // setLoading(false);
    // toast.success("User registered, please login");

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

  return { loading, handleChange, handleSubmitRegister, registerData };
};
