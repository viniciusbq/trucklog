const loginBtn = document.getElementById('login-btn');
const userName = document.getElementById('user-name');
const dropdownUser = document.getElementById('dropdown-user');

let userLogado = JSON.parse(localStorage.getItem('userLogado'));

if (userLogado != null) {
  loginBtn.style.display = 'none';
  dropdownUser.style.display = 'block';
  userName.innerHTML = userLogado.nome;
  function verificarLogin() {
    window.location.href = '../meus-posts/index.html';
  }
} else {
  loginBtn.style.display = 'block';
  dropdownUser.style.display = 'none';
  function verificarLogin() {
    window.location.href = '../login/index.html';
  }
}
