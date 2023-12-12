# Reto 4

En el taller de Santa 🎅, algunos mensajes navideños han sido escritos de manera peculiar: las letras dentro de los paréntesis deben ser leídas al revés

Santa necesita que estos mensajes estén correctamente formateados. Tu tarea es escribir una función que tome una cadena de texto y revierta los caracteres dentro de cada par de paréntesis, eliminando los paréntesis en el mensaje final.

Eso sí, ten en cuenta que pueden existir paréntesis anidados, por lo que debes invertir los caracteres en el orden correcto.

```js
const a = decode("hola (odnum)");
console.log(a); // hola mundo

const b = decode("(olleh) (dlrow)!");
console.log(b); // hello world!

const c = decode("sa(u(cla)atn)s");
console.log(c); // santaclaus

// Paso a paso:
// 1. Invertimos el anidado -> sa(ualcatn)s
// 2. Invertimos el que queda -> santaclaus
```

## Notas

- Las cadenas de entrada siempre estarán bien formadas con paréntesis que coinciden correctamente, no necesitas validarlos.
- En el mensaje final no deben quedar paréntesis.
- El nivel máximo de anidamiento es 2.

### Solución

Para la solución del reto se utilizará una expresión Regex para ubicar los paréntesis que se puedan encontrar anidados dentro del string, para ello se utiliza el regex `\(([^()]+)\)/g`, lo cual se entiende como **los caracteres que no sea paréntesis y estén dentro de otros paréntesis**

Con esto se puede utilizar el metodo `replace()`, el cual toma dos argumentos, el primero lo que va a remplazar, y el segundo con qué lo hará. Pasamos a definir una función que reciba dos argumentos y tenga por objetivo separar `split()`, reversar `reverse()` y unir `join()` el string.

```js
const invertedGroups = (_, group) => group.split("").reverse().join("");
```

La función toma dos argumentos pero solo utilizará **group**, por convención se coloca **"\_"** para indicar que no vamos a usar ese argumento.

El reto en específico requiere encontrar hasta 2 veces un paréntesis anidado, y para ello se ejecuta 2 veces el `replace()`

```js
return message.replace(regex, invertedGroups).replace(regex, invertedGroups);
```
