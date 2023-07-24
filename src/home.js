document.addEventListener('DOMContentLoaded', function () {
    const GoButton = document.getElementById('go-button');
    const Chooser = document.getElementById("webpage-chooser");
    GoButton.onclick = function () {
        switch (Chooser.value) {
            case "games":
                window.location.href = "./games";
                break;

            case "music":
                window.location.href = "./music";
                break;

            case "misc":
                window.location.href = "./misc";
                break;

            default:
                console.warn("yeah this isn't supposed to happen huh\nhome.js uhhhh idk what else");
                window.location.href = "./404";
                break;
        }
    }
});
