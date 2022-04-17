// Code your solutions in this file
const names = ["Guadalupe", "Ollie", "Aki"]
const surprise = "surprise"
// let i = 0
function writeCards(arr, condition) {
    const answer = [];
    for (let i = 0; i < arr.length; i++) {
        answer.push(`Thank you, ${arr[i]}, for the wonderful ${condition} gift!`)
    }
    return answer
}
writeCards(names, surprise);
console.log(writeCards(names, surprise))
//
// let i = 0
// function writeCards(arr, gift) {
//     const answer = []
//     for (i = 0; i < arr.length; i++) {
//         answer.push(`Thank you, ${arr[i]}, for the wonderful ${gift} gift!`)
//     }
//     return answer
// }
// console.log(writeCards(["Guadalupe", "Ollie", "Aki"], surprise))
//
function countDown(num) {
    while (num >= 0) {
        console.log(num)
        num--
    }
    return "GO!"
}
console.log(countDown(10))
//