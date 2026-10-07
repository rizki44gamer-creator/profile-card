const button = document.getElementById("btn");

button.addEventListener("click", () => {

    document.body.classList.toggle("active");

    if (document.body.classList.contains("active")) {
        button.textContent = "LIMIT SURPASSED";
    } else {
        button.textContent = "SURPASS MY LIMITS";
    }

});