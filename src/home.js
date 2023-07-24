document.addEventListener('DOMContentLoaded', function () {
    const GoButton = document.getElementById('go-button');
    const Chooser = document.getElementById("webpage-chooser");
    GoButton.onclick = function () {
        window.location.href = "./" + Chooser.value + ".html";
    }
});
