//flip cards until get spade翻牌直到得到黑桃,此循环只在 currentCard 赋值不是 Spade 的时候执行，执行的是
let cards = ['Diamond', 'Spade', 'Heart', 'Club'];
let currentCard = 'Heart';
while (currentCard !== 'Spade') {
    console.log(currentCard);
    currentCard = cards[Math.floor(Math.random() * 4)];
    console.log(`now current card is ${currentCard}`);
}
console.log("Found a spade!");
