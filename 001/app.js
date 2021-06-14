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
function isValidEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    // if the passed value matches return 'true'
      return re.test(String(email).toLowerCase())
}

// Event listeners
// addEventListener represents an object that can handle an event dispatched by an EventTarget object (Element, Document, Window)
form.addEventListener('submit', (e) => {
  e.preventDefault()
  console.log(username.value)
  console.log('submit')

  if (username.value === '') {
    showError(username, 'Username is required')
  } else {
    showSucess(username)
  }

  if (email.value === '') {
    showError(email, 'Email is required')
} else if(!isValidEmail(email.value)) {  
    showError(email, 'Email is not valid')
  } else {
    showSucess(email)
  }
  
  if (password.value === '') {
    showError(password, 'Password is required')
  } else {
    showSucess(password)
  }

  if (password2.value === '') {
    showError(password2, 'Password 2 is required')
  } else {
    showSucess(password2)
  }
})
