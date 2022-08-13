const usernameInput = document.querySelector('#name');
const ccNumber = document.querySelector('#cc-num');
const cvvInput = document.querySelector('#cvv');
const zip = document.querySelector('#zip');
const emailInput = document.querySelector('#email');
const title = document.querySelector('#title');
const otherJob = document.querySelector('#other-job-role');
const design = document.querySelector('#design');
const colorInput = document.querySelector('#color');
const actTotal = document.querySelector('#activities-cost');
const activities = document.querySelector('#activities');
const actBox = document.querySelector('#activities-box');
const form = document.querySelector('form');
const checkboxInput = document.querySelectorAll("input[type='checkbox']");

// 1. focus on the username input :
// 2. hiding the other job role input
// 3. disable the color input 
// 4. disable paypal tab
// 5. disable bitcoin tab
// 6. make credit card default choise
window.onload = function() {
   usernameInput.focus();
   otherJob.style.display = "none";
   colorInput.disabled = true;
   payPal.style.display = "none";
   bitCoin.style.display = "none";
   payment.value = 'credit-card';
};

// hiding or showing the extra job input area
function jobRoleDisplay() {
   if (title.value === 'other') {
       otherJob.style.display = "block";
   } else {
       otherJob.style.display = "none";
   }
}
title.addEventListener('change', jobRoleDisplay);

// design and color :
function witchDesign(e) {
   for (i = 0; i < colorInput.length; i++) {
   let select = e.target.value;
   let selectIndex = colorInput[i];
   let select2 = selectIndex.getAttribute('data-theme');
   if (select === select2) {
       colorInput.disabled = false;
       selectIndex.hidden = false;
       selectIndex.selected = true;
   } else {
       colorInput.disabled = false;
       selectIndex.hidden = true;
       selectIndex.selected = false;
   }
}
}
design.addEventListener('change', witchDesign);

//activity total cost 
let totalCost = 0;


function changeCost(e) {
   let cost = parseInt(e.target.getAttribute('data-cost'));
   if (e.target.checked) {
       totalCost += cost;
   } else {
       totalCost -= cost;
   }
   actTotal.textContent = `Total: $${totalCost}`;

   // disabled same date and time class
   for (i=0; i < checkboxInput.length; i++) {

    let dayTime = checkboxInput[i].dataset.dayAndTime
    let eTargetData = e.target.dataset.dayAndTime;

    if (eTargetData === dayTime && e.target.checked === true) {
        checkboxInput[i].disabled = true;
        checkboxInput[i].parentNode.classList.add('disabled');
        e.target.disabled = false;
        e.target.parentElement.classList.remove('disabled');

    } else if (eTargetData !== dayTime && checkboxInput[i].disabled === false) {
        checkboxInput[i].disabled = false;
        checkboxInput[i].parentNode.classList.remove('disabled');
        e.target.disabled = false;
        e.target.parentElement.classList.remove('disabled');

    } else if (eTargetData === dayTime && e.target.checked === false) {
        checkboxInput[i].disabled = false;
        e.target.disabled = false;
        e.target.parentElement.classList.remove('disabled');
        checkboxInput[i].parentElement.classList.remove('disabled');
    }
   }
}
activities.addEventListener('change', changeCost);

// 
// removing other payment options after select
const payment = document.querySelector('#payment');
const creditCard = document.querySelector('#credit-card');
const payPal = document.querySelector('#paypal');
const bitCoin = document.querySelector('#bitcoin');

function showOtherPayment(e) {
   // showing only paypal info
 if (payment.value === 'paypal') {
   payPal.style.display = 'block';
   bitCoin.style.display = 'none';
   creditCard.style.display = "none";
       // showing only bitcoin info
 } else if (payment.value === 'bitcoin') {
   bitCoin.style.display = 'block';
   payPal.style.display = 'none';
   creditCard.style.display = "none";
   // showing credit card input info and hiding again the others
 } else {
   creditCard.style.display = "block";
   payPal.style.display = 'none';
   bitCoin.style.display = 'none';
 }
}
payment.addEventListener('change', showOtherPayment);

 // validation :

function valid(element) {
   element.parentNode.classList.add('valid');
   element.parentNode.classList.remove('not-valid');
   element.parentNode.lastElementChild.style.display = "none";
 }
 
 function notvalid(element) {
     element.parentNode.classList.add('not-valid');
     element.parentNode.classList.remove('valid');
     element.parentNode.lastElementChild.style.display = "block";
 }
// validators

function isValidName() {
   const validName = /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(usernameInput.value);
   if (!validName) {
       notvalid(usernameInput);
   } else {
       valid(usernameInput);
   }
   return validName;
}

function isValidEmail() {
   const validMail = /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailInput.value);
   if (!validMail) {
       notvalid(emailInput);
   } else {
       valid(emailInput);
   }
   return validMail;
}
// creditcard must be 13-16
function isValidCCNum() {
   const validCcNum = /^\d{13,16}$/.test(ccNumber.value);
   if (!validCcNum) {
       notvalid(ccNumber);
   } else {
       valid(ccNumber);
   }
   return validCcNum;
}

// zip - 5 numbers
function isValidZipCode() {
   const validZip = /^\d{5}$/.test(zip.value);
   if (!validZip) {
       notvalid(zip);
   } else {
       valid(zip);
   }
   return validZip;
}


// The cvv must be 3 digits
function isValidCvv() {
   const validCvv = /^\d{3}$/.test(cvv.value);
   if (!validCvv) {
       notvalid(cvv);
   } else {
       valid(cvv);
   }
   return validCvv;
}




const selectedActivities = document.querySelectorAll('[type="checkbox"]:checked');
const checkError = document.querySelector('.activities-hint');



form.addEventListener('keyup', submitEvent);

form.addEventListener('submit', submitEvent);


    function submitEvent(e) {
   if (!isValidName()) {
       e.preventDefault();
   }
   if (!isValidEmail()) {
       e.preventDefault();
       }
    if (selectedActivities.length === 0) {
        activities.childNodes[1].className = 'not-valid';
        checkError.style.display = 'block';
     }
    else {
        activities.childNodes[1].className = 'valid';
        checkError.style.display = "none";
    }

   if (payment.value === 'credit-card') {
   if (!isValidCCNum()) {
       e.preventDefault();
   }
   if (!isValidZipCode()) {
       e.preventDefault();
   }
   if (!isValidCvv()) {
       e.preventDefault();
   }
   }
   }


   // Accessibility

   // focusing on the selected checkbox
   for (i=0; i < checkboxInput.length; i++) {

   checkboxInput[i].addEventListener('focus', (e) => {
    e.target.parentElement.classList.add('focus');
   });

   checkboxInput[i].addEventListener('blur', (e) => {
    e.target.parentElement.classList.remove('focus');
   });
   }