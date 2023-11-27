import { gsap } from 'https://cdn.skypack.dev/gsap';
import { Draggable } from 'https://cdn.skypack.dev/@shopify/draggable';

gsap.registerPlugin(Draggable);

let cajaActual = 1;

const caja1 = document.querySelectorAll('#decoraciones_1');
const caja2 = document.querySelectorAll('#decoraciones_2');
const caja3 = document.querySelectorAll('#decoraciones_3');

const pino1 = document.querySelectorAll('#pino_1');
const pino2 = document.querySelectorAll('#pino_2');
const pino3 = document.querySelectorAll('#pino_3');
