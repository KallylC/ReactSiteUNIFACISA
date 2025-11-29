import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function BackgroundParticles() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = {
    fpsLimit: 60,
    background: { color: "transparent" },
    particles: {
      number: { value: 65, density: { enable: true, area: 1400 } },
      color: { value: "#ab2de6" },
      shape: { type: "circle" },
      opacity: { value: 0.18 },
      size: { value: { min: 1, max: 3 } },
      move: { enable: true, speed: 0.25 },
    },
    detectRetina: true,
  };

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={options}
      className="absolute inset-0 -z-10" // Garante que fique no fundo
    />
  );
}