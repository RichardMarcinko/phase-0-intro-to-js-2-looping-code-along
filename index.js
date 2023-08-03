const names = ["Guadalupe", "Ollie", "Aki"]
const event = "surprise"

function writeCards(names, event) {
    let array = []
    for (let i = 0; i < names.length; i++) {
    array.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`) 
    }
    return array
}

function countDown() {
    let number = 10
    while (number >= 0) {
        console.log(number--)
    }
}