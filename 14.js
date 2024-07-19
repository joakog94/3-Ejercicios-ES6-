/* Crea una función llamada rollDice() que reciba como parametro el numero de caras que queramos que tenga el dado que deberá simular el codigo dentro de la función. Como hemos dicho, que la función use el parametro para simular una tirada de dado y retornar el resultado. Si no se te ocurre como hacer un numero aleatorio no te preocupes! Busca información sobre la función de javascript Math.random() */

function rollDice(caras) {
  min = Math.ceil(1)
  max = Math.floor(caras)
  console.log(Math.floor(Math.random() * (max - min + 1) + min))
}

rollDice(6)
rollDice(8)
rollDice(10)
rollDice(12)
