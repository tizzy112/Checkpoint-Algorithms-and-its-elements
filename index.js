function analyzeSen (sentence){
    // initialize counters

    let length = 0;
    let wordCount = 0;
    let vowelCount = 0;

    //iterate through each character in the sentence 

for (let i =0; i < sentence.length; i++){
    let char = sentencez[i];

    length++;

    if(char.match(/[aeiouAEIOU]/)){
        vowelCount++;
    }

    if(char === " "){
        wordCount++;
    }
}
if(sentence.length > 0){
    wordCount++;
}
console.log(`Length of the sentence: ${length}`);
console.log(`Number of words in the sentence: ${wordCount}`);
console.log(`Number of vowels in the sentence: ${vowelCount}`);
}