document.querySelector('pre').innerText.split("\n").reduce((totalSum, secondHalf) => {
    secondHalf = secondHalf.split('');
    firstHalf = secondHalf.splice(0, secondHalf.length / 2);
    
    test = firstHalf.reduce((commonSum, character) => {
        code = parseInt(character.charCodeAt(0));
        code > 90 ? code -= 96 : code -= 38;

        indexInSecond = secondHalf.indexOf(character);
        if(indexInSecond > -1) {
            secondHalf = secondHalf.slice(0, indexInSecond);
            return commonSum += code;
        }
        return commonSum;
    }, 0)

    return totalSum += test
}, 0)