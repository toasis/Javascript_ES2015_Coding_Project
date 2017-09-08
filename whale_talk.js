let input = 'My name is Viki Zhang hello whale';
let vowels = ['a', 'e', 'o', 'i', 'u'];
let resultArray = [];
//大循环 共执行inputIndex（33）次，每次内部执行小循环5次,每个字母都要比五次
for (let inputIndex = 0; inputIndex < input.length; inputIndex++) {
    for (let vowelsIndex = 0; vowelsIndex < vowels.length; vowelsIndex++) {
        console.log('inputIndex is ' + inputIndex);
        console.log('vowelsIndex is ' + vowelsIndex);
        if (input[inputIndex] === vowels[vowelsIndex]) {
            resultArray.push(input[inputIndex]);//取出 input 中的原因字母
            console.log(resultArray);
            if (input[inputIndex] === 'e') {
                resultArray.push(input[inputIndex]);
            } else if (input[inputIndex] === 'u') {
                resultArray.push(input[inputIndex]);
            }//重复 e 和 u 字母
            console.log('the new result array is: ' + resultArray);
        }

    }
}
console.log('finalresult array is：' + resultArray.join('').toUpperCase());
