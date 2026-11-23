
const photoInput = document.getElementById("photoInput");
const preview = document.getElementById("preview");
const placeholder = document.getElementById("placeholder");

photoInput.addEventListener("change", function () {

    const file = this.files[0];

    if (file && file.type.startsWith("image/")) {

        const reader = new FileReader();

        reader.onload = function (event) {
            preview.src = event.target.result;
            preview.style.display = "block";
            placeholder.style.display = "none";
        };

        reader.readAsDataURL(file);
    }

});

function openConfession() {
    const screen = document.getElementById("openingScreen");

    screen.classList.add("hide");

    setTimeout(() => {
        screen.style.display = "none";
    }, 800);
}