import  { useEffect } from "react";
import { ReactNode } from "react"

import AOS from "simple-aos";

type Props = {
  children: ReactNode;
};
const AOSProvider = ({ children }: Props) => {
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
