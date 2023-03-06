const emailUser = document.getElementById('userEmail');
const nomeUser = document.getElementById('userName');
const mensagens = document.getElementById('messages');
const comentarioUser = document.getElementById('comment');
const date = new Date();
const year = date.getFullYear();
const day = date.getDate();
const month = date.toLocaleDateString('PT-BR', { month: 'short' });
const hour = date.getHours();
const min = date.getMinutes();

function postComment() {
  if (nomeUser.value === '') {
    return alert('Digite o Nome !');
  } else if (emailUser.value === '') {
    return alert('Digite o Email !');
  } else {
    fetch('https://json-vercel.vercel.app/coments', {
      method: 'POST',
      body: JSON.stringify({
        nome: nomeUser.value,
        email: emailUser.value,
        comentario: comentarioUser.value,
        dayPost: day,
        monthPost: month,
        yearPost: year,
        hora: hour,
        minutos: min,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(function (response) {
        return console.log(response.json());
      })
      .then(function (data) {
        window.location.reload();
        nome = document.getElementById('postName');
        email = document.getElementById('postEmail');
        comentario = document.getElementById('postComent');
        nome.innerHTML = data.nome;
        email.innerHTML = data.email;
        comentario.innerHTML = data.comentario;
      })
      .catch((error) => console.error('Error:', error));
  }
}

async function addComents() {
  const response = await fetch('https://json-vercel.vercel.app/coments');

  const data = await response.json();
  console.log(data);

  data.map((response) => {
    const div = document.createElement('div');
    const namePost = document.createElement('h2');
    const emailPost = document.createElement('p');
    const comentPost = document.createElement('p1');
    const dataPost = document.createElement('p3');
    const horaPost = response.hora < 10 ? `0${response.hora}` : response.hora;
    const minPost =
      response.minutos < 10 ? `0${response.minutos}` : response.minutos;
    namePost.innerText = response.nome;
    emailPost.innerText = response.email;
    comentPost.innerText = `"${response.comentario}"`;
    dataPost.innerHTML = `${response.dayPost} de ${response.monthPost} de ${response.yearPost}<br/>${horaPost}:${minPost}`;

    div.appendChild(namePost);
    div.appendChild(dataPost);
    div.appendChild(emailPost);
    div.appendChild(comentPost);

    mensagens.appendChild(div);
  });
}

addComents();
