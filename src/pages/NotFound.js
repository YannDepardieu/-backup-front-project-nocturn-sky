import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./NotFound.scss";

const NotFound = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    // console.log(container);
  };

  return (
    <main className="Main NotFound">
      <h1 className="card404">404</h1>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          detectRetina: true,
          background: {
            // image: "url('../images/space.jpg')",
            // image: "url('https://particles.js.org/images/background3.jpg')",
            // position: "50% 50%",
            // repeat: "no-repeat",
            // size: "cover",
          },
          interactivity: {
            detectsOn: "canvas",
            events: {
              onHover: {
                enable: true,
                mode: ["connect"],
              },
              onClick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              connect: {
                distance: 800,
                line_linked: {
                  opacity: 0.7,
                },
                radius: 80,
              },
            },
          },
          particles: {
            color: {
              value: ["e5dff8", "9f98ca", "8479b9"],
            },
            links: {
              enable: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 180,
            },
            opacity: {
              value: 0.7,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 2,
                color: "#000000",
              },
            },
            size: {
              value: { min: 0.5, max: 3.5 },
              random: true,
              anim: {
                enable: true,
                speed: 1,
                size_min: 0.6,
                sync: false,
              },
            },
          },
        }}
      />
    </main>
  );
};

export default NotFound;
