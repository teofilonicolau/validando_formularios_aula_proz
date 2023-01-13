// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

// Mostrar popup de campo obrigatório
usernameInput.addEventListener("focus", ()=>{
    usernameLabel.classList.add("required-popup")

})


// Ocultar popup de campo obrigatório
usernameInput.addEventListener("blur", ()=>{
    usernameLabel.classList.remove("required-popup")
})


// Validar valor do input
usernameInput.addEventListener("change", (e)=>{
    let valor = e.target.value

    if(valor.length < 3){
        usernameInput.classList.add("error");
        usernameInput.classList.remove("correct");
        usernameHelper.innerText = "Seu username precisa  de pelo menos tres caracteres";
        usernameHelper.classList.add("visible");

    }else{
        usernameInput.classList.add("correct");
        usernameInput.classList.remove("error");
        usernameHelper.classList.remove("visible");

    }
})

// ---------- VALIDAÇÃO EMAIL ---------- //
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

emailInput.addEventListener("change", (e)=>{
    let valor = e.target.value

    if(valor.includes(".com")   &&  valor.includes("@")){
        console.log("Email Valido");
        emailInput.classList.add("correct");
        emailInput.classList.remove("error");
        emailHelper.classList.remove("visible");
    
    }else{
        console.log("INVALIDO");
        emailInput.classList.add("error");
        emailInput.classList.remove("correct");
        emailHelper.innerText = "Seu email precisa ser valido";
        emailHelper.classList.add("visible");
    
    }
 } )


