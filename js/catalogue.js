let compteur = 0;
const affichageCompteur = document.getElementById('compteur-panier');
const boutonsPanier = document.querySelectorAll('.btn-panier');

boutonsPanier.forEach((bouton) => {
  bouton.addEventListener('click', () => {
    compteur++;
    affichageCompteur.textContent = compteur;
  });
});