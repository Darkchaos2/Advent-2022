document.querySelector('pre').innerText.split("\n").reduce((acc, e) => {
    if (e == "") return acc;
    [first, second] = e.split(" ");

    switch(second) {
        case "X":
            acc += 0
            if (first == "A") return acc + 3
            if (first == "B") return acc + 1
            if (first == "C") return acc + 2
            break;
        case "Y":
            acc += 3
            if (first == "A") return acc + 1
            if (first == "B") return acc + 2
            if (first == "C") return acc + 3
            break;
        case "Z":
            acc += 6
            if (first == "A") return acc + 2
            if (first == "B") return acc + 3
            if (first == "C") return acc + 1
            break;
    }
}, 0)