const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value) / 100;

  const bmi = (weight / (height * height)).toFixed(2);

  const value = document.getElementById("value");
  let description = "";

  value.classList.add("attenction");

  document.getElementById("infos").classList.remove("hidden");

  if (bmi < 18.5) {
    description = "Cuidado! Você está abaixo do peso!";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    description = "Você está no peso ideal!";
    value.classList.remove("attenction");
    value.classList.add("normal");
  } else if (bmi >= 25.0 && bmi <= 29.9) {
    description = "Cuidado! Você está com sobrepeso!";
  } else if (bmi >= 30.0 && bmi <= 34.9) {
    description = "Cuidado! Você está com Obesidade moderada!";
  } else if (bmi >= 35.0 && bmi <= 39.9) {
    description = "Cuidado! Você está com Obesidade severa!";
  } else {
    description = "Cuidado! Você está com Obesidade morbida!";
  }

  value.textContent = bmi.replace(".", ",");
  document.getElementById("description").textContent = description;
});
