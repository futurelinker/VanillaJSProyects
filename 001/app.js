// getElementById - Pulls in an element from the DOM with the element whose ID '#' property matches
// If you need to get acces to an element with no ID you can use querySelector()
const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

// Show input error message
function showError(input, message) {
  // Attach error class to the parent div that contains input element
  const formControl = input.parentElement
  formControl.className = 'form-control error'
  // Peplace inner text of the small tag
  const small = formControl.querySelector('small')
  small.innerText = message
}

// Show succes outline
function showSucess(input) {
  const formControl = input.parentElement
  formControl.className = 'form-control success'
}

// Check email is valid
function checkEmail(input) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (!re.test(input.value)) {
    showError(input, 'Email is not valid')
  } else {
    showSucess(input)
  }
}

// Check required fields
function checkRequired(inputArr) {
  // High order Array method forEach can be attached to any array to do different things
  inputArr.forEach(function (input) {
    console.log(input.value)
    // .trim remove any whitespace
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`)
    } else {
      showSucess(input)
    }
  })
}

// Check inputs lenght
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    )
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    )
  } else {
    showSucess(input)
  }
}

// Check passwords match
function checkPasswordMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, 'Passwords do not match')
  } else {
    showSucess(input2)
  }
}

// Get Field name
function getFieldName(input) {
  // .charAt returns any character based on index
  // .slice split string in a form an array
  return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

// Event listeners
// addEventListener represents an object that can handle an event dispatched by an EventTarget object (Element, Document, Window)
form.addEventListener('submit', (e) => {
  e.preventDefault()
  //   console.log(username.value)
  console.log('submit')

  // Check input values
  checkRequired([username, email, password, password2])
  checkLength(username, 3, 15)
  checkLength(password, 8, 25)
  checkEmail(email)
  checkPasswordMatch(password, password2)
})
