import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  if (!init) return null;

  return (
    <Particles
      className="absolute inset-0 -z-20"
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },

        fpsLimit: 60,

        particles: {
          number: {
            value: 80,
          },

          color: {
            value: "#38bdf8",
          },

          links: {
            enable: true,
            distance: 150,
            color: "#38bdf8",
            opacity: 0.15,
            width: 1,
          },

          move: {
            enable: true,
            speed: 1,
          },

          opacity: {
            value: 0.4,
          },

          size: {
            value: {
              min: 1,
              max: 3,
            },
          },
        },

        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
          },

          modes: {
            grab: {
              distance: 200,
              links: {
                opacity: 0.6,
              },
            },
          },
        },
      }}
    />
  );
}