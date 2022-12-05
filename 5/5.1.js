var [oldStack, inst] = document.querySelector('pre').innerText.split("\n\n").map(e => e.split('\n').filter(e2 => e2 != ""))
var stack = oldStack.map(e => [])
oldStack.pop();

oldStack.forEach(line => {
    for(var i = 1; i < 35; i += 4) {
        var char = line[i];
        if (char != " ") stack[(i - 1) / 4].push(char)
    }    
})
stack.unshift([])

inst.forEach(e => {
    var [match, quantity, from, to] = [...e.matchAll(/move ([0-9]+) from ([0-9]+) to ([0-9]+)/g)][0]
    stack[to] = stack[from].splice(0, quantity).reverse().concat(stack[to].concat())
})

stack.reduce((acc, e) => acc += e?.[0])