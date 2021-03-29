const shuffleOptions = (correctAnswer, incorrectAnswers) => {
  const totalOptionLength = incorrectAnswers.length + 1;
  const correctAnswerIndex = Math.floor(Math.random() * totalOptionLength);
  shuffleList(incorrectAnswers);
  const result = [];
  for (let i = 0; i < totalOptionLength; i++) {
    if (i === correctAnswerIndex) {
      result.push(correctAnswer);
    } else {
      result.push(incorrectAnswers.pop());
    }
  }
  return [result, correctAnswerIndex];
};

const shuffleList = (list) => {
  for (let i = list.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }
};

export default shuffleOptions;

// // visual test for shuffleList
// for (let i = 0; i < 100; i++) {
//   const list = [1, 2, 3, 4, 5, 6];
//   shuffleList(list);
//   console.log(list);
// }

// // visual test for shuffleOptions
// for (let i = 0; i < 100; i++) {
//   const correctAnswer = 1;
//   const incorrectAnswers = [2, 3, 4];

//   console.log(shuffleOptions(correctAnswer, incorrectAnswers));
// }
