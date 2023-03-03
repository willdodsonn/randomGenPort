//intial commit

questions = [
  "It doesn't matter how much you push the envelope.",
  "What did the Confederate soldiers use to eat off of?",
  "I walked into my sister's room and tripped on a bra.",
  "A book just fell on my head,",
  "What is the leading cause of divorce in long-term marriages?",
  "Bakers trade bread recipes,",
  "A moon rock tastes better than an earthly rock because",
  "I used to be addicted to soap.",
];

answers = [
  "It'll still be stationary.",
  "Civil ware.",
  "It was a booby-trap.",
  "I only have my shelf to blame.",
  "A stalemate",
  "on a knead-to-know basis",
  "it's meteor",
  "But I'm clean now",
];

//jokes from no pun intended
const genRandQuestion = (questions, answers) => {
  const randIndex = Math.floor(Math.random() * questions.length);
  const question = questions[randIndex];
  const answer = answers[randIndex];

  console.log(question);
  console.log(answer);
};

genRandQuestion(questions, answers);

//acrostic poem
const poem = [
  "Kindness is contagious",
  "I try to be when I can",
  "Not being mean is being kind",
  "Doing things for others is also being kind",
  "Nice nearly all the time is the idea",
  "Everyday I try to be kind",
  "Simple things can be kind things",
  "Such as saying thank you",
];

const acrosticWord = (arr) => {
  const newWord = [];
  for (let i = 0; i < arr.length; i++) {
    const filterPoem = arr[i];
    if (filterPoem.indexOf([0])) {
      newWord.push(filterPoem[0]);
    }
  }
  return newWord.join("");
};



console.log(acrosticWord(poem));
