currMax = 0;
curr = 0;
currElf = 0;
currMaxElf = 0;
loopID = 0;
maxLoopID = 0;

document.querySelector('pre').innerText.split("\n").forEach(e => {
    loopID++;
    if (e == "") {
        if (curr > currMax) {
            currMax = curr;
            currMaxElf = currElf;
            maxLoopID = loopID;
        }
        curr = 0;
        currElf++;
        return;
    }

    curr += parseInt(e);
})

console.log(currMax);
console.log(currMaxElf);
console.log(maxLoopID);