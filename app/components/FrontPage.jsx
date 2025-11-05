"use client";
import { useState, useEffect } from "react";

export default function AnimatedText({ text = "ZOIC" }) {
  const [visibleLetters, setVisibleLetters] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLetters((prev) => {
        if (prev < text.length) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, 350);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <h1 className="text-9xl font-bold flex">
        {text.split("").map((char, index) => (
          <span
            key={index}
            className={`${index < visibleLetters ? "opacity-100" : "opacity-0"} transition-opacity ${
              char.toUpperCase() === "O" ? "text-[#048DB7]" : "text-white"
            }`}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>
    </div>
  );
}
