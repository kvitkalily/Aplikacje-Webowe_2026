//zegar 
// https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
const clock = document.getElementById("clock");

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date - metody dat
// https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent - przetwarzanie w string
function updateClock() {
  const now = new Date();
  clock.textContent = now.toLocaleDateString() + " , " + now.toLocaleTimeString();
}
//https://developer.mozilla.org/en-US/docs/Web/API/Window/setInterval
updateClock(); // uruchomienie natychmiastowe
setInterval(updateClock, 1000);

//przycisk wroc na gore
// https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo
const toTopBtn = document.getElementById("to-top");

if (toTopBtn) {
  toTopBtn.addEventListener("click", function () {
    window.scrollTo(0, 0);
  });
}
