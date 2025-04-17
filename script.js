const passwordInput = document.getElementById("password");
const strengthBar = document.getElementById("strength-bar");
const strengthText = document.getElementById("strength-text");
const toggleVisibility = document.getElementById("toggle-visibility");


toggleVisibility.addEventListener("click", () => {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleVisibility.textContent = "🙈";
    } else {
        passwordInput.type = "password";
        toggleVisibility.textContent = "👁️";
    }
});


passwordInput.addEventListener("input", () => {
    const password = passwordInput.value;
    const strength = calculateStrength(password);

    updateStrengthBar(strength);
});


function calculateStrength(password) {
    let strength = 0;

    const lengthCheck = password.length >= 8;
    const uppercaseCheck = /[A-Z]/.test(password);
    const lowercaseCheck = /[a-z]/.test(password);
    const numberCheck = /[0-9]/.test(password);
    const symbolCheck = /[^A-Za-z0-9]/.test(password);

    if (lengthCheck) strength++;
    if (uppercaseCheck) strength++;
    if (lowercaseCheck) strength++;
    if (numberCheck) strength++;
    if (symbolCheck) strength++;

    return strength;
}


function updateStrengthBar(strength) {
    const colors = ["#ccc", "#ff4b5c", "#ffa500", "#f7d100", "#9acd32", "#4caf50"];
    const texts = [
        "Password is expected...",
        "Very Weak 😞",
        "Weak 😕",
        "Middle 🙂",
        "Strong 😎",
        "Very Strong💪"
    ];

    const widthPercent = (strength / 5) * 100;
    strengthBar.style.width = `${widthPercent}%`;
    strengthBar.style.backgroundColor = colors[strength];
    strengthText.textContent = texts[strength];
}