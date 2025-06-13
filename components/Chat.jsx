"use client";
import { useEffect } from "react";

const Chat = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/684bf4c87591b5190c90a831/1itkb8cah";
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    document.body.appendChild(script);

    return () => {
      // Opsional: bersihkan script saat komponen di-unmount
      document.body.removeChild(script);
    };
  }, []);

  return null; // Komponen ini tidak merender elemen visual
};

export default Chat;
