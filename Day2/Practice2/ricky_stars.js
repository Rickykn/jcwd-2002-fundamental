let rows = 5
let result = ""
for (let i=1 ; i<=rows ; i++) {
    for (let j=1 ;j<=i ; j++) {
        result += "*"
    }
    result += "\n"
}
console.log(result)