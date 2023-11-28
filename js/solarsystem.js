const mainSolarSystem = document.querySelector(".solarSystemContainer");
const animatedPlanetElements = document.querySelectorAll(".planetWrapper");
const animatedPathElements = document.querySelectorAll(".path");
const allAnimatedElements = [
  ...animatedPlanetElements,
  ...animatedPathElements,
];

let animationStatus = true;

const toggleAnimationStatus = () => {
  animationStatus = !animationStatus;
  allAnimatedElements.forEach((element) => {
    element.style.animationPlayState = animationStatus ? "running" : "paused";
  });
};

mainSolarSystem.addEventListener("mouseenter", () => {
  toggleAnimationStatus();
});

mainSolarSystem.addEventListener("mouseout", () => {
  toggleAnimationStatus();
});

