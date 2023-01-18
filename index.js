const clickClass = document.querySelector('.click');
const baseColor = 'rgb(174, 120, 225)';
const otherColor = 'black';

function init() {
    clickClass.style.color = baseColor;
    clickClass.addEventListener('click', handleClick);
}

function handleClick() {
    const currentColor = clickClass.style.color;
    if(currentColor === baseColor) {
        clickClass.style.color = otherColor;
    } else {
        clickClass.style.color = baseColor;
    }
}

init();