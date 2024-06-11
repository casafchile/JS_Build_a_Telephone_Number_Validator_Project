const userInput = document.getElementById("user-input");
const resultsDiv = document.getElementById("results-div");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");

/*............FUNCTIONS........  */
/*----CHECK USER INPUT -----*/
const checkUserInput = () => {
  if (!userInput.value) {
    alert("Please provide a phone number");
  }
  else {
    cleanUserInput(userInput.value);
  }
}

/*----CLEAN USER INPUT -----*/
const cleanUserInput = (str) => {
  const cleanedUserInput = str.replace(/[ ]/g, ""); //g matches all coincidences
validateNumber(cleanedUserInput);
}

/*
1 555-555-5555
1 (555) 555-5555
1(555)555-5555
1 555 555 5555
5555555555
555-555-5555
(555)555-5555 
*/

/*-----VALIDATING NUMBER-----*/
const phonePattern = /^1?((\(\d{3}\))|\d{3})\-?\d{3}\-?\d{4}$/;
const validateNumber = (num) => {
  const isValid = phonePattern.test(num);
  resultsDiv.classList.add("border");
  if (isValid) {
    resultsDiv.innerHTML += `<p class="validNumber">Valid US number: ${userInput.value}<p>`
  }
  else {
    resultsDiv.innerHTML += `<p class="inValidNumber">Invalid US number: ${userInput.value}<p>`
  }
}

/*
^1?: This checks if an optional “1” appears at the beginning of the string. The question mark ? makes the “1” optional.
((\(\d{3}\))|\d{3}): This is a capturing group that contains two alternatives:
\(\d{3}\): This verifies if there is an area code enclosed in parentheses, such as “(555)”. The \d{3} matches three digits.
|\d{3}: Alternatively, this verifies if there is an area code without parentheses, like “555”. Again, \d{3} matches three digits.
\-?\d{3}\-?\d{4}: This verifies the phone number itself:
\d{3}: Matches three digits (the following digits of the phone number).
\-\?: The hyphen - is optional (\? makes the hyphen optional).
\d{4}: Matches four digits (the last digits of the phone number).
$: This ensures that the string ends after the phone number.
*/

/*----CLEAR RESULTS OUTPUT-----*/

const clearResults = ( ) => {
  resultsDiv.innerHTML = "";
resultsDiv.classList.remove("border");
    }



/*............EVENTS............*/

checkBtn.addEventListener("click", checkUserInput); /*Curiosity: if I put this command BEFORE the function, does not work*/

userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
    if (e.ctrlKey && e.key === "z") {
        document.getElementById("results-div").textContent = "It also works!!!"
  } /*Learn more about modifier keys..........................
  ctr + z also works without this condition deleting the input content*/
});

clearBtn.addEventListener("click", clearResults);
