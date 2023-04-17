const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', event => {
  event.preventDefault();

  const emailInput = loginForm.elements.email.value;
  const passwordInput = loginForm.elements.password.value;

  if (emailInput === '' || passwordInput === '')
    return alert('! ! ! Усі поля форми мають бути заповнені ! ! !');

  {
    const formData = {
      email: emailInput,
      password: passwordInput,
    };
    console.log(formData);
    event.target.reset();
  }
});
