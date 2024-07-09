import { useEffect, useState } from "react";

export const useScroll = () => {
  const [scrolling, setScrolling] = useState<boolean>(false);
  const [scrollTop, setScrollTop] = useState<number>(0);

  useEffect(() => {
    const onScroll = (event: any) => {
      setScrollTop(event.target.documentElement.scrollTop);
      setScrolling(event.target.documentElement.scrollTop > scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return { scrolling, scrollTop };
};
