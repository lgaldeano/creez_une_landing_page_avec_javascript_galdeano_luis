// DOM Elements variables
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeData = document.querySelector(".close");
const closeValidations = document.querySelector(".close-validation");
const visuSpan = document.querySelectorAll(".alertMessage");
const subMit = document.querySelector(".btn-submit");
const submitvalid = document.querySelector(".submitvalid");
const radioLabel = document.querySelector(".radio-label");
const modalValid = document.querySelector(".submitvalid");
const radioTournois = document.querySelector(".radio-tournois");
const validMail = document.getElementById("email");
const validFirstname = document.getElementById("first");
const validName = document.getElementById("last");
const nombresTournois = document.getElementById("quantity");
const fermeValid = document.getElementById("fermevalid");
const validAnniv = document.getElementById("birthdate");
const validAnnivspan = document.querySelector(".validanniv");
//const validCondition = document.getElementById("checkbox1");
const validConditionSpan = document.querySelector(".condition-vente");

//-----------------------------------Function-----------------------------------
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
//Function Regex Email
function controlEmail() {
  const regexEmail = /\S+@\S+\.\S+\S+/;
  if (validMail.value.search(regexEmail) === 0) {
    visuSpan[2].style.display = "none";
    return true;
  } else if (validMail.value.search(regexEmail) === -1) {
    visuSpan[2].style.display = "inline";
    return false;
  }
}
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  reLoad();
}

// close form
function closeForm() {
  modalbg.style.display = "none";
}
function closeValidation() {
  modalValid.style.display = "none";
}

// launch modal valid
function launchModalvalid() {
  modalValid.style.display = "block";
}

// close form valid
function closeFormvalid() {
  modalValid.style.display = "none";
}

function reLoad() {
  radioLabel.style.display = "none";
}

//Validation formulaire
function validFormulaire(e) {
  e.preventDefault();
  let formulaireOk = true;
  if (!validationPrenom()) {
    formulaireOk = false;
  }
  if (!validationNom()) {
    formulaireOk = false;
  }
  if (!controlEmail()) {
    formulaireOk = false;
  }
  if (!validAnniversaire()) {
    formulaireOk = false;
  }

  if (!validationNombretournois()) {
    formulaireOk = false;
  }
  if (!validationVille()) {
    formulaireOk = false;
  }
  if (!validationCondition()) {
    formulaireOk = false;
  }

  if (formulaireOk) {
    closeForm();
    launchModalvalid();
  }
}

//Prénom
function validationPrenom() {
  if (validFirstname.value.length <= 1) {
    visuSpan[0].style.display = "inline";
    return false;
  } else {
    visuSpan[0].style.display = "none";
    return true;
  }
}
//nom
function validationNom() {
  if (validName.value.length <= 1) {
    visuSpan[1].style.display = "inline";
    return false;
  } else {
    visuSpan[1].style.display = "none";
    return true;
  }
}

//Date anniverssaire
function validAnniversaire() {
  if (validAnniv.value === "") {
    validAnnivspan.style.display = "inline";
    return false;
  } else {
    validAnnivspan.style.display = "none";
    return true;
  }
}

//Nombre de tournois
function validationNombretournois() {
  if (nombresTournois.value === "") {
    radioTournois.style.display = "block";
    return false;
  } else {
    radioTournois.style.display = "none";
    return true;
  }
}

// Choix d'une ville
function validationVille() {
  let choixUtilisateur = false;

  for (i = 1; i < 7; i++) {
    if (document.querySelector(`input[id=location${i}]`).checked) {
      choixUtilisateur = true;
    }
  }
  if (choixUtilisateur === false) {
    radioLabel.style.display = "block";
  } else {
    radioLabel.style.display = "none";
  }
  return choixUtilisateur;
}

//Validation des conditions de vente
function validationCondition() {
  let validCondition = false;
  if (document.querySelector(`input[id=checkbox1]`).checked) {
    validCondition = true;
  }
  if (validCondition === false) {
    validConditionSpan.style.display = "block";
  } else {
    validConditionSpan.style.display = "none";
  }
  return validCondition;
}

//----------------------------------------------------------------------------------------

// code au demarage
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeData.addEventListener("click", closeForm);
closeValidations.addEventListener("click", closeValidation);
subMit.addEventListener("click", validFormulaire);
fermeValid.addEventListener("click", closeValidation);

