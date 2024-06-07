"use client";
import { useEffect } from "react";

export default function MouseClickEffect() {
  function handleClick(event: any) {
    const effect = document.createElement("div");
    effect.classList.add("click-effect");
    effect.style.left = `${event.clientX}px`;
    effect.style.top = `${event.clientY}px`;
    document.body.appendChild(effect);
    setTimeout(() => {
      effect.remove();
    }, 300);
  }

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}
