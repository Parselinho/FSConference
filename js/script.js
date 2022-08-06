 const usernameInput = document.querySelector('#name');
 const passwordInput = document.querySelector('#cc-num');
 const telephoneInput = document.querySelector('#cvv');
 const emailInput = document.querySelector('#email');
 const title = document.querySelector('#title')
 const optionTitle = title.children;
 const otherJob = document.querySelector('#other-job-role');

/**
 * 
 * validators
 * 
 */
// focus on the username input :
window.onload = function() {
    usernameInput.focus();
    otherJob.style.display = "none";
}

//  can only contain letters a-z in lowercase
 function isValidUserName(username) {
    return /^[A-Za-z\d]+$/.test(username);
 }

  // must be a valid email address
 function isValidEmail(email) {
    return /^[^@]+@[^@.]+\.[a-z]+$/i.test(email);
 }

 function jobRoleDisplay() {
    if (title.value === 'other') {
        otherJob.style.display = "block";
    } else {
        otherJob.style.display = "none";
    }
 }
 title.addEventListener('change', jobRoleDisplay);




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
  
