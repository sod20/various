## Ajastar luces (adjust lights)

Están encendiendo las luces de Navidad 🎄 en la ciudad y, como cada año, ¡hay que arreglarlas!

Las luces son de dos colores: 🔴 y 🟢 . Para que el efecto sea el adecuado, siempre deben estar alternadas. Es decir, si la primera luz es roja, la segunda debe ser verde, la tercera roja, la cuarta verde, etc.

Nos han pedido que escribamos una función adjustLights que, dado un array de strings con el color de cada luz (representados con los emojis 🔴 para el rojo y 🟢 para el verde), devuelva el número mínimo de luces que hay que cambiar para que estén los colores alternos.

adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])
// -> 1 (cambias la cuarta luz a 🔴)

adjustLights(['🔴', '🔴', '🟢', '🔴', '🟢'])
// -> 1 (cambia la primera luz a verde)

adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴'])
// -> 2 (cambias la segunda luz a 🟢 y la tercera a 🔴)

adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢'])
// -> 0 (ya están alternadas)

adjustLights(['🔴', '🔴', '🔴'])
// -> 1 (cambias la segunda luz a 🟢)


## Calcular tiempo (calculate time)

Los elfos están preparando la víspera de Navidad y necesitan tu ayuda para calcular si van sobrados o no de tiempo ⏳.

Para ello te pasan un array con la duración de cada entrega. El formato de la duración es HH:mm:ss, las entregas empiezan a las 00:00:00 y el límite de tiempo es 07:00:00.

Tu función debe devolver el tiempo que les faltará o el tiempo que les sobrará para terminar las entregas. El formato de la duración devuelta debe ser HH:mm:ss.

Si terminan antes de las 07:00:00, el tiempo restante hasta las 07:00:00 debe ser mostrado con un signo negativo. Por ejemplo, si sobran 1 hora y 30 minutos, devuelve -01:30:00

calculateTime(['00:10:00', '01:00:00', '03:30:00'])
// '-02:20:00'

calculateTime(['02:00:00', '05:00:00', '00:30:00'])
// '00:30:00'

calculateTime([
  '00:45:00',
  '00:45:00',
  '00:00:30',
  '00:00:30'
]) // '-05:29:00'

## Es copia valida (check is valid copy)

En el Polo Norte todavía usan fotocopiadoras de papel. Los elfos las usan para copiar las cartas que los niños envían a Santa y así poder enviarlas a todos los departamentos de regalos.

Sin embargo ya son muy viejas y no funcionan muy bien. Cada vez que hacen una copia, la calidad de la copia disminuye ligeramente, un fenómeno conocido como pérdida generacional.

Necesitas detectar si una carta es una copia de otra. Las cartas son muy largas y no puedes leerlas, pero puedes compararlas con un algoritmo.

Existe una gran probabilidad de que un caracter se degrade en cada copia (¡no pasa siempre!). Y al ocurrir, la regla que sigue es:

Los caracteres de la A a la Z se degradan de mayúsculas a minúsculas (A-Z ⇒ a-z)
Las letras se degradan en una serie de caracteres en este orden: a-z ⇒ # ⇒ + ⇒ : ⇒ . ⇒
Una vez degradadas las letras en los símbolos, se pueden continuar degradando.
Ten en cuenta que el último es un espacio en blanco, no un caracter vacío.
Los caracteres que no son letras (como los dígitos) no se degradan.
Sabiendo esto y recibiendo dos cartas. La supuesta original y la copia. Debes determinar si la copia es una copia de la otra.

checkIsValidCopy(
  'Santa Claus is coming',
  'sa#ta Cl#us i+ comin#'
) // true
checkIsValidCopy(
  's#nta Cla#s is coming',
  'p#nt: cla#s #s c+min#'
) // false (por la p inicial)
checkIsValidCopy('Santa Claus', 's#+:. c:. s') // true
checkIsValidCopy('Santa Claus', 's#+:.#c:. s') // false (hay un # donde no debería)
Para entender cómo funcionan las fotocopiadoras y su degradación, mira este ejemplo:

original:  'Santa Claus'
1ª copia:  'santa cla#s'
2ª copia:  'sa#t# cl#+s'
3ª copia:  'sa+## c#+:s'
4ª copia:  's#++. c+:.s'
5ª copia:  's#+:. c:. s'
Por lo tanto s#+:. c+:++ es una copia válida de Santa Claus. Y, como ves, la degradación de las letras no se produce en un orden específico, es aleatorio.

Basado en el desafío de CodeWars Photocopy decay

## Dale la vuelta a los parentesis (decode)

En el taller de Santa 🎅, algunos mensajes navideños han sido escritos de manera peculiar: las letras dentro de los paréntesis deben ser leídas al revés

Santa necesita que estos mensajes estén correctamente formateados. Tu tarea es escribir una función que tome una cadena de texto y revierta los caracteres dentro de cada par de paréntesis, eliminando los paréntesis en el mensaje final.

Eso sí, ten en cuenta que pueden existir paréntesis anidados, por lo que debes invertir los caracteres en el orden correcto.

const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus

// Paso a paso:
// 1. Invertimos el anidado -> sa(ualcatn)s
// 2. Invertimos el que queda -> santaclaus
Notas:

Las cadenas de entrada siempre estarán bien formadas con paréntesis que coinciden correctamente, no necesitas validarlos.
En el mensaje final no deben quedar paréntesis.
El nivel máximo de anidamiento es 2.

## Dibuja caja (draw gift)

Santa está experimentando con nuevos diseños de regalos y necesita tu ayuda para visualizarlos en 3D.

Tu tarea es escribir una función que, dado un tamaño n (entero), genere un dibujo de un regalo en 3D utilizando caracteres ASCII.

Las líneas de los regalos se dibujan con # y las caras con el símbolo que nos pasan como parámetro:

drawGift(4, '+')

/*
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
*/

drawGift(5, '*')
/*
    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
*/

drawGift(1, '^')
/*
#
*/
Importante: Nos han dicho que siempre hay que dejar un salto de línea al final del dibujo.

Nota: Ten en cuenta que, en los tests, la primera línea se ve empujada por el caracter ".

## Encuentra regalo repetido (find first repeated)

En la fábrica de juguetes del Polo Norte, cada juguete tiene un número de identificación único.

Sin embargo, debido a un error en la máquina de juguetes, algunos números se han asignado a más de un juguete.

¡Encuentra el primer número de identificación que se ha repetido, donde la segunda ocurrencia tenga el índice más pequeño!

En otras palabras, si hay más de un número repetido, debes devolver el número cuya segunda ocurrencia aparezca primero en la lista. Si no hay números repetidos, devuelve -1.

const giftIds = [2, 1, 3, 5, 3, 2]
const firstRepeatedId = findFirstRepeated(giftIds)
console.log(firstRepeatedId) // 3
// Aunque el 2 y el 3 se repiten
// el 3 aparece primero por segunda vez

const giftIds2 = [1, 2, 3, 4]
const firstRepeatedId2 = findFirstRepeated(giftIds2)
console.log(firstRepeatedId2) // -1
// Es -1 ya que no se repite ningún número

const giftIds3 = [5, 1, 5, 1]
const firstRepeatedId3 = findFirstRepeated(giftIds3)
console.log(firstRepeatedId3) // 5
¡Ojo! Los elfos dicen que esto es una prueba técnica de Google.

## Ordenando el almacen (organize gifts)

Los elfos están muy ocupados en el taller de Santa Claus organizando regalos 🎁 para la víspera de Navidad 🎄.

El formato de entrada es especial, ya que indica el número de regalos y el tipo de regalo con letras de la a a la z. Por ejemplo, '66a11b' significa 66 regalos a y 11 regalos b.

Los elfos tienen un sistema especial para organizar los regalos:

Cada 10 regalos del mismo tipo se empaquetan en una caja, representada por {x}. Por ejemplo, 20 regalos tipo a se empaquetan en 2 cajas así: {a}{a}.
Cada 5 cajas se apilan en un palé, representado por [x]. Por ejemplo, 10 cajas de a se apilan en 2 palés de esta manera: [a][a]
Cualquier regalo adicional se coloca en una bolsa, representada por () y se colocan todas dentro. Por ejemplo 4 regalos de b se colocan en una bolsa así (bbbb)
Los regalos luego se colocan en el siguiente orden: palés, cajas y bolsas. Y los regalos aparecen en el mismo orden que la cadena de entrada.

Tu tarea es escribir una función organizeGifts que tome una cadena de regalos como argumento y devuelva una cadena representando el almacén.

const result1 = organizeGifts(`76a11b`)
console.log(result1)
// '[a]{a}{a}(aaaaaa){b}(b)'

/* Explicación:

  76a: 76 regalos tipo 'a' se empaquetarían en 7 cajas y sobrarían 6 regalos, resultando en 1 palé [a] (por las primeras 5 cajas), 2 cajas sueltas {a}{a} y una bolsa con 6 regalos (aaaaaa)

  11b: 11 regalos tipo 'b' se empaquetarían en 1 caja y sobraría 1 regalo, resultando en 1 caja suelta {b} y una bolsa con 1 regalo (b)

