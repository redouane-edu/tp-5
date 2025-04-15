// 1. Préparer les questions
const QUESTIONS = [
    ["Quelle est la capitale de la France ?", "Paris"],
    ["Combien y a-t-il de continents sur Terre ?", "7"],
    ["Quel est l'élément chimique représenté par H ?", "Hydrogène"],
    ["Quelle est la langue la plus parlée dans le monde ?", "Chinois"],
    ["Quel est le plus grand océan du monde ?", "Pacifique"]
  ];

  // 2-3-4. Fonction principale du quiz
  function lancerQuiz() {
    let score = 0;

    for (let i = 0; i < QUESTIONS.length; i++) {
      const question = QUESTIONS[i][0];
      const bonneReponse = QUESTIONS[i][1];

      const reponseUtilisateur = prompt(question);

      if (reponseUtilisateur !== null && reponseUtilisateur.trim().toLowerCase() === bonneReponse.toLowerCase()) {
        alert("Réponse juste !");
        score++;
      } else {
        alert("Réponse fausse !");
      }
    }

    // Affichage du score final
    alert(`Vous avez répondu correctement à ${score} question(s) sur ${QUESTIONS.length}`);
  }