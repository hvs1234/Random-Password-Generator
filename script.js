const passwordInput = document.getElementById('password-input');
const generateBtn = document.getElementById('generate-btn');
const copy = document.getElementById('copy');

const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|{}[]<>/-=";

const allchars = upperCase + lowerCase + number + symbol;

generateBtn.addEventListener('click',() => {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(length > password.length)
    {
        password += allchars[Math.floor(Math.random() * allchars.length)];
    }

    passwordInput.value = password;
});

copy.addEventListener('click',() => {
    passwordInput.select();
    document.execCommand('copy');
});