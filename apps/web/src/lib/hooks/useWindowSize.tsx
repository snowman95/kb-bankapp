import { useLayoutEffect, useState } from "react";
import debounce from "lodash/debounce";

export default function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", debounce(updateSize, 200), false);

    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}
