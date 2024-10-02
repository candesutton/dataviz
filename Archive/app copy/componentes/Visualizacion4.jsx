"use client";

import { useEffect } from "react";

export default function Dataviz5
() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://public.flourish.studio/resources/embed.js";
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script); // Limpieza cuando el componente se desmonta
    };
  }, []);

  return (
    <div class="flourish-embed flourish-photo-slider" data-src="visualisation/19435956">
      {/* Fallback en caso de que JS esté deshabilitado */}
      <noscript>
        <img
          src="https://public.flourish.studio/visualisation/19435956/thumbnail"
          width="100%"
          alt="photo-slider visualization"
        />
      </noscript>
    </div>
  );
}

