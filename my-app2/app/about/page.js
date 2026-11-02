"use client";
import { useState } from "react";

export default function AboutPage() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">About Page</h1>
    </div>
  );
}