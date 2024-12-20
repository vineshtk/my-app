"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import "flowbite";
import Permits from "@/components/Permits";
import Sidebar from "@/components/Sidebar";
export default function LoginPage() {
  return (
    <>
    <Sidebar />
      <div className="p-4 sm:ml-64">
        <div className="p-4  mt-14">
          <Permits />
        </div>
      </div>
    </>
  );
}
