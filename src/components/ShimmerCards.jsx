import React, { useState, useEffect, useRef } from "react";
import "./cards.css";

function ShimmerCards() {
  const [cardCount, setCardCount] = useState(8); // Start with initial cards
  const sentinelRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // If sentinel is visible, add more cards
        if (entries[0].isIntersecting) {
          setCardCount((prev) => prev + 6);
        }
      },
      {
        root: null, // viewport
        rootMargin: "200px", // Trigger before sentinel is actually visible
        threshold: 0,
      },
    );

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => {
      if (sentinelRef.current) {
        observer.unobserve(sentinelRef.current);
      }
    };
  }, []);

  return (
    <>
      {Array(cardCount)
        .fill(0)
        .map((_, index) => (
          <div key={index} className="shimmer-cards">
            <div className="shimmer-wrapper">
              <div className="shimmer"></div>
            </div>
          </div>
        ))}
      {/* Sentinel element to observe */}
      <div ref={sentinelRef} style={{ height: "1px", width: "100%" }} />
    </>
  );
}

export default ShimmerCards;
