let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually'];

let storyWords = story.split(' ');
// console.log(storyWords);


// let betterWords = storyWords.filter(function(word) {
//     return !unnecessaryWords.includes(word);
//     //反向思维理解起来有点费劲，意思是返回不包括在 unnecessaryWords里的值,.includes()的结果是布尔值,理解成包含在
// });
let betterWords = storyWords.filter(word => !unnecessaryWords.includes(word));
//console.log(betterWords);
let numOfOverusedWords = 0;
let countOverusedWords = betterWords.forEach(function(word) {

    if (word === 'really') {
        numOfOverusedWords++;
    } else if (word === 'very') {
        numOfOverusedWords++;
    } else if (word === 'basically') {
        numOfOverusedWords++;
    }
});
let deleteOverUsedWords = betterWords.map(function(word) {
    if (word === 'really' || word === 'very' || word === 'basically') {
        return 'Zhang';// what the difference with "word = 'zhang';"
    } else {
      return word;
    }
});
console.log(betterWords);
 deleteOverUsedWords();//TypeError:deleteOverUsedWords is not a function at Object.<anonymous>

console.log(`There are ${numOfOverusedWords} overused words`);
// console.log(storyWords);
let numberOfSentences = 0;
let countOfSentence = betterWords.forEach(function(word) {
    if (word[word.length - 1] === '.' || word[word.length - 1] === '!') {
        numberOfSentences++;
    }

});
console.log(`There are ${numberOfSentences} sentences`);
console.log(betterWords.join(' '));
