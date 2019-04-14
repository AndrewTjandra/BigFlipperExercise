/*Flip every chunk of n characters in a string, where n is any positive integer greater than 1.

Note that this is intentionally very similar to the previous problem.

Please focus on getting a working solution with the tools you know well.

Practice the interactive/collaborative interview style that's described in the documentation.

Example: */
var input = 'a short example';
var output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma

/*Breaking this example down piece by piece:
'a sho' -> 'ohs a'
'rt ex' -> 'xe tr'
'ample' -> 'elpma'

-> 'ohs axe trelpma'*/
//grab every 5 characters and flip them
//move to the next 5 and flip them (reverse order)
//not all input will be divisible by 5

function flipEveryNChars(input, num){
  //Create Array to store 5 characters
  var flippedString = '';
  //Populate the Array with 5 characters
  //Flip the Array
  //Combine all arrays together into one string
  for(var i = 0; i < input.length; i += num){
    var charArray = [];
    charArray.push(input[i]);
    charArray.push(input[i + 1]);
    charArray.push(input[i + 2]);
    charArray.push(input[i + 3]);
    charArray.push(input[i + 4]);
    flippedString += charArray.reverse().join('');
  }
  return flippedString;
}

function assertEqual(actual, expected, testName){
  if(actual === expected){
    console.log('passed [' + testName + ']');
  } else {
    console.log('failed [' + testName + '] Expected: ' + expected + ', but actual: ' + actual);
  }
}

function testFlipOf5Char(input, expected){
  var testActual = flipEveryNChars(input, 5);
  var testExpected = expected;
  assertEqual(testActual, testExpected, 'It should flip the first 5 and the last 5 strings in the input');
}

testFlipOf5Char('abcdefghij','edcbajihgf');
testFlipOf5Char('abcdefghijklm','edcbajihgfmlk');
