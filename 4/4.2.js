document.querySelector('pre').innerText.split("\n").filter(e => e != "").map(line => line.split(",").map(allotment => allotment.split("-").map(number => parseInt(number)))).reduce((acc, line) => acc += (line[0][1] >= line [1][0] && line[0][1] <= line [1][1] || line[1][1] >= line [0][0] && line[1][1] <= line [0][1]), 0)