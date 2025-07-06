"use client"
import React, { useRef, useEffect, CSSProperties } from "react";

const Cursor: React.FC = () => {
  const customCursor = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const MouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      if (customCursor.current) {
        customCursor.current.style.cssText = `left:${clientX}px; top:${clientY}px;`;
      }
    };

    document.addEventListener("mousemove", MouseMove);

    return () => {
      document.removeEventListener("mousemove", MouseMove);
    };
  }, []);

  return <div className="cursor" ref={customCursor}></div>;
};

export default Cursor;

