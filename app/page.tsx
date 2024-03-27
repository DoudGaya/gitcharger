"use client"
import Screen1 from "@/components/Screen1";
import Image from "next/image";
import Joyride from "react-joyride";
import { useState } from "react";
import {Screen2} from '@/components/Screen2'
import Screen3 from "@/components/Screen3";
import { Screen4 } from "@/components/Screen4";

export default function Home() {
  return (
   <div className=" bg-green-300 w-full lg:p-10 p-6">
    <div className=" rounded-2xl grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 lg:gap-4 lg:px-6 mx-auto">
      <div className="">
      <Screen1 />
      </div>
      <div className="">
        <Screen2 />
      </div>
      <div className="">
        <Screen3 />
      </div>
      <div className="">
        <Screen4 />
      </div>
    </div>
   </div>
  );
}
