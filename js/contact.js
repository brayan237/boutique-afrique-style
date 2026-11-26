const formulaire = document.getElementById('form-contact');
const messageRetour = document.getElementById('message-retour');

formulaire.addEventListener('submit', (event) => {
  event.preventDefault();

  const nom = document.getElementById('nom').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!nom || !email || !message) {
    messageRetour.textContent = 'Erreur : veuillez remplir tous les champs.';
    messageRetour.style.color = '#c0392b';
    return;
  }

  messageRetour.textContent = 'Merci ! Votre message a bien été envoyé.';
  messageRetour.style.color = '#2e6f40';
  formulaire.reset();
});