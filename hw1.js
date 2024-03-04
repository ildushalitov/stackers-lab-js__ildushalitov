let t1 = (m) => {for(let i = 1; i <= m.length; i++) m[i-1] = (m[i-1] + i)%10}
let t2 = (m) => {
    let min1 = m[0]
    let min2 = m[1]
    for (let i = 2; i < m.length; i++){
        if (m[i] < min1) {
            min1 = m[i]
        } else if (m[i] < min2) min2 = m[i]
    }
    return min1 + min2
}
let t3 = (o,a,b) => {
    switch(o){
        case('+'): return a + b 
        case('-'): return a - b 
        case('*'): return a * b 
        case('/'): return a / b
    }
}
