let a = parseFloat(prompt("Entrez le premier nombre :"));
let b = parseFloat(prompt("Entrez le deuxième nombre :"));

if (isNaN(a) || isNaN(b)) {
  console.log("Veuillez entrer des nombres valides.");
} else {
  console.log("Somme :", a + b);
  console.log("Différence :", a - b);
  console.log("Produit :", a * b);
  
  if (b !== 0) {
    console.log("Quotient :", a / b);
  } else {
    console.log("Impossible de diviser par zéro.");
  }
}
