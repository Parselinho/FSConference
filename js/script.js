 const usernameInput = document.querySelector('#name');
 const passwordInput = document.querySelector('#cc-num');
 const telephoneInput = document.querySelector('#cvv');
 const emailInput = document.querySelector('#email');
 const title = document.querySelector('#title');
 const otherJob = document.querySelector('#other-job-role');
 const design = document.querySelector('#design');
 const colorInput = document.querySelector('#color');
 const actTotal = document.querySelector('#activities-cost');
 const activities = document.querySelector('#activities');
 const actBox = document.querySelector('#activities-box');
/**
 * 
 * validators
 * 
 */
// 1. focus on the username input :
// 2. hiding the other job role input
// 3. disable the color input 
window.onload = function() {
    usernameInput.focus();
    otherJob.style.display = "none";
    colorInput.disabled = true;
    
}

//  can only contain letters a-z in lowercase
 function isValidUserName(username) {
    return /^[A-Za-z\d]+$/.test(username);
 }

  // must be a valid email address
 function isValidEmail(email) {
    return /^[^@]+@[^@.]+\.[a-z]+$/i.test(email);
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


 // set up events
 function showOrHideTip(show, element) {
    // show element when show is true, hide when false
    if (show) {
      element.style.display = "inherit";
    } else {
      element.style.display = "none";
    }
  }
  
  function createListener(validator) {
    return e => {
      const text = e.target.value;
      const valid = validator(text);
      const showTip = text !== "" && !valid;
      const tooltip = e.target.nextElementSibling;
      showOrHideTip(showTip, tooltip);
    };
  }
  
  usernameInput.addEventListener("input", createListener(isValidUserName));
  emailInput.addEventListener("input", createListener(isValidEmail));
  

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
  
