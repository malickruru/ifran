//La page d'inscription des étudiants

//variable

let index = 1;
let user = {};

//fonction
const verifyCredential = () => {
  if (
    $("#ins_matricule").value != "" &&
    $("#ins_password").value == $("#ins_comfirm_password").value
  ) {
    return "ok";
  }
};

function changeStep() {
  //verifier que les champs sont bien remplits
  if (index == 3 && verifyCredential() != "ok") {
    $("#ins_matricule").style.border = "1px red solid";
    $("#ins_password").style.border = "1px red solid";
    $("#ins_comfirm_password").style.border = "1px red solid";
    return;
  }
  //transition
  HideStep(index);
  index++;
  $("#ins_progression").innerHTML = index + "<b> /4</b>";
}

function addUser() {
  //enregistrer les infos dans user
  user.nom = $("#ins_nom").value;
  user.email = $("#ins_email").value;
  user.commune = $("#ins_commune").value;
  user.prenom = $("#ins_prenom").value;
  user.num = $("#ins_num").value;
  user.nation = $("#ins_nation").value;
  user.specialite = $("#ins_specialite").value;
  user.AnneInscription = $("#ins_AnneInscription").value;
  user.emploi = $("#ins_emploi").value;
  user.competences = $("#ins_competences").value;
  user.niveau = $("#ins_niveau").value;
  user.AnneSortie = $("#ins_AnneSortie").value;
  user.entreprise = $("#ins_entreprise").value;
  user.matricule = $("#ins_matricule").value;
  user.password = $("#ins_password").value;
  $(".popup").classList.remove("d-none");
  let email = user.matricule + "@ifran.com"
  //créer l'utilisateur dans la bd
  auth
    .createUserWithEmailAndPassword(email, user.password)
    .then((res) => {
        db.collection("users").add({
            nom: $("#ins_nom").value,
            email: $("#ins_email").value,
            commune: $("#ins_commune").value,
            prenom: $("#ins_prenom").value,
            num: $("#ins_num").value,
            nation: $("#ins_nation").value,
            specialite: $("#ins_specialite").value,
            AnneInscription: $("#ins_AnneInscription").value,
            emploi: $("#ins_emploi").value,
            competences: $("#ins_competences").value,
            niveau: $("#ins_niveau").value,
            AnneSortie: $("#ins_AnneSortie").value,
            entreprise: $("#ins_entreprise").value,
            matricule: $("#ins_matricule").value,
            password: $("#ins_password").value
        }).then(() => {
            var file = $("#ins_photo").files[0];
            var ext = file.name.split('.').pop();
            var thisRef = storageRef.child(user.matricule + "." + ext);
            thisRef.put(file).then(()=>{
                $(".popup").classList.add("d-none");
                alert('inscription réussit')
            })
        })
        
    })
    .catch((err) => {
      alert(err.message);
      console.log(err.code);
      console.log(err.message);
    });
}

//ecouteur d'evenement

for (let i = 1; i < 4; i++) {
  $(`#ins_next_${i}`).addEventListener("click", changeStep);
}

$(`#ins_valider`).addEventListener("click", addUser);
