import { useCallback } from "react";
import Particles from "@tsparticles/react";
import type { Engine } from "@tsparticles/engine";
import { loadFull } from "tsparticles";

export const ParticlesBackground = () => {

  return (
    <>
      {/* Enhanced Particles with multiple layers */}
      <Particles
        id="tsparticles"
        options={{
          fullScreen: {
            enable: true,
            zIndex: -1,
          },
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          particles: {
            color: {
              value: ["#FF5722", "#FF8A65", "#0A6E94", "#1e78c1", "#f75821"],
            },
            links: {
              color: "#FF5722",
              distance: 200,
              enable: true,
              opacity: 0.05,
              width: 1,
              triangles: {
                enable: true,
                opacity: 0.02,
              },
            },
            move: {
              enable: true,
              outModes: {
                default: "out",
              },
              random: true,
              speed: 0.8,
              straight: false,
              direction: "none",
              attract: {
                enable: true,
                rotate: { x: 600, y: 1200 },
              },
            },
            number: {
              value: 100,
              density: {
                enable: true
              },
            },
            opacity: {
              value: { min: 0.1, max: 0.3 },
              animation: {
                enable: true,
                speed: 0.5,
                sync: false,
              },
            },
            shape: {
              type: ["circle", "triangle", "polygon"],
              options: {
                polygon: {
                  sides: 6,
                },
              },
            },
            size: {
              value: { min: 1, max: 4 },
              animation: {
                enable: true,
                speed: 2,
                sync: false,
              },
            },
            twinkle: {
              particles: {
                enable: true,
                frequency: 0.05,
                opacity: 1,
              },
            },
          },
          interactivity: {
            detect_on: "window",
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
                parallax: {
                  enable: false,
                  force: 60,
                  smooth: 10,
                },
              },
              onClick: {
                enable: true,
                mode: "push",
              },
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4,
              },
              push: {
                quantity: 4,
              },
            },
          },
          detectRetina: true,
        }}
      />
      
      {/* Animated gradient overlays */}
      <div className="fixed inset-0 pointer-events-none z-[-2]">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/30 via-transparent to-orange-50/30 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-orange-400/10 to-red-400/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-400/5 to-pink-400/5 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 0.1; }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(180deg); opacity: 0.2; }
          50% { transform: translateY(20px) rotate(360deg); opacity: 0.4; }
        }
        @keyframes spin-slow {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </>
  );
};