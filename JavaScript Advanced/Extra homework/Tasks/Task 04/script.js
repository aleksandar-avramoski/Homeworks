function textInfo(text) {

    let words = text.trim().split(" ");
    let longestWord = words.reduce((longest,current) => longest.length > current.length ? longest : current);
    let shortestWord = words.reduce((shortest,current) => shortest.length < current.length ? shortest : current);

    let totalVowels = 0;
    let vowels = "aeiouAEIOU";

    for (let i = 0; i < text.length; i++) {
        if (vowels.includes(text[i])) {
          totalVowels++;
        }
    }

    return {
      textLength: text.replace(/\s/g, "").length,
      totalWords: words.length,
      longestWord: longestWord,
      shortestWord: shortestWord,
      totalVowelsInTheWord: totalVowels,
    };

}

console.log(textInfo("Aleksandar Avramoski"));