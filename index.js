document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
});

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    location.replace("welcome.html");
  }
});

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch((error) => {
      // document.getElementById("error").innerText = error.message;
    });
}

function d_login() {
  const email = "chhoti@gmail.com";
  const password = "donehuwa";
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch((error) => {
      // document.getElementById("error").innerText = error.message;
    });
}

function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      document.getElementById("error").innerText =
        "welcome" + userCredential.user;
    })
    .catch((error) => {
      // document.getElementById("error").innerText = error.message;
    });
}

function forgotpass() {
  const email = document.getElementById("email").value;
  firebase
    .auth()
    .sendPasswordResetEmail(email)
    .then(() => {
      alert("Reset link sent to your email id");
    })
    .catch((error) => {
      document.getElementById("error").innerText = error.message;
    });
}
