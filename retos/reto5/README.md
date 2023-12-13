# Reto 5

Santa 🎅 está probando su nuevo trineo eléctrico, el CyberReindeer, en una carretera del Polo Norte. La carretera se representa con una cadena de caracteres, donde:

- . = Carretera
- S = Trineo de Santa
- - = Barrera abierta
- | = Barrera cerrada

Ejemplo de carretera: S...|....|.....

Cada unidad de tiempo, el trineo avanza una posición a la derecha. Si encuentra una barrera cerrada, se detiene hasta que la barrera se abra. Si está abierta, la atraviesa directamente.

Todas las barreras empiezan cerradas, pero después de 5 unidades de tiempo, se abren todas para siempre.

Crea una función que simule el movimiento del trineo durante un tiempo dado y devuelva un array de cadenas representando el estado de la carretera en cada unidad de tiempo:

const road = 'S..|...|..'
const time = 10 // unidades de tiempo
const result = cyberReindeer(road, time)

```js
const road = "S..|...|..";
const time = 10; // unidades de tiempo
const result = cyberReindeer(road, time);

/* -> result:
[
  'S..|...|..', // estado inicial
  '.S.|...|..', // avanza el trineo la carretera
  '..S|...|..', // avanza el trineo la carretera
  '..S|...|..', // el trineo para en la barrera
  '..S|...|..', // el trineo para en la barrera
  '...S...*..', // se abre la barrera, el trineo avanza
  '...*S..*..', // avanza el trineo la carretera
  '...*.S.*..', // avanza el trineo la carretera
  '...*..S*..', // avanza el trineo la carretera
  '...*...S..', // avanza por la barrera abierta
]
*/
```

El resultado es un array donde cada elemento muestra la carretera en cada unidad de tiempo.

Ten en cuenta que si el trineo está en la misma posición que una barrera, entonces toma su lugar en el array.

Los elfos se inspiraron en este reto de [Code Wars](https://www.codewars.com/kata/5d0ae91acac0a50232e8a547/javascript)

### Solución

Para resolver este reto, se utilizará un regex para remplazar `S.` y `S*` porque son los movimientos disponibles, el detalle viene ya que si se pasa por un `*` la instrucción es volverlo a poner cuando se haya avanzado y quede atrás.

De igual forma cuando pasan 5 unidades de tiempo (iteraciones) todas las barreras `|` se transforman en `*`. Por ende toca convertirlas todas.

Para tener el valor exacto de ubicación del reno se debe crear una nueva variable para tener el control, ya que la variable `time` no mantiene la posición del reno debido que a veces avanzará y en otras ocasiones no, para ello se designa la variable `a` que solo aumentará el valor si el reno se mueve.

```js
const newRoad = road.replace(/S[\.\*]/, `${b}S`);
if (newRoad != road) {
  a++;
  b = road[a];
}
//Se pasa movimiento a la lista
road = newRoad;
moves.push(road);
```
