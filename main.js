// DOM
// Las siglas DOM significan Document Object Model, o lo que es lo mismo, la estructura del documento HTML. Una página HTML está formada por múltiples etiquetas HTML, anidadas una dentro de otra, formando un árbol de etiquetas relacionadas entre sí, que se denomina árbol DOM (o simplemente DOM). En Javascript, cuando nos referimos al DOM nos referimos a esta estructura, que podemos modificar de forma dinámica desde Javascript, añadiendo nuevas etiquetas, modificando o eliminando otras, cambiando sus atributos HTML, añadiendo clases, cambiando el contenido de texto, etc...

// console.log(window.document);
// console.log(document);
// console.log(document.head);
// console.log(document.body);
// console.log(document.documentElement);
// console.log(document.doctype);
// console.log(document.title);
// document.write("<h2>Hola mundo desde el Dom</h2>");

// Seleccion de elementos del DOM
// tradicional
// getElementById('')
// console.log(document.getElementById("menu"));
// // getElementsByClassName('')
// console.log(document.getElementsByClassName("enlace1"));
// // getElementsByName('')
// console.log(document.getElementsByName("seccion3"));
// // getElementByTagName('')
// console.log(document.getElementsByTagName("li"));
// // moderna
// // querySelector()
// console.log(document.querySelector("#menu"));
// console.log(document.querySelector(".enlace1"));
// console.log(document.querySelector("li"));
// console.log(document.querySelector("li:nth-child(3)"));
// // querySelectorAll()
// console.log(document.querySelectorAll(".enlace1"));
// console.log(document.querySelectorAll("li"));

// // ejemplos
// console.log(document.documentElement.lang);
// document.documentElement.lang = "es-PE";

// //Metodos
let $linkDOM = document.querySelector(".link_index"),
  cl = console.log;

// // atributos
// // hasAttributes()

// cl($linkDOM)
// cl($linkDOM.hasAttributes())
// cl($linkDOM.hasAttribute('class'))

// // removeAttribute()
// $linkDOM.removeAttribute('href')

// // setAttibute() -> añadir tmb para modificar
// $linkDOM.setAttribute('href','https://www.google.com/')
// $linkDOM.setAttribute('target','_blank')
// $linkDOM.setAttribute('rel','noopener')
// $linkDOM.setAttribute('href','https://larnu.app/')

// // getAttribute
// cl($linkDOM.getAttribute('href'))
// cl($linkDOM.getAttributeNode('href'))

// // Estilos
// let $enlace = document.querySelector('.enlace2')
// let $enlace1 = document.querySelector('.enlace1')
// cl($enlace.style)

// //1 forma
// $enlace.style.backgroundColor = 'black'
// $enlace.style.color = 'white'

//  //2 forma
// $enlace1.style.setProperty('text-decoration', 'none')
// $enlace1.style.setProperty('background-color', 'red')

// clases
// className
// cl($enlace1.className)

// classList
// const $div = document.querySelector('.figure')

// cl($div.classList)

// $div.classList.add('clase1', 'clase2','clase3')
// $div.classList.remove('clase3')

// $div.classList.toggle('anadirClase')
// $div.classList.toggle('anadirClase')

// $div.classList.replace('clase2', 'clase8')

const $parrafo = document.getElementById("parrafo");

let texto = `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, commodi exercitationem placeat mollitia non praesentium natus id repellendus, doloremque voluptates eveniet reiciendis suscipit cumque aliquid quia debitis ipsam corrupti asperiores.</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, commodi exercitationem placeat mollitia non praesentium natus id repellendus, doloremque voluptates eveniet reiciendis suscipit cumque aliquid quia debitis ipsam corrupti asperiores.</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, commodi exercitationem placeat mollitia non praesentium natus id repellendus, doloremque voluptates eveniet reiciendis suscipit cumque aliquid quia debitis ipsam corrupti asperiores.</p>`;

$parrafo.innerHTML = texto;
$parrafo.innerText = texto;
$parrafo.textContent = texto;

cl($parrafo);
