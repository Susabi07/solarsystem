const theme = ['yellowTheme', 'purpleTheme', 'altTheme', 'greenTheme', 'blueTheme']

const body = document.querySelector('body');

document.querySelector('#theme').addEventListener('click', function() {
    const currentThemeIndex = theme.indexOf(body.className);
    const nextThemeIndex = (currentThemeIndex + 1) % theme.length;
    body.className = theme[nextThemeIndex];
});
