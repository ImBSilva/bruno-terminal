"use client";
import { useState, useEffect } from "react";

const BOOT_LINES = [
  { text: "> CRT INITIALIZATION .............. OK", delay: 0.1 },
  { text: "> SCANLINE CALIBRATION ........... OK", delay: 0.35 },
  { text: "> PHOSPHOR WARMUP ................ 60HZ", delay: 0.6 },
  { text: "> FRAME BUFFER ALLOC ............. OK", delay: 0.85 },
  { text: "> DISPLAY PROTOCOL ............... V1.0", delay: 1.1 },
  { text: "> SYSTEM READY ................... 0 ERR", delay: 1.4 },
];

export function BootScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 3400);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="boot-screen">
      <div className="boot-content">
        {BOOT_LINES.map((line, i) => (
          <div
            key={i}
            className="boot-line"
            style={{ animationDelay: `${line.delay}s` }}
          >
            {line.text}
          </div>
        ))}
        <div className="boot-cursor" style={{ animationDelay: "1.7s, 2s" }}>
          _
        </div>
      </div>
    </div>
  );
}
