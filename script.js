const inputBox = document.querySelector('[name="password-box"]');

const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const digits = "0123456789";

const symbols = '~!@#$%^&*()_+:"?><|\\/';

function handlePassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += digits[Math.floor(Math.random() * digits.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];
  const mixed = lowerCase + symbols + digits + upperCase;
  while (length > password.length) {
    password += mixed[Math.floor(Math.random() * mixed.length)];

    inputBox.value = password;
  }
}

function copy() {
  inputBox.select();
  document.execCommand("copy");
}
