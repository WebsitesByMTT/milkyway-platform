"use client";
import { useEffect, useRef, MutableRefObject, useState } from "react";

interface IntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

type UseIntersectionObserverReturn = [React.RefObject<HTMLDivElement>, boolean];

const useIntersectionObserver = (
  options: IntersectionObserverOptions
): UseIntersectionObserverReturn => {
  const ref = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting),
      options
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, isIntersecting];
};

export default useIntersectionObserver;
