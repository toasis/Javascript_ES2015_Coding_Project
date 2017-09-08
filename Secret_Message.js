let secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily",
    "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.",
    "-2015,", "Chris", "Pine,", "Learn", "JavaScript"
];
secretMessage.pop();
secretMessage.push('to', 'word');
secretMessage[6] = 'right';
secretMessage.shift();
secretMessage.unshift('Programming');

secretMessage.splice(5,5,'know');//.splice(indexToStart, numberOfIndices, "stringToAdd")
console.log(secretMessage.join(' '));
