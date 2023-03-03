//intial commit

questions = [
  "It doesn/t matter how much you push the envelope.",
  "What did the Confederate soldiers use to eat off of?",
  "I walked into my sister/s room and tripped on a bra.",
  "A book just fell on my head,",
  "What is the leading cause of divorce in long-term marriages?",
  "Bakers trade bread recipes,",
  "A moon rock tastes better than an earthly rock because",
  "I used to be addicted to soap.",
];

answers = [
  "It/ll still be stationary.",
  "Civil ware.",
  "It was a booby-trap.",
  "I only have my shelf to blame.",
  "A stalemate",
  "on a knead-to-know basis",
  "it/s meteor",
  "But I/m clean now",
];

const genRandQuestion = (questions, answers) => {
    const randIndex = Math.floor(Math.random() * questions.length);
    const question = questions[randIndex];
    const answer = answers[randIndex];

    console.log(question);
    console.log(answer);
}

genRandQuestion(questions, answers)