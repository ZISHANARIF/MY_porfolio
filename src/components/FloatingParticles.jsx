import React, { useEffect } from "react";
import "./FloatingParticles.css";

const FloatingParticles = () => {
  useEffect(() => {
    const particleContainer = document.getElementById("particle-container");

    // Generate particles
    for (let i = 0; i < 200; i++) {
      const particle = document.createElement("div");
      particle.classList.add("particle");
      particle.style.left = Math.random() * 100 + "vw";
      particle.style.animationDuration = 4 + Math.random() * 3 + "s";
      particle.style.background = `rgba(255, 255, 255, ${Math.random()})`;
      particleContainer.appendChild(particle);
    }

    // Remove particles after 10 seconds
    setTimeout(() => {
      particleContainer.style.display = "none";
    }, 10000);
  }, []);

  return <div className="particle-container" id="particle-container"></div>;
};

export default FloatingParticles;
