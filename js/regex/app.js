// //Test method

// let sentence = 'The dog chased the cat'
// let regex =/the/
// let myString = "Hello World"
// let myregex = /Hello/
// let result = myregex.test(myString)
// let result2 = regex.test(sentence)
// console.log(result2)

// or symbol in test method

// let pet = "James bought a pet cat."
// let petregex = /dog|cat|bird|fish/
// let result = petregex.test(pet)

// let str = "Extract lans;fjsa;ljCoding the word 'coding' from this string."
// let regex = coding/gi
// let result = str.match(regex)
// console.log(result)

/* the . operator */

// let hum = "hummy and hug";
// let hug = "hug";
// let regex = /hu./gi;
// console.log(hum.match(regex));

// let bgREgex = /b[aiu]g/;
// let text = "Beware of bugs in the above code; I hav eonly proved it correct";
// let vowel = /[aeiou]/gi;
// let result = text.match(bgREgex);
// console.log(result);
// result = text.match(vowel);
// console.log(result);

/* the []operator */

// let text = "the quick brow fox jumps over the lazy dog.";
// let regex = /[a-z]/g;
// let result = text.match(regex);
// console.log(result);

/** negated character sets */
// let text = "3 blind mice.";
// let regex = /[^0-9aeiou]/gi;
// let result = text.match(regex);
// console.log(result);

/** the + operator */
// let text = "Mississipspi";
// let regex = /s+/g;
// let result = text.match(regex);
// console.log(result);

// let text = "gooooooooooal!";
// let phrase = "gut feeling";
// let regex = /go*/g;
// let result = phrase.match(regex);
// console.log(result);
//

// Greedy match
// let string = "titanic";
// let regex = /t[a-z]*i/;
// let result = string.match(regex);
// console.log(result);

// let text = "<h1> Winter is coming </h1>";
// regex = /<.*?>/;
// result = text.match(regex);
// console.log(result);

// let regex = /[C]/gi;
// let result = crowd.match(regex);
// console.log(result);

// let text = " and Ricky Call both like racing.";
// let regex = /^Cal/;
// let result = text.match(regex);
// console.log(result);

// let text = " and Ricky Call both like racing.";
// let regex = /g\.$/;
// let result = text.match(regex);
// console.log(result);

// let text = "escape the next character";
// let result = /\w/;
// console.log(result.test(text));

// let text = "colour";
// let regex = /colou.r/;
// console.log(regex.test(text));

/** Look Ahead */
// let quit = "qu";
// let noquit = "qt";
// let quregex = /q(?=u)/;
// let qregex = /q(?!u)/;
// console.log(quit.match(quregex));
// console.log(noquit.match(qregex));

// let text = "astronaut";
// let regex = /(?=\w{5}(?=\D*\d{2}))/;
// console.log(regex.test(text));

// let text = "regex regex";
// let regex = /(\w+)\s\1/;
// console.log(regex.test(text));

// let text = "42 42 42 42";
// let regex = /^(\d+)\s\1\s\1$/;
// console.log(regex.test(text));

// search and replace a string
// let wrong = 'The sky is silver.'
// let regex = /silver/
// wrong.replace(regex,"blue")
// console.log("Code Camp".replace(/(w+)\s\1/, "$2 $1"));

let hello = "     Hello, World!    ";
let regex = /^(\s)+|(\s)+$/;
console.log(hello.replace(regex, ""));
