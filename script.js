let number1 = Number(prompt('Digite o primeiro número: '))
let number2 = Number(prompt('Digite o segundo número: '))

const calcs = [
  {name: "soma", result: (number1 + number2)},
  {name: "subtração", result: (number1 - number2)},
  {name: "multiplicação", result: (number1 * number2)},
  {name: "divisão", result: (number1 / number2).toFixed(2)},
  {name: "resto da divisão", result: (number1 % number2)}
]

for (const calc of calcs) {
  alert(`${(calc.name == "resto da divisão" ? "O" : "A")} ${calc.name} dos dois números é: ${calc.result}.`)
}

let isPair = (calcs[0].result % 2) == 0
let isDiff = number1 != number2
alert(`A soma dos dois números é ${isPair ? "par" : "ímpar"}: ${calcs[0].result}.`)
alert(`Os números inseridos são ${isDiff ? "diferentes" : "iguais"}.`)
