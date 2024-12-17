"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import  axios  from "axios";
import toast from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter()
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const onLogin = async () => {
    try {
      setLoading(true);
       const response = await axios.post("api/users/login", user);
       console.log("login success", response.data)
       toast.success("Login sucess")
       router.push("/profile")
      
    } catch (error:any) {
      console.log("login failed", error.message);
      toast.error(error.message)
    }finally{
      setLoading(false)
    }
  };


    useEffect(() => {
      if (
        user.email.length > 0 &&
        user.password.length > 0
      ){
        setButtonDisabled(false);
      } else {
        setButtonDisabled(true);
      }
    }, [user]);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1>{loading ? "loading": "Login"}</h1>
      <hr />
      <label htmlFor="email text-black">email</label>
      <input
        className="p-2 text-black"
        id="email"
        type="text"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="email"
      />

      <label htmlFor="password">password</label>
      <input
        className="p-2 text-black"
        id="password"
        type="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password"
      />

      <button
        className="px-4 py-2 m-5 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        onClick={onLogin}
      >
        Login
      </button>
      <Link href="/signup">Signup Here</Link>
    </div>
  );
}
