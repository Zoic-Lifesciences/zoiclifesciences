"use client";
import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScrollProvider({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.10,      // scroll smoothing (higher = faster)
      wheelMultiplier: 1.8,  // 🎯 change this to increase scroll speed
      touchMultiplier: 1.5,  // touch drag speed
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return <>{children}</>;
}
