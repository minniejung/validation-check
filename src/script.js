// TODO : DOM으로부터 필요한 엘리먼트를 불러오세요.
let elInputUsername = document.querySelector("#username");
let elFailureMessage = document.querySelector(".failure-message");
let elSuccessMessage = document.querySelector(".success-message");

let inputPassword = document.querySelector("#password");
let inputPasswordRetype = document.querySelector("#password-retype");
let passwordMismatchMsg = document.querySelector(".mismatch-message");

// VALIDATION CHECK - ID
elInputUsername.onkeyup = function () {
  let isValid = isMoreThan4Length(elInputUsername.value);

  elSuccessMessage.classList.toggle("hide", !isValid);
  elFailureMessage.classList.toggle("hide", isValid);
};

function isMoreThan4Length(value) {
  return value.length >= 4;
}

// VALIDATION CHECK - PASSWORD
inputPasswordRetype.onkeyup = function () {
  let isMatching = isMatch(inputPassword.value, inputPasswordRetype.value);

  passwordMismatchMsg.classList.toggle("hide", isMatching);
};

function isMatch(password1, password2) {
  return password1 === password2;
}
