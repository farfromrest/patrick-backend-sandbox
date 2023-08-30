console.log('yo');
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log(event);
  const email = event.target.elements.email.value;
  const password = event.target.elements.password.value;

  fetch('/new-login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => res.json())
    .then((json) => console.log(json));
});
