const sumSlider = document.getElementById("sumSlider");
const yearSlider = document.getElementById("yearSlider");

const sumOutput = document.getElementById("sumBox");
const yearOutput = document.getElementById("yearBox");

const costs = document.querySelector('.cost-container');

const totalCost = document.getElementById("totalCost");
const monthlyCost = document.getElementById("perMonth")

const outputFromSum = document.getElementById("sumValue");
const outputFromYear = document.getElementById("yearValue");

function calculateCost() {
  totalCost.innerHTML = `${(sumSlider.value * 1.054)} Riksdaler 💲 🤑`;
  monthlyCost.innerHTML = `${parseFloat((sumSlider.value * 1.054) / (yearSlider.value * 12)).toFixed(2)} Riksdaler 💲 🤑`;  
}

sumSlider.oninput = function(){
    outputFromSum.value = sumSlider.value;
  calculateCost();  
}


yearSlider.oninput = function(){
    outputFromYear.value = yearSlider.value;
  calculateCost();
}

outputFromSum.oninput = function(){
    sumSlider.value = outputFromSum.value;
  calculateCost();
}

outputFromYear.oninput = function(){
    yearSlider.value = outputFromYear.value;
  calculateCost();
}

