

function zad1(str) {
    let c = 1
    let n = 1
    let r = ""
    for (let a in str) {
        if (str.charAt(a) == str.charAt(n)) {
            c = c + 1
            n = n + 1
        } else {
            r = r + (str.charAt(a) + c)
            c = 1
            n = n + 1
        }
    }
    return (r)
}

module.exports={zip:zad1}

