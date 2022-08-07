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
 const time = document.querySelectorAll('.timedate');
 const form = document.querySelector('form');
 const checkboxInput = document.querySelectorAll("input[type='checkbox']")

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
    payment.value = 'credit-card'
}

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
    let selectIndex = colorInput[i]
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
let totalCost = 0

function changeCost(e) {
    let cost = parseInt(e.target.getAttribute('data-cost'))
    if (e.target.checked) {
        totalCost += cost;
    } else {
        totalCost -= cost;
    }
    actTotal.textContent = `Total: $${totalCost}`;

    // disabled same date and time class
    for (i=1; i < actBox.length - 1; i++) {
        let actboxIndex = actBox[i];

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
    element.parentNode.classList.remove('not-valid')
    element.parentNode.lastElementChild.style.display = "none";
  }
  
  function notvalid(element) {
      element.parentNode.classList.add('not-valid');
      element.parentNode.classList.remove('valid')
      element.parentNode.lastElementChild.style.display = "block";
  }
// validators

function isValidName() {
    let name = usernameInput.value;
    const validName = /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(usernameInput.value);
    if (!validName) {
        notvalid(usernameInput);
    } else {
        valid(usernameInput);
    }
    return validName;
}

 function isValidEmail() {
    let email = emailInput.value;
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
    let ccNum = ccNumber.value;
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
    let zipCode = zip.value;
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
    let cvv3 = cvv.value;
    const validCvv = /^\d{3}$/.test(cvv.value);
    if (!validCvv) {
        notvalid(cvv);
    } else {
        valid(cvv);
    }
    return validCvv;
}

form.addEventListener('submit', (e) => {
    if (!isValidName()) {
        e.preventDefault();
    }
    if (!isValidEmail()) {
        e.preventDefault();
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
    })





// //  // set up events
// function showOrHideTip(show, element) {
//     // show element when show is true, hide when false
//     if (show) {
//       element.style.display = "inherit";
//     } else {
//       element.style.display = "none";
//     }
//   }
  
//   function createListener(validator) {
//     return e => {
//       const text = e.target.value;
//       const valid = validator(text);
//       const showTip = text !== "" && !valid;
//       const tooltip = e.target.nextElementSibling;
//       showOrHideTip(showTip, tooltip);
//     };
//   }


// usernameInput.addEventListener("input", createListener(isValidName));
// emailInput.addEventListener("input", createListener(isValidEmail));
// ccNumber.addEventListener('input', createListener(isValidCCNum));
// zip.addEventListener('input', createListener(isValidZipCode));
// cvvInput.addEventListener('input', createListener(isValidCvv));

//   //  can only contain letters a-z in lowercase
//   function isValidUserName(username) {
//     return /^[A-Za-z\s]+$/.test(username);
//  }

//   // must be a valid email address
//  function isValidEmail(email) {
//     return /^[^@]+@[^@.]+\.[a-z]+$/i.test(email);
//  }


//   //  can only contain letters a-z in lowercase
//   function isValidUserName(username) {
//     return /^[A-Za-z\s]+$/.test(username);
//  }

//   // must be a valid email address
//  function isValidEmail(email) {
//     return /^[^@]+@[^@.]+\.[a-z]+$/i.test(email);
//  }

// // must choose 1 activity
//  function isValidCheckbox() {
//     let count = 0;
//     for (i=0; i < checkboxInput.length; i++) {
//         if (checkboxInput[i].checked === true) {
//             count += 1;
//         }
//     }
//     if (count !== 0) {
//         activities.firstElementChild.className = "valid";
//         activities.lastElementChild.display = "none";
//         return true;
//     } else {
//         activities.firstElementChild.className = "not-valid"
//         activities.lastElementChild.display = "block";
//         return false;
//     }
//  }

//   usernameInput.addEventListener("input", createListener(isValidUserName));
//   emailInput.addEventListener("input", createListener(isValidEmail));
  
 

  
//  // must containt a lowercase, uppercase letter and a number
//  function isValidPassword(password) {
//     return /[a-z]/.test(password) && /[A-Z]/.test(password) && /[0-9]/.test(password);
//  }

//  //The telephone number must be in format of (555) 555-5555
//  function isValidTelephone(telephone) {
//     // return /^\(\d{3}\)\s\d{3}-\d{4}$/.test(telephone); 
//     return /^\D* \d{3}\D*\d{3}\D*\d{4}\D*$.test(telephone);
//  }
 

 // formating functions
//  function formatTelephone(text) {}


  
//   passwordInput.addEventListener("input", createListener(isValidPassword));
  
//   telephoneInput.addEventListener("input", createListener(isValidTelephone));
  
