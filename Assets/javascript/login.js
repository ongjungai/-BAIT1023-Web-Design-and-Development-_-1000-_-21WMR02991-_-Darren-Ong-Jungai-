function eyeFunction() {
    var pass = document.getElementById("InputPassword"); 
    if (pass.type === "password") { //If the type of password is password
      pass.type = "text";
      
    } else { //If the type of password is text
      pass.type = "password";
    }
  }

  function toggleFunction(p) {
    p.classList.toggle('fa-eye-slash');
  }