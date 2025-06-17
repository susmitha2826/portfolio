import React from "react";
import Particles from "react-tsparticles";

function BackgroundAnimation() {
    return (
        <Particles
            options={{
                background: {
                    color: { value: "# white" },
                },
                fpsLimit: 60,
                particles: {
                    number: { value: 80 },
                    color: { value: "#0ff" },
                    shape: { type: "star" },
                    size: { value: 1.5, random: true },
                    opacity: { value: 0.8, random: true, anim: { enable: true, speed: 0.5, opacity_min: 0.2, sync: false } },
                    move: { enable: true, speed: 0.3 },
                    links: { enable: true, distance: 120, color: " white", opacity: 0.3 },
                },

                interactivity: {
                    events: {
                        onHover: { enable: true, mode: "repulse" },
                        onClick: { enable: true, mode: "push" },
                    },
                    modes: {
                        repulse: { distance: 100 },
                        push: { quantity: 4 },
                    },
                },
            }}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                zIndex: 0,
            }}
        />
    );
}

export default BackgroundAnimation;
