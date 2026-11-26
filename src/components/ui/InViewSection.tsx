"use client";

import { useEffect, useRef, useState } from "react";

type InViewSectionProps = {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
};

export function InViewSection({ children, className = "", threshold = 0.25 }: InViewSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // animasi cukup sekali
        }
      },
      { threshold },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, );

  return (
    <section ref={ref} data-visible={visible} className={`group ${className}`}>
      {children}
    </section>
  );
}