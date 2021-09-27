firebase.auth().onAuthStateChanged((user) => {
  if (!user) {
    location.replace("index.html");
  } else {
    document.getElementById("user").innerText = "Hello " + user.email;
  }
});

function logout() {
  firebase.auth().signOut();
}
