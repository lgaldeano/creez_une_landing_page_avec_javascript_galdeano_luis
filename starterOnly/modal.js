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
const visuSpan = document.querySelectorAll(".alertMessage");
const subMit = document.querySelector(".btn-submit");
const submitvalid = document.querySelector(".submitvalid");
const radioLabel = document.querySelector(".radio-label");
const modalValid = document.querySelector(".submitvalid");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeData.addEventListener("click", closeForm);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  reLoad();
}

// close form
function closeForm() {
  modalbg.style.display = "none";
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


//Control submit

const validMail = document.getElementById("email");
subMit.addEventListener("click", (e) => {
  e.preventDefault();
  
  if(!controlEmail()) {
    return
  }
  
  // Choix d'une ville
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
});
function reLoad() {
  radioLabel.style.display = "none";
}

//Regex Email
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

//Au moins un tournois

