const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const afterBtn = document.getElementById('after');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

afterBtn.addEventListener('click', () => {
    alert("Account created succesfully");
});