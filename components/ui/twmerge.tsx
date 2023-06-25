"use client";
import React from "react";
import { clsx, type ClassValue } from "clsx";

type Props = {};

export const Data = () => {
  console.log(clsx(["bg-rose-300"]));
};

function TwMerge({}: Props) {
  return <div>TwMerge</div>;
}

export default TwMerge;
