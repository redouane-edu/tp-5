let num1 = parseFloat(prompt("Entrez le premier nombre :"));
let num2 = parseFloat(prompt("Entrez le deuxième nombre :"));

if (isNaN(num1) || isNaN(num2)) {
  console.log("Veuillez entrer des nombres valides.");
} else {
  console.log("Somme :", num1 + num2);
  console.log("Différence :", num1 - num2);
  console.log("Produit :", num1 * num2);
  
  if (num2 !== 0) {
    console.log("Quotient :", num1 / num2);
  } else {
    console.log("Impossible de diviser par zéro.");
  }
}
