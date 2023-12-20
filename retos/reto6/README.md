# Reto 6

Los elfos están catalogando los renos de Santa 🦌 según la distancia que pueden recorrer.

Para ello tienen una cadena de texto `movements` donde cada caracter representa la dirección del movimiento del reno:

- \> = Avanza a la derecha
- \< = Avanza a la izquierda
- \* = Puede avanzar o retroceder

Por ejemplo, si el movimiento es `>>\*<`, va hacia la derecha dos veces, luego puede ir a derecha o izquierda (lo que maximice la distancia recorrida final) y luego ir a la izquierda.

Los elfos quieren saber cuál es la máxima distancia que recorre el reno al **finalizar todos los movimientos**.

**En el ejemplo anterior, la máxima distancia que recorre el reno es 2**. Va a la derecha dos veces `+2`, luego con el `\*` puede ir a la derecha otra vez para maximizar la distancia `+1` y luego va a la izquierda `-1`.

Crea una función `maxDistance` que reciba la cadena de texto `movements` y devuelva **la máxima distancia** que puede recorrer el reno en **cualquier dirección**:

```js
const movements = ">>*<";
const result = maxDistance(movements);
console.log(result); // -> 2

const movements2 = "<<<>";
const result2 = maxDistance(movements2);
console.log(result2); // -> 2

const movements3 = ">***>";
const result3 = maxDistance(movements3);
console.log(result3); // -> 5
```

Ten en cuenta que no importa si es a la izquierda o la derecha, la distancia es **el valor absoluto de la distancia recorrida máxima al finalizar los movimientos**.

### Solución

Para solventar este reto, primero es necesario iniciar una variable en `0` que sirva de acumulador de pasos de los renos, tanto para `>` como `<`, la resta de los pasos en ambas direcciones es la distancia que recorre el reno desde el punto inicial.

Cuando el reno se mueve mucho a la izquierda puede generarse un numero negativo, para ello se aplica [`Math.abs()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/abs) para retornar el valor absoluto. Para encontrar la cantidad de pasos de cada movimiento "`<` `>`", se puede aplicar una operación regex que solo tome en consideración esos pasos y aplique la función [`lenght()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length) para capturar la cantidad de pasos.

Es importante destacar el uso del método [`Match()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/match), el cual retorna las ocurrencias de algun regex dentro de una cadena de texto. Se aplica el signo `?` como operador opcional o nulo para indicar que la operación a la izquierda puede ser `null` o `undefined` sin la necesidad de lanzar un error.

Se agrega `??` después en dado caso que el valor sea `null` o `undefined` (no existan pasos hacia esa dirección) asignarle el valor de `0`, quedando el código de la siguiente manera:

```js
let right = movements.match(/>/g)?.length ?? 0;
let left = movements.match(/</g)?.length ?? 0;
```

Se asigna el acumulador, la suma y resta de movimientos:

```js
let distance = 0;

let right = movements.match(/>/g)?.length ?? 0;
let left = movements.match(/</g)?.length ?? 0;

distance += right;
distance -= left;
```

Para conocer la cantidad de pasos dados por `*` se hace una operacion de resta, se utiliza el método `length` para calcular los movimientos totales de `movements` y se resta con la suma de `right + left`. Como el método `Math.abs()` transforma todos los numeros a positivos, da igual si el numero es positivo o negativo, simplemente se suman:

```js
let extraStep = movements.length - (right + left);

return Math.abs(distance) + extraStep;
```
