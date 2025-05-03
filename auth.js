
const firebaseConfig = {
  // cole seu firebaseConfig aqui
};
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(function(user) {
  if (!user) {
    window.location.href = 'login.html';
  }
});
