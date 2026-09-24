"use client";

import { useEffect, useState } from "react";

const PHRASES = [
  "Evangelist of Personal Intelligence",
  "Open Source Maximalist",
  "Tinkerer of Games",
];

export default function HeadlineCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % PHRASES.length),
      2600
    );
    return () => clearInterval(id);
  }, []);

  return (
    <h3 className="headline-carousel" aria-live="polite">
      {PHRASES.map((phrase, i) => (
        <span key={phrase} className={i === index ? "active" : ""}>
          {phrase}
        </span>
      ))}
    </h3>
  );
}
