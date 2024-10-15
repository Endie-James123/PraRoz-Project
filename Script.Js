
  //Js for Login
  document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('password').value;

    try {
      const response = await fetch('http://localhost:3700/api/v1/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        alert('Login successful!');
        // You can also store JWT token if you're using it
        // localStorage.setItem('token', data.token);
      } else {
        alert('Error: ' + data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  });


  //JavaScript for Modal Popping

// Get the modal element
const modal = document.getElementById('signupModal');

// Get the button that opens the modal
const joinUsBtn = document.getElementById('joinUsBtn');

//Get the signup link that opens the modal
const signupAnchor = document.getElementById('SignupAnchor')

signupAnchor.onclick = () =>{
    modal.style.display = 'block'
}
// When the user clicks the button, open the modal
joinUsBtn.onclick = function() {
  modal.style.display = 'block';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
}

// Js for Sign Up
document.getElementById('signupForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.getElementById('signupUsername').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('password').value;

    try {
      const response = await fetch('http://localhost:3700/api/v1/users/newuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, username }),
      });

      const data = await response.json();
      if (response.ok) {
        alert(`${username} signed up successfully`);
        console.log(data);
        
      } else {
        alert('Error: ' + data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  });

  //Js to show Password
  const checkbox = document.getElementById('signUpShowPassword');
  const passwordField = document.getElementById('signupPassword')
  checkbox.addEventListener('change', () =>{
      // Check if the checkbox is checked
  if (checkbox.checked) {
    // If checked, set the password field's type to 'text' to show the password
    passwordField.type = 'text';
  } else {
    // Otherwise, set it back to 'password' to hide the password
    passwordField.type = 'password';
  }

  })