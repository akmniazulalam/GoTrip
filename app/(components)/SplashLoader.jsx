"use client";

import { useEffect, useState } from "react";

const SplashLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-white">
      <img src="/logo.svg" alt="Logo" className="w-28 animate-pulse" />
    </div>
  );
};

export default SplashLoader;