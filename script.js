const TOTAL_DIVS = 256;
const container = document.querySelector(".container");
for (let i = 0; i < TOTAL_DIVS; i++) {
    const div = document.createElement("div");
    container.appendChild(div);
    div.classList.add('div');
}

// 256 × 256 × 256 = 16.777.216 -- MAXIMA CANTIDAD DE NUMEROS RGB (NUMEROS HEDECIMALES)
const MAX_RGB_NUMBERS = 16777215 // Es 16777216, pero se le resta 1 porque se arranca desde 0.
const divs = document.querySelectorAll(".div");

divs.forEach((div) => {
    div.addEventListener("mouseover", (event) => {
    let randomHex = Math.floor(Math.random() * MAX_RGB_NUMBERS) // Math.random() - Genera numero decima entre 0 y 1
        .toString(16) // Convierte los numeros en hexadecimal
        .padStart(6, '0'); // Si da un hexadecimal con menos de 6 caracteres, se le agregan 0 para completar
    
    const target = event.target;
    target.style.backgroundColor = "#" + randomHex;
    });
});