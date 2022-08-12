let evens = [2,4,6,8,10];

evens.reduce(function(accumulator, nextValue){
    return accumulator + nextValue;
});

// const words = ['hello', 'i','love', 'you'];
// words.reduce(function(acc, nv){
//     console.log(acc, nv);
//     return acc + nv
// });

const midtermScores = [78, 22, ,1, 88, 19, 92,94, 64, 62, 56, 99];
const finalScores = [92, 15,62,2,33,72,99,82];

const minScore = midtermScores.reduce(function(min, nextScore){
    return nextScore < min  ? nextScore : min;
});

const minFinals = finalScores.reduce(function(min, nextScore){
    return nextScore < min ? nextScore : min;
}, minScore)



