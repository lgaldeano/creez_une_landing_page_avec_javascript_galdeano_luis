function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
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

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeData.addEventListener("click", closeForm);
closeValidations.addEventListener("click", closeValidation);

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

//Valid form

//Prénom
const validFirstname = document.getElementById("first");
validFirstname.addEventListener("input", () => {
  if (validFirstname.value.length <= 1) {
    visuSpan[0].style.display = "inline";
  } else {
    visuSpan[0].style.display = "none";
  }
});
//nom
const validName = document.getElementById("last");
validName.addEventListener("input", () => {
  if (validName.value.length <= 1) {
    visuSpan[1].style.display = "inline";
  } else {
    visuSpan[1].style.display = "none";
  }
});

// Choix d'une ville

const validMail = document.getElementById("email");
subMit.addEventListener("click", (e) => {
  e.preventDefault();

  if (!controlEmail()) {
    return;
  }

  let choixUtilisateur = false;

  for (i = 1; i < 7; i++) {
    if (document.querySelector(`input[id=location${i}]`).checked) {
      choixUtilisateur = true;
    }
  }

  if (choixUtilisateur === false) {
    radioLabel.style.display = "block";
  } else {
    reLoad();
    closeForm();
    launchModalvalid();
  }
  cityChoice = [];
  validationNombresTournois();
});

function reLoad() {
  radioLabel.style.display = "none";
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

//Nombre de tournois
let nombresTournois = document.getElementById("quantity");

function validationNombresTournois() {
  if ((nombresTournois.value = "")) {
    radioTournois.style.display = "block";
  } else {
    radioTournois.style.display = "none";
  }
  console.log(nombresTournois);
}
