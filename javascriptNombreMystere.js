var nombreOrdi = Math.round(Math.random()*100);
var nombreJoueurs;


for (var i = 0; i < 10; i++) {
var nombreTentative=i+1;    
nombreJoueurs = prompt("Je pense à un nombre entre 0 et 100.\r\nVous avez 10 tentatives pour trouver\r\nTentative N°" +nombreTentative)
if (nombreJoueurs<nombreOrdi)
{
    alert("Plus grand ");
}
else if (nombreJoueurs>nombreOrdi)
{
    alert("Plus petit");
}
else if (nombreJoueurs==nombreOrdi)
{
    alert("Bravo vous avez trouver le nombre");
    break;
}
}
alert("Dommage vous n'avez plus de tentative ! PERDU");