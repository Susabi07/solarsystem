const theme = [
  "brownTheme",
  "altTheme",
  "pinkTheme",
  "greenTheme",
  "blueTheme",
  "waterTheme",
  "yellowTheme",
];

const body = document.querySelector("body");

const themeIcon = document.querySelector("#theme");

document.querySelector("#theme").addEventListener("click", function () {
  const currentThemeIndex = theme.indexOf(body.className);
  const nextThemeIndex = (currentThemeIndex + 1) % theme.length;
  body.className = theme[nextThemeIndex];
  setSVGToCursor()
});

const setSVGToCursor = () => {
  const primaryColor =
    getComputedStyle(body).getPropertyValue("--primary-color");

  const primaryColorWithoutHash = primaryColor.replace(/#/g, "");

  const cursor = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-satellite' width='50' height='50' viewBox='0 0 24 24' stroke-width='2' stroke='%23${primaryColorWithoutHash}' fill='%23${primaryColorWithoutHash}' stroke-linecap='round' stroke-linejoin='round'><path stroke='none' d='M0 0h24v24H0z' fill='none'/><path d='M3.707 6.293l2.586 -2.586a1 1 0 0 1 1.414 0l5.586 5.586a1 1 0 0 1 0 1.414l-2.586 2.586a1 1 0 0 1 -1.414 0l-5.586 -5.586a1 1 0 0 1 0 -1.414z' /><path d='M6 10l-3 3l3 3l3 -3' /><path d='M10 6l3 -3l3 3l-3 3' /><path d='M12 12l1.5 1.5' /><path d='M14.5 17a2.5 2.5 0 0 0 2.5 -2.5' /><path d='M15 21a6 6 0 0 0 6 -6' /></svg>"), auto`;

  body.style.cursor = cursor;
};

setSVGToCursor();
