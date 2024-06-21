import { useEffect, useState } from "react";

type TWindowSize = [number, number];

type THook = TWindowSize;

export const useWindowSize = (): THook => {
  const [windowSize, setWindowSize] = useState<TWindowSize>([0, 0]);

  useEffect(() => {
    const handleResize = (): void => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
};
