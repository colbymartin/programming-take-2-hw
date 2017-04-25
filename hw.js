//////////////// 1. Average ////////////////

let nums = [23, 49, 39, 29, 22, 9, 1, 37];

function sum(num1, num2) {
    return num1 + num2;
};

console.log(nums.reduce(sum, 0)/nums.length);

//////////////// 2. Contains Vowels ////////////////

let string1 = "fjlsslddndnm";
let string2 = "petey pablo";


function checkVowel(letter) {
    if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
        return true
    } else {
        return false;
    }
}

function isVowel(letter1, letter2) {
    if (letter1 === true || letter2 === true){
        return true;
    } else {
        return false;
    }
}

console.log(string2.split('').map(checkVowel).reduce(isVowel, false));


//////////////// 3. Piglatin ////////////////

let oink = 'This is an example of piglatin';

function pigLatin(word) {
    let oinkArray = word.split('');
    let oinkFirst = oinkArray[0];
    oinkArray.push(oinkFirst, 'ay');
    oinkArray.splice(0,1);
    return oinkArray.join('');
}

console.log(oink.split(' ').map(pigLatin).join(' '));


//////////////// 4. LongestWord ////////////////

let statement = 'How is Beauregard faring in the summer heat?';

function whichLonger(word1, word2) {
    if (word1.length > word2.length) {
        return word1;
    } else {
        return word2;
    }
}

console.log(statement.split(' ').reduce(whichLonger, 'i'));


//////////////// 5. Multiples ////////////////

function range(min, max) {
  let nums = [];

  for (let i = min; i <= max; i++) {
    nums.push(i);
  }

  return nums;
}

function Multiples(number1, number2) {
    function checkMult(numba) {
    if (numba % number1 === 0 && numba % number2 === 0)
        return numba;
    }   
    return (range(1, 100).filter(checkMult));
} 

console.log(Multiples(5, 10));


//////////////// 6. Find ////////////////

let nummys = [4, 8, 29, 292, 74, 209, 10000, 28];
let thing = 2;

function find(nummyArray, nummy) {
    function match(num) {
        if (num === nummy) {
            return true;
        } else {
            return false;
        }
    }
    return nummyArray.map(match);
}

function matchCheck(thing1, thing2) {
    if (thing1 === true || thing2 === true){
        return true;
    } else {
        return false;
    }
}


console.log(find(nummys, thing).reduce(matchCheck, false));