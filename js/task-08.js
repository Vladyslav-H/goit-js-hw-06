const formEl = document.querySelector(".login-form");
const buttonEL = document.querySelector("button");
formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const emailValue = event.currentTarget.elements.email.value;
  const passwordValue = event.currentTarget.elements.password.value;
  const formData = {
    name: emailValue,
    password: passwordValue,
  };

  if (emailValue.length === 0 || passwordValue.length === 0) {
    alert(`All fields must have value !!!`);
  } else {
    console.log(formData);
  }
  event.target.reset();
}
