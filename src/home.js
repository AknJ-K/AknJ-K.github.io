document.addEventListener('DOMContentLoaded', function () {
    const GoButton = document.getElementById('go-button')
    const Chooser = document.getElementById("webpage-chooser")
    GoButton.onclick = function () {

        switch (Chooser.value) {
            case "games":
                window.location.href = "./games.html"
                break;

            case "music":
                window.location.href = "./music.html"
                break;

            case "misc":
                window.location.href = "./misc.html"
                break;

            default:
                window.location.href = "./not_found.html"
                break;
        }
    }
})
