// function lebaran() {
//     const THR = 5_000_000
//     console.log(`THR lebaran 2024 Rp.${THR}. didalam fungsi`)
// }

// lebaran()
// console.log(`THR lebaran 2024 Rp.${THR}, diluar fungsi`) // THR ENGGAK DEDEFINISIKAN
const THR = 1_000_000

function lebaran() {
    this.THR = 5_000_000
    console.log(`THR lebaran 2024 Rp.${this.THR}. didalam fungsi (function expression)`)
}

lebaran()

const THRKu = () => {
    this.THR = 5_000_000
    console.log(`THR lebaran 2024 Rp.${this.THR}. didalam fungsi (arrow function)`)
}

THRKu()
