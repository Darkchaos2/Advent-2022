document.querySelector('pre').innerText.split("\n").reduce((acc, e) => {
    if (e == "") return acc;
    [first, second] = e.split(" ");

    switch(second) {
        case "X":
            acc += 1
            if (first == "A") return acc + 3
            if (first == "B") return acc + 0
            if (first == "C") return acc + 6
            break;
        case "Y":
            acc += 2
            if (first == "A") return acc + 6
            if (first == "B") return acc + 3
            if (first == "C") return acc + 0
            break;
        case "Z":
            acc += 3
            if (first == "A") return acc + 0
            if (first == "B") return acc + 6
            if (first == "C") return acc + 3
            break;
    }
}, 0)