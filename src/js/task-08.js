const refsForm = document.querySelector(".login-form"); 
 
refsForm.addEventListener('submit', (event)=> { 
    event.preventDefault(); 
    const { 
        elements: { email, password } 
      } = event.currentTarget;       
 
      if (email.value === "" || password.value === "") { 
        return alert("Actung!!!Аill out the entire form"); 
      } 
      console.log(`Login: ${email.value}, Password: ${password.value}`); 
      event.currentTarget.reset(); 
})


