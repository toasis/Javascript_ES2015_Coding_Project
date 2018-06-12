//对一个字符串内某个字母出现的频率进行计数
// function countCharacter(inputString, inputCharacter) {
//   let count = 0;
//   let string = inputString.toLowerCase();
//   let character = inputCharacter.toLowerCase();
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === character) {
//       count++;
//     }
//   }
//   return count;
// };
//将一个字符串内通过空格分隔的单词的首字母大写
// function capitalizeFirstCharacterOfWords(string) {
//   let arr = string.split(" ");
//   for (let i = 0; i < arr.length; i++) {
//     let word = arr[i];
//     arr[i] = word[0].toUpperCase() + word.substring(1);
//   }
//   return arr.join(" ");
// };

//将一个字符串内所有单词的字母顺序，以及字符串的前后顺序颠倒
// function reverseWord(word) {
//   return word.split("").reverse().join("");
// };
//将一个字符串内所有单词的字母顺序颠倒
// function reverseAllWords(sentence) {
//   let words = sentence.split(" ");
//   for (let i = 0; i < words.length; i++) {
//     words[i] = reverseWord(words[i]);
//   }
//   return words.join(" ");
// };

//将一个字符串内某些字符用另外的字符代替
// function replaceFirstOccurence(string, toBeReplaced, replaceWith) {
//   return string.replace(toBeReplaced, replaceWith);
// };


// function replaceAllOccurrences(string, toBeReplaced, replaceWith) {
//   return string.split(toBeReplaced).join(replaceWith);
// };
//将一个字符串内某些字符指定的字符代替
// function encode(string) {
//   let replacementObject = {
//     "a": "@",
//     "s": "$",
//     "i": "!",
//     "o": "0"
//   };
//   for (let key in replacementObject) {
//     string = replaceAllOccurrences(string, key, replacementObject[key]);
//   }
//   return string;
// };


// function displayMessage() {
//   console.log(countCharacter("What is the color of the sky?", "t"));
//   console.log(capitalizeFirstCharacterOfWords("What is the color of the sky?"));
//   console.log(reverseWord("What is the color of the sky?"));
//   console.log(reverseAllWords("What is the color of the sky?"));
//   console.log(replaceFirstOccurence("What is the color of the sky?", "sky", "water"));
//   console.log(encode("What is the color of the sky?"));
// }

// displayMessage();

let MessageMixer = {
  countCharacter: (inputString, inputCharacter) => {
    let count = 0;
    let string = inputString.toLowerCase();
    let character = inputCharacter.toLowerCase();
    for (let i = 0; i < string.length; i++) {
      if (string[i] === character) {
        count++;
      }
    }
    return count;
  },
  capitalizeFirstCharacterOfWords: (string) => {
    let arr = string.split(" ");
    for (let i = 0; i < arr.length; i++) {
      let word = arr[i];
      arr[i] = word[0].toUpperCase() + word.substring(1);
    }
    return arr.join(" ");
  },
  reverseWord: (word) => {
    return word.split("").reverse().join("");
  },
  reverseAllWords: (sentence) => {
    let words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = MessageMixer.reverseWord(words[i]);
    }
    return words.join(" ");
  },
  replaceFirstOccurence: (string, toBeReplaced, replaceWith) => {
    return string.replace(toBeReplaced, replaceWith);
  },
  replaceAllOccurrences: (string, toBeReplaced, replaceWith) => {
    return string.split(toBeReplaced).join(replaceWith);
  },
  encode: (string) => {
    let replacementObject = {
      "a": "@",
      "s": "$",
      "i": "!",
      "o": "0"
    };
    for (let key in replacementObject) {
      string = MessageMixer.replaceAllOccurrences(string, key, replacementObject[key]);
    }
    return string;
  },
  palindrome: (str) => {
    let string = MessageMixer.reverseWord(str);
    return string;
  },
  pigLatin: (sentence, character) => {
    return sentence.split(' ').join(character + ' ');
  }
}



MessageMixer.encode("a s i o pp");
MessageMixer.palindrome('a reverse string');
MessageMixer.pigLatin('this is a nice day','#');
//module.exports = MessageMixer;
export default MessageMixer;
