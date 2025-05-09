
let secret = Math.floor(Math.random() * 10) + 1;
let guess;
let c = 0;

while (true) {
  guess = parseInt(prompt("Devine le nombre entre 1 et 10 :"));
  c++;

  if (guess < 1 || guess > 10) {
    alert("Entrez un nombre valide entre 1 et 10 !");
    continue;
  }

  if (guess < secret) {
    alert("C'est plus grand !");
  } else if (guess > secret) {
    alert("C'est plus petit !");
  } else {
    alert("Bravo ! Tu as trouvé le nombre en " + c + " tentative(s) !");
    break;
  }
}
