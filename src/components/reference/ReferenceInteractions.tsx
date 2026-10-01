"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { initializeReference } from "./interactions";

export default function ReferenceInteractions() {
  const pathname = usePathname();
  useEffect(() => initializeReference(), [pathname]);
  return null;
}
