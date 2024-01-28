const mainSolarSystem = document.querySelector(".solarSystemContainer");
const animatedPlanetElements = document.querySelectorAll(".planetWrapper");
const animatedPathElements = document.querySelectorAll(".path");
const allAnimatedElements = [
  ...animatedPlanetElements,
  ...animatedPathElements,
];
const saturnToolTip = document.getElementById("saturnToolTip");

let animationStatus = true;

const toggleAnimationStatus = () => {
  animationStatus = !animationStatus;
  allAnimatedElements.forEach((element) => {
    element.style.animationPlayState = animationStatus ? "running" : "paused";
  });
};

mainSolarSystem.addEventListener("click", (e) => {
  if (e.target.classList.contains("planetWrapperSaturn")) {

    const isTooltipVisible = saturnToolTip.style.display === "block";

    if (isTooltipVisible) {
      saturnToolTip.style.display = "none";
    } else {
      saturnToolTip.style.display = "block";
    }

  }
});

mainSolarSystem.addEventListener("mouseover", () => {
  toggleAnimationStatus();
});

mainSolarSystem.addEventListener("mouseout", () => {
  toggleAnimationStatus();
});

