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
//* funkcja akceptowania
function akcept() {
  const strzal = document.querySelector("#txt").value;
  console.log(strzal);
  document.querySelector("#txt").value = "";
  //* sprawdzanie czy liczba jest
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
chack;
