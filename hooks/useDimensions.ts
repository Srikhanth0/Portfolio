import { useState, useEffect, useRef } from "react";

export function useDimensions() {
  const ref = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!ref.current) return;

    const updateDimensions = () => {
      if (ref.current) {
        setDimensions({
          width: ref.current.clientWidth,
          height: ref.current.clientHeight,
        });
      }
    };

    // Initial measurement
    updateDimensions();

    // Setup ResizeObserver
    const observer = new ResizeObserver(() => {
      updateDimensions();
    });

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return { ref, dimensions };
}
