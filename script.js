function showPage(number) {

  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });

  document.getElementById("page" + number)
    .classList.add("active");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* PAGE 1 */

function correct1() {

  document.getElementById("wrong1").innerHTML =
    "Correcttt... ❤️ You remembered!";

  setTimeout(() => {
    showPage(2);
  }, 1000);
}


/* PAGE 2 */

function correct2() {

  document.getElementById("wrong2").innerHTML =
    "Puzzle solved... 💕";

  setTimeout(() => {
    showPage(3);
  }, 1000);
}


/* WRONG ANSWERS */

function wrong(page) {

  document.getElementById("wrong" + page).innerHTML =
    "Ayyoo 😄 once more try cheyyi ❤️";

}


/* NEXT PAGES */

function nextPage(number) {

  showPage(number);

}


/* FINAL YES */

function yesAnswer() {

  showPage(7);

}


/* FINAL NO */

function noAnswer() {

  document.getElementById("finalMessage").innerHTML =
    "Oka sari malli alochinchi choose cheyyi 🥹❤️";

}
