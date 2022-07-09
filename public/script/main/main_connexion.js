// variable

var user = {};
var userImg ;

function login() {
  let email = $("#con_matricule").value + "@ifran.com";
  let password = $("#con_password").value;
  auth
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      localStorage.setItem("ifran_isLogin", "true");
    })
    .then(() => {
      db.collection("users")
        .where("matricule", "==", $("#con_matricule").value)
        .get()
        .then((snap) => {
          snap.forEach((doc) => {
            user = doc.data();
            localStorage.setItem("ifran_user", JSON.stringify(user));
          });
        })
        .then(() => {
            imgRef = JSON.parse(localStorage.getItem('ifran_user')).imgRef
          getPicture(imgRef);
        }).then(()=>{
            window.location.href= 'index.html'
        })
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert("vous avez entrez de mauvais accès");
    });
}

function getPicture(imgRef) {
  
  storageRef.child(imgRef).getDownloadURL().then((url) => {
    userImg = url;
    localStorage.setItem("ifran_userImg", userImg);
  });
  
}

$("#con_submit").addEventListener("click", login);
