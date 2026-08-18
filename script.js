function showPage(pageNumber) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {
        page.classList.remove("active");
    });

    const selectedPage = document.getElementById("page" + pageNumber);

    if (selectedPage) {
        selectedPage.classList.add("active");
        window.scrollTo(0, 0);
    }
}


// DATE OF BIRTH QUESTION
function answerDOB(answer) {

    const message = document.getElementById("dobMsg");

    if (answer === "correct") {

        message.innerHTML = "Correct! 🥹❤️ You remembered it!";

        message.className = "correct";

        setTimeout(function() {
            showPage(2);
        }, 1000);

    } else {

        message.innerHTML = "Ayyoo 😭 Wrong answer... Try again ❤️";

        message.className = "wrong";
    }
}


// LOVE PUZZLE
function answerLove(answer) {

    const message = document.getElementById("loveMsg");

    if (answer === "correct") {

        message.innerHTML = "Of course! 🥹❤️";

        message.className = "correct";

        setTimeout(function() {
            showPage(3);
        }, 1000);

    } else {

        message.innerHTML = "Nooo 😭 Think again! ❤️";

        message.className = "wrong";
    }
}


// NEXT PAGE BUTTONS
function nextPage(pageNumber) {
    showPage(pageNumber);
}
