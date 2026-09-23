const TOTAL_DIVS = 256;
const container = document.querySelector(".container");
for (let i = 0; i < TOTAL_DIVS; i++) {
    const div = document.createElement("div");
    container.appendChild(div);
    div.classList.add('div');
}