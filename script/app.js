


function handleFloatingLabel() {
   const input = document.querySelector(".js-floating-input");
   const label = document.querySelector(".js-floating-label");

    input.addEventListener("focus", function() {
        label.classList.add("is-floating");
    });

    input.addEventListener("blur", function() {
        if (!input.value) {
            label.classList.remove("is-floating");
        } else {
            label.classList.add("is-floating");
        }
    });

}

function handlePasswordSwitcher() {

    // const passwordOptions = ['password', 'text'];

    // passwordToggle.addEventListener('change', function () {
    //     passwordInput.type = passwordOptions[+this.checked];
    // });
    const btn = document.querySelector(".js-password-toggle");

    btn.addEventListener("change", function() {
        const input = document.querySelector(".js-password-input")
        if(input.type === "password") {
            input.type = "text";
        } else {
            input.type = "password";
        }
    })

}

document.addEventListener('DOMContentLoaded', function () {
    console.log('Script loaded!');
    handleFloatingLabel();
    handlePasswordSwitcher();
});