"use client";
import { NextUIProvider as NextUi } from "@nextui-org/react";
import React from "react";

export const NextUiProvider = ({ children }: { children: React.ReactNode }) => {
  return <NextUi>{children}</NextUi>;
};
