import { useLayoutEffect, useState } from "react";
import debounce from "lodash/debounce";

export default function useWindowSize() {
  const [size, setSize] = useState([0, 0]);

  function updateSize() {
    setSize([window.innerWidth, window.innerHeight]);

    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }

  useLayoutEffect(() => {
    window.addEventListener("resize", debounce(updateSize, 200), false);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}
