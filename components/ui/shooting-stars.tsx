"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState, useRef } from "react";

interface ShootingStar {
  id: number;
  x: number;
  y: number;
  angle: number;
  scale: number;
  speed: number;
  distance: number;
}

interface ShootingStarsProps {
  minSpeed?: number;
  maxSpeed?: number;
  minDelay?: number;
  maxDelay?: number;
  numStars?: number; // New prop for the number of stars
  starColor?: string;
  trailColor?: string;
  starWidth?: number;
  starHeight?: number;
  className?: string;
}

export const ShootingStars: React.FC<ShootingStarsProps> = ({
  minSpeed = 20,
  maxSpeed = 35,
  minDelay = 1000,
  maxDelay = 4000,
  numStars = 5, // Default to 5 shooting stars
  starColor = "#0e5af2",
  trailColor = "#447fb6",
  starWidth = 20,
  starHeight = 5,
  className,
}) => {
  const [pageHeight, setPageHeight] = useState(0);
  const [stars, setStars] = useState<ShootingStar[]>([]); // Array of stars
  const timeoutRefs = useRef<NodeJS.Timeout[]>([]);
  const animationRef = useRef<number | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (typeof document !== "undefined") {
      setPageHeight(document.body.scrollHeight);
    }

    const updateHeight = () => {
      setPageHeight(document.body.scrollHeight);
    };

    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const getRandomStartPoint = () => {
    const side = Math.floor(Math.random() * 4);
    const offsetX = Math.random() * window.innerWidth;
    const offsetY = Math.random() * pageHeight;

    switch (side) {
      case 0: return { x: offsetX, y: 0, angle: 45 }; // From Top
      case 1: return { x: window.innerWidth, y: offsetY, angle: 135 }; // From Right
      case 2: return { x: offsetX, y: pageHeight, angle: 225 }; // From Bottom
      case 3: return { x: 0, y: offsetY, angle: 315 }; // From Left
      default: return { x: 0, y: 0, angle: 45 };
    }
  };

  useEffect(() => {
    const createStar = () => {
      const { x, y, angle } = getRandomStartPoint();
      const newStar: ShootingStar = {
        id: Date.now() + Math.random(), // Ensure unique IDs
        x,
        y,
        angle,
        scale: 1,
        speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
        distance: 0,
      };
      setStars((prevStars) => [...prevStars, newStar]); // Add new star without replacing others

      const randomDelay = Math.random() * (maxDelay - minDelay) + minDelay;
      const timeout = setTimeout(createStar, randomDelay);
      timeoutRefs.current.push(timeout);
    };

    for (let i = 0; i < numStars; i++) {
      createStar();
    }

    return () => {
      timeoutRefs.current.forEach(clearTimeout);
    };
  }, [numStars, minSpeed, maxSpeed, minDelay, maxDelay]);

  useEffect(() => {
    const moveStars = () => {
      setStars((prevStars) =>
        prevStars
          .map((star) => {
            const newX =
              star.x + star.speed * Math.cos((star.angle * Math.PI) / 180);
            const newY =
              star.y + star.speed * Math.sin((star.angle * Math.PI) / 180);
            const newDistance = star.distance + star.speed;
            const newScale = 1 + newDistance / 100;

            if (
              newX < -20 ||
              newX > window.innerWidth + 20 ||
              newY < -20 ||
              newY > pageHeight + 20
            ) {
              return null; // Remove stars that go out of bounds
            }

            return { ...star, x: newX, y: newY, distance: newDistance, scale: newScale };
          })
          .filter(Boolean) as ShootingStar[] // Remove null values
      );

      animationRef.current = requestAnimationFrame(moveStars);
    };

    animationRef.current = requestAnimationFrame(moveStars);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [stars, pageHeight]);

  return (
    <svg
      ref={svgRef}
      className={cn("w-full min-h-screen absolute inset-0", className)}
    >
      {stars.map((star) => (
        <rect
          key={star.id}
          x={star.x}
          y={star.y}
          width={starWidth * star.scale}
          height={starHeight}
          fill="url(#gradient)"
          transform={`rotate(${star.angle}, ${star.x + (starWidth * star.scale) / 2}, ${star.y + starHeight / 2})`}
        />
      ))}
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: trailColor, stopOpacity: 0 }} />
          <stop offset="100%" style={{ stopColor: starColor, stopOpacity: 1 }} />
        </linearGradient>
      </defs>
    </svg>
  );
};
