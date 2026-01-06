/* Alternating Caps 
 Write a function that takes in a string of letters
 and returns a sentence in which every other letter is capitalized.

Example input: "I'm so happy it's Monday"
Example output: "I'M So hApPy iT'S MoNdAy"
*/

function altCaps(str){
    const sentenceArr = str.split(" ")
    const newArr = sentenceArr.map(word => capwords(word)).join(" ")
    return newArr
}

function capwords(word){
    return word[0].toUpperCase() + word.slice(1)
}

console.log(altCaps("When you visit Portland you have to go to VooDoo Donuts"));

//console.log(capwords("john"))