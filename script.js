function showPage(pageNumber) {

    document.querySelectorAll(".page").forEach(function(page) {
        page.classList.remove("active");
    });

    document.getElementById("page" + pageNumber).classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function nextPage(pageNumber) {
    showPage(pageNumber);
}


// Date of birth answer
function checkAnswer(answer) {

    const msg = document.getElementById("answerMsg");

    if (answer === "jul") {

        msg.innerHTML = "❤️ Correct! That's our special date 🥹";

        msg.style.color = "#e91e63";

        setTimeout(function() {
            showPage(2);
        }, 1000);

    } else {

        msg.innerHTML = "😜 Wrong answer! Once again try cheyyi ❤️";

        msg.style.color = "#e00035";
    }
}


// Puzzle answer
function puzzleAnswer(answer) {

    const msg = document.getElementById("puzzleMsg");

    if (answer === "forever") {

        msg.innerHTML = "🥹❤️ Correct! Forever and ever!";

        msg.style.color = "#e91e63";

        setTimeout(function() {
            showPage(4);
        }, 1000);

    } else {

        msg.innerHTML = "😂 Koncham kaadu... chaalaaa love! ❤️";

        msg.style.color = "#e00035";
    }
}
