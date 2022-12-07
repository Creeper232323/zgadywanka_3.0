let czyZalogowany = false;
//*zmienne
let number;
//* jądro
gen();
function gen() {
  number = Math.floor(Math.random() * 100);
  console.log(number);
}
//*akceptowanie po butonie
document.querySelector("#btn").addEventListener("click", () => {
  akcept();
});
//* akceptowanie po enterze
document.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    akcept();
  }
});
document.querySelector("#txt").addEventListener("input", () => {
  const lic = document.querySelector("#txt").value;
  if (lic > 100) {
    document.querySelector("#ws").textContent = "liczba jest poza zakresem!";
    document.querySelector("#box-with-arrow").style.display = "block";
  } else if (lic < 100) {
    if (lic < 0) {
      document.querySelector("#ws").textContent = "liczba jest poza zakresem!";
      document.querySelector("#box-with-arrow").style.display = "block";
    } else {
      document.querySelector("#ws").textContent = "graj dalej!";
      document.querySelector("#box-with-arrow").style.display = "none";
    }
  }
});
//* funkcja akceptowania
function akcept() {
  const strzal = document.querySelector("#txt").value;
  console.log(strzal);
  document.querySelector("#txt").value = "";
  //* sprawdzanie liczby
  if (strzal == number) {
    document.querySelector("#kom").textContent = "gratulacje zgadłeś!";
    document.querySelector("#ws").textContent = "";
  } else {
    document.querySelector("#kom").textContent =
      "nie udało się spróbuj ponownie!";
    if (strzal > number) {
      document.querySelector("#ws").textContent =
        "wylosowana liczba jest mniejsza!";
    } else {
      document.querySelector("#ws").textContent =
        "wylosowana liczba jest większa!";
    }
  }
}
//* przycisk reset

document.querySelector("#res").addEventListener("click", () => {
  gen();
  document.querySelector("#kom").textContent = "";
  document.querySelector("#ws").textContent = "";
});
