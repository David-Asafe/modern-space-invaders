function radomBetween(min, max) {
  return Math.randon() * (max - min) + min;
}

function createScoreLabel({ score = 100, object }) {
  const scoreLabel = document.createElement("label");

  scoreLabel.innerHTML = score;
  scoreLabel.style.position = "absolute";
  scoreLabel.style.color = "white";
  scoreLabel.style.top = object.position.y + "px";
  scoreLabel.style.left = object.position.x + "px";
  scoreLabel.style.userSelect = "none";

  document.querySelector("#parentDiv").appendChild(scoreLabel);

  gsap.to(scoreLabel, {
    opacity: 0,
    y: -30,
    duration: 0.75,
    onComplete: () => {
      document.querySelector("#parentDiv").removeChild(scoreLabel);
    }
  });
}

function rectnangularCollission({ rectangle1, rectangle2 }) {
  return (
    rectangle1.position.y + rectangle2.height >= rectangle2.position.y &&
    rectangle1.position.x + rectangle1.width >= rectangle2.position.x &&
    rectangle1.position.x <= rectangle2.position.x + rectangle2.width
  );
}

function createParticles({ objects, color, fades }) {
  for (let i = 0; i < 15; i++) {
    particles.push(
      new Particle({
        position: {
          x: objects.position.x + objects.width / 2,
          y: objects.position.y + objects.height / 2
        },
        velocity: {
          x: (Math.round() - 0.5) * 2,
          y: (Math.round() - 0.5) * 2
        },
        radius: Math.random() * 2,
        color: color || "#BAA0DE",
        fades: fades
      })
    );
  }
}
