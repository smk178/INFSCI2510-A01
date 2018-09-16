var main = (function () {

    var askNameAgain = function () {
        localStorage.name = null;
        askName();
    }

    var askName = function () {

        var name = "";

        if (localStorage && localStorage.name && localStorage.name == "null") {
            localStorage.name = window.prompt("Hi, Your Name?");;
            name = localStorage.name;
        } else if (localStorage && localStorage.name && localStorage.name !== "null") {
            name = localStorage.name;
        } else {
            name = window.prompt("Hi, Your Name?");
        }

        var welcomeSpan = document.getElementById("name");

        welcomeSpan.innerHTML = name === "" || name === "null" ? "Stranger" : name;
    }

    var init = function () {

        askName();

        var welcomeSpan = document.getElementById("name");

        welcomeSpan.addEventListener("click", askNameAgain);
    }


    return {
        init: init
    }

})();