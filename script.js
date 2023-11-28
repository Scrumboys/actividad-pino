import { gsap } from 'https://cdn.skypack.dev/gsap';
import { Draggable } from 'https://cdn.skypack.dev/@shopify/draggable';

gsap.registerPlugin(Draggable);

let cajaActual = 1;
let pinoActual = 1;

const caja1 = document.querySelector('#decoraciones_1');
const caja2 = document.querySelector('#decoraciones_2');
const caja3 = document.querySelector('#decoraciones_3');

let elements_caja1 = [];
let elements_caja2 = [];
let elements_caja3 = [];

let elements_caja1_originalx = [];
let elements_caja1_originaly = [];
let elements_caja1_originalscale = [];
let elements_caja2_originalx = [];
let elements_caja2_originaly = [];
let elements_caja2_originalscale = [];
let elements_caja3_originalx = [];
let elements_caja3_originaly = [];
let elements_caja3_originalscale = [];

for(let i=1; i<=20; i++){
    elements_caja1.push(document.querySelector(`#_1pieza${i}`));
}
elements_caja1.push(document.querySelector("#estrella1"));
for(let i=1; i<=16; i++){
    elements_caja2.push(document.querySelector(`#_2pieza${i}`));
}
elements_caja2.push(document.querySelector("#estrella2"));
for(let i=1; i<=22; i++){
    elements_caja3.push(document.querySelector(`#_3pieza${i}`));
}
elements_caja3.push(document.querySelector("#estrella3"));


const pino1 = document.querySelector('#pino1');
const pino2 = document.querySelector('#pino2');
const pino3 = document.querySelector('#pino3');

pino2.classList.add('hidden');
pino3.classList.add('hidden');

elements_caja1.forEach(element => {
    let transform = element.getAttribute('transform');
    let [translate, scale] = transform.replace('translate(', '').replace(') scale(', ' ').replace(')', '').split(' ');
    let [x, y] = translate.split(' ');
    x = parseFloat(x);
    y = parseFloat(y);
    scale = parseFloat(scale);
    elements_caja1_originalx.push(x);
    elements_caja1_originaly.push(y);
    elements_caja1_originalscale.push(scale);
});

elements_caja2.forEach(element => {
    let transform = element.getAttribute('transform');
    let [translate, scale] = transform.replace('translate(', '').replace(') scale(', ' ').replace(')', '').split(' ');
    let [x, y] = translate.split(' ');
    x = parseFloat(x);
    y = parseFloat(y);
    scale = parseFloat(scale);
    elements_caja2_originalx.push(x);
    elements_caja2_originaly.push(y);
    elements_caja2_originalscale.push(scale);
    element.classList.add('hidden');
});
elements_caja3.forEach(element => {
    let transform = element.getAttribute('transform');
    let [translate, scale] = transform.replace('translate(', '').replace(') scale(', ' ').replace(')', '').split(' ');
    let [x, y] = translate.split(' ');
    x = parseFloat(x);
    y = parseFloat(y);
    scale = parseFloat(scale);
    elements_caja3_originalx.push(x);
    elements_caja3_originaly.push(y);
    elements_caja3_originalscale.push(scale);
    element.classList.add('hidden');
});

//animate__fadeInLeft
//animate__fadeInRight
//animate__fadeOutLeft
//animate__fadeOutRight

// Draggable.create(elements_caja1, {
//     type: 'x,y',
//     bounds: '.parent',
//     edgeResistance: 0.65,
//     inertia: true,
// });
    

function derechaCaja(){
    if(cajaActual == 1){
        elements_caja1.forEach((element, index) => {
            if(!element.classList.contains('used')){
                gsap.to(element, {duration: 0.3,  opacity:0, x: 1000, onComplete: () => {
                    element.classList.add('hidden');
                    caja1.classList.add('nsh');
                }});
            }
        });
        elements_caja3.forEach((element, index) => {
            if(!element.classList.contains('used')){
                element.classList.remove('hidden');
                caja3.classList.remove('nsh');
                gsap.to(element, {duration: 0.3,  opacity:0, x: elements_caja3_originalx[index], y:elements_caja3_originaly[index], scale: elements_caja3_originalscale[index], onComplete: () => {
                    gsap.from(element, {duration: 0.3, opacity:0, x: 1000});
                }});
            }
        });
        cajaActual = 2;
    }else if(cajaActual == 2){
        elements_caja2.forEach((element, index) => {
            if(!element.classList.contains('used')){
                gsap.to(element, {duration: 0.3, opacity:0, x: 1000, onComplete: () => {
                    element.classList.add('hidden');
                    caja2.classList.add('nsh');
                }});
            }
        });
        elements_caja1.forEach((element, index) => {
            if(!element.classList.contains('used')){
                element.classList.remove('hidden');
                caja1.classList.remove('nsh');
                gsap.to(element, {duration: 0.3, opacity:0, x: elements_caja1_originalx[index], y:elements_caja1_originaly[index], scale: elements_caja1_originalscale[index], onComplete: () => {
                    gsap.from(element, {duration: 0.3, opacity:0, x: 1000});
                }});
            }
        });
        cajaActual = 3;
    }else if(cajaActual == 3){
        elements_caja3.forEach((element, index) => {
            if (!element.classList.contains('used')) {
                gsap.to(element, { duration: 0.3, opacity: 0, x: 1000, onComplete: () => {
                    element.classList.add('hidden');
                    caja3.classList.add('nsh');
                } });
            }
        });
        elements_caja1.forEach((element, index) => {
            if (!element.classList.contains('used')) {
                element.classList.remove('hidden');
                caja1.classList.remove('nsh');
                gsap.to(element, { duration: 0.3, opacity: 0, x: elements_caja1_originalx[index], y: elements_caja1_originaly[index], scale: elements_caja1_originalscale[index] , onComplete: () => {
                    gsap.from(element, { duration: 0.3, opacity: 0, x: 1000 });
                }});
            }
        });
        cajaActual = 1;
    }
}

function izquierdaCaja(){
    if(cajaActual == 1){
        elements_caja1.forEach((element, index) => {
            if(!element.classList.contains('used')){
                gsap.to(element, {duration: 0.3,  opacity:0, x: -1000, onComplete: () => {
                    element.classList.add('hidden');
                    caja1.classList.add('nsh');
                }});
            }
        });
        elements_caja3.forEach((element, index) => {
            if(!element.classList.contains('used')){
                element.classList.remove('hidden');
                caja3.classList.remove('nsh');
                gsap.to(element, {duration: 0.3,  opacity:0, x: elements_caja3_originalx[index], y:elements_caja3_originaly[index], scale: elements_caja3_originalscale[index], onComplete: () => {
                    gsap.from(element, {duration: 0.3, opacity:0, x: -1000});}
                });
            }
        });
        cajaActual = 3;
    } else if (cajaActual == 2) {
        elements_caja2.forEach((element, index) => {
            if (!element.classList.contains('used')) {
                gsap.to(element, { duration: 0.3, opacity: 0, x: -1000, onComplete: () => {
                    element.classList.add('hidden');
                    caja2.classList.add('nsh');
                }});
            }
        });
        elements_caja1.forEach((element, index) => {
            if (!element.classList.contains('used')) {
                element.classList.remove('hidden');
                caja1.classList.remove('nsh');
                gsap.to(element, { duration: 0.3, opacity: 0, x: elements_caja1_originalx[index], y: elements_caja1_originaly[index], scale: elements_caja1_originalscale[index], onComplete: () => {
                    gsap.from(element, { duration: 0.3, opacity: 0, x: -1000 });}
                });
            }
        });
        cajaActual = 1;
    }else if(cajaActual == 3){
        elements_caja3.forEach((element, index) => {
            if(!element.classList.contains('used')){
                gsap.to(element, {duration: 0.3,  opacity:0, x: -1000, onComplete: () => {
                    element.classList.add('hidden');
                    caja3.classList.add('nsh');
                }});
            }
        });
        elements_caja2.forEach((element, index) => {
            if(!element.classList.contains('used')){
                element.classList.remove('hidden');
                caja2.classList.remove('nsh');
                gsap.to(element, {duration: 0.3,  opacity:0, x: elements_caja2_originalx[index], y:elements_caja2_originaly[index], scale: elements_caja2_originalscale[index], onComplete: () => {
                    gsap.from(element, {duration: 0.3, opacity:0, x: -1000});}
                });
            }
        });
        cajaActual = 2;
    }
}

function derechaPino(){
    if(pinoActual == 1){
        gsap.to(pino1, {duration: 0.3, opacity:0, x: -100, onComplete: () => {
            pino1.classList.add('hidden');
            gsap.to(pino1, {x:0});
            pino2.classList.remove('hidden');
            gsap.from(pino2, {duration: 0.3, opacity:0, x: 100});
            gsap.to(pino2, {opacity:1, x: 0});
        }});
        pinoActual = 2;
    }else if(pinoActual == 2){
        gsap.to(pino2, {duration: 0.3, opacity:0, x: -100, onComplete: () => {
            pino2.classList.add('hidden');
            gsap.to(pino2, {x:0});
            pino3.classList.remove('hidden');
            gsap.from(pino3, {duration: 0.3, opacity:0, x: 100});
            gsap.to(pino3, {opacity:1, x:0});
        }});
        pinoActual = 3;
    }else if(pinoActual == 3){
        gsap.to(pino3, {duration: 0.3, opacity:0, x: -100, onComplete: () => {
            pino3.classList.add('hidden');
            gsap.to(pino3, {x:0});
            pino1.classList.remove('hidden');
            gsap.from(pino1, {duration: 0.3, opacity:0, x: 100});
            gsap.to(pino1, {opacity:1, x:0});
        }});
        pinoActual = 1;
    }
}

function izquierdaPino(){
    if(pinoActual == 1){
        gsap.to(pino1, {duration: 0.3, opacity:0, x: 100, onComplete: () => {
            pino1.classList.add('hidden');
            gsap.to(pino1, {x:0});
            pino3.classList.remove('hidden');
            gsap.from(pino3, {duration: 0.3, opacity:0, x: -100});
            gsap.to(pino3, {opacity:1, x:0});
        }});
        pinoActual = 3;
    }else if(pinoActual == 2){
        gsap.to(pino2, {duration: 0.3, opacity:0, x: 100, onComplete: () => {
            pino2.classList.add('hidden');
            gsap.to(pino2, {x:0});
            pino1.classList.remove('hidden');
            gsap.from(pino1, {duration: 0.3, opacity:0, x: -100});
            gsap.to(pino1, {opacity:1, x:0});
        }});
        pinoActual = 1;
    }else if(pinoActual == 3){
        gsap.to(pino3, {duration: 0.3, opacity:0, x: 100, onComplete: () => {
            pino3.classList.add('hidden');
            gsap.to(pino3, {x:0});
            pino2.classList.remove('hidden');
            gsap.from(pino2, {duration: 0.3, opacity:0, x: -100});
            gsap.to(pino2, {opacity:1, x:0});
        }});
        pinoActual = 2;
    }
}

document.querySelector('#derechaCaja').addEventListener('click', derechaCaja);
document.querySelector('#izquierdaCaja').addEventListener('click', izquierdaCaja);
document.querySelector('#derechaPino').addEventListener('click', derechaPino);
document.querySelector('#izquierdaPino').addEventListener('click', izquierdaPino);