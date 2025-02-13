import React, { useEffect } from "react";
import AOS from "simple-aos";

const AOSProvider = ({ children }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (ms)
      offset: 100,   // Offset from the viewport
      once: true,    // Animation triggers only once
      
    });
  }, []);

  return <>{children}</>;
};

export default AOSProvider;
