"use client";
import React from "react";
import { useEffect } from "react";

export default function ({ cid }) {
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    document.cookie = `counterID=${cid}`;
  }, []);
  return <></>;
}
