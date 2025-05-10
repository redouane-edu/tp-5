
const QUESTIONS = [
    ["what is the html tag for the strongest text", "<h1>"],
    ["What is the correct HTML element for inserting a line break?", "<br>"],
    ["what is the correct HTML element to define emphasized text?", " <em>"],
    ["what is the tag for adding image in html", "<img>"],
    ["what is the for make text bold", "  <b>"],
  ];

  
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