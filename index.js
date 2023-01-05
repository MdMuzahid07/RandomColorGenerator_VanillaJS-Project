const colorCode = document.getElementById("colorCode");

const colorContainer = document.getElementById("bgColor");

const button = document.getElementById("randomTrigger").addEventListener('click', () => {


    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const black = Math.floor(Math.random() * 255);

    const rgb = `rgb(${red}, ${green}, ${black})`;

    colorCode.innerText = rgb;

    colorContainer.style.backgroundColor = rgb;
});

