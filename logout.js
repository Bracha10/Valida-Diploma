
function logout() {
  firebase.auth().signOut().then(() => {
    window.location.href = 'login.html';
  }).catch((error) => {
    alert("Erro ao sair: " + error.message);
  });
}
