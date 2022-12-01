document.querySelector('pre').innerText.split("\n").reduce((acc, e) => {
    if (e == "") return [...acc, 0];
    acc[acc.length - 1] += parseInt(e);
    return acc;
}, [0]).sort((a, b)=> a-b).slice(-3).reduce((acc, e) => acc += e, 0)
