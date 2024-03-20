
export async function submitCallback(e) {
    // vous empêchez le comportement par défaut d'un formulaire d'avoir lieu.
    e.preventDefault();
    // vous appelez sur l'élément HTML form la méthode reset()
    // pour le réinitialiser

    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    console.log(emailInput.value, passwordInput.value);

    await AuthService.login(emailInput.value, passwordInput.value);
    console.log("appel de la fonction submit callback");
    form.reset();
  }