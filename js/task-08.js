const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', event => {
  event.preventDefault();

  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.password;

  if (emailInput.value === '' || passwordInput.value === '') {
    alert('! ! ! Усі поля форми мають бути заповнені ! ! !');
  } else {
    const formData = {
      email: emailInput.value,
      password: passwordInput.value,
    };
    console.log(formData);
    loginForm.reset();
  }
});
