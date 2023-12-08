import { gsap } from 'https://cdn.skypack.dev/gsap';
import { Draggable } from 'https://cdn.skypack.dev/gsap/Draggable';

gsap.registerPlugin(Draggable);

let cajaActual = 1;
let pinoActual = 1;

const contenedorPino = document.querySelector('#contenedorPino');
const pantallaInicio = document.querySelector('#pantallaInicio');
const pantallaFinal = document.querySelector('#pantallaFinal');

const caja1 = document.getElementById('decoraciones_1');
const caja2 = document.getElementById('decoraciones_2');
const caja3 = document.getElementById('decoraciones_3');

const btnJugar = document.querySelector('#botonjugar');
const btnAviso = document.querySelector('#botonaviso');

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
    elements_caja1.push(document.getElementById(`_1pieza${i}`));
}
elements_caja1.push(document.getElementById("estrella1"));
for(let i=1; i<=16; i++){
    elements_caja2.push(document.getElementById(`_2pieza${i}`));
}
elements_caja2.push(document.getElementById("estrella2"));
for(let i=1; i<=22; i++){
    elements_caja3.push(document.getElementById(`_3pieza${i}`));
}
elements_caja3.push(document.getElementById("estrella3"));


const pino1 = document.getElementById('pino1');
const pino2 = document.getElementById('pino2');
const pino3 = document.getElementById('pino3');

pino2.classList.add('hidden');
pino3.classList.add('hidden');

elements_caja1.forEach(element => {
    let transform = element.getAttribute('transform');
    let parts = transform.split(/[\s,()]+/);
    let x = parseFloat(parts[1]);
    let y = parseFloat(parts[2]);
    let scale = parseFloat(parts[4]);
    elements_caja1_originalx.push(x);
    elements_caja1_originaly.push(y);
    elements_caja1_originalscale.push(scale);
});

elements_caja2.forEach(element => {
    let transform = element.getAttribute('transform');
    let parts = transform.split(/[\s,()]+/);
    let x = parseFloat(parts[1]);
    let y = parseFloat(parts[2]);
    let scale = parseFloat(parts[4]);
    elements_caja2_originalx.push(x);
    elements_caja2_originaly.push(y);
    elements_caja2_originalscale.push(scale);
    gsap.to(element, {opacity:0, duration:0});
    element.classList.add('hidden');
});

elements_caja3.forEach(element => {
    let transform = element.getAttribute('transform');
    let parts = transform.split(/[\s,()]+/);
    let x = parseFloat(parts[1]);
    let y = parseFloat(parts[2]);
    let scale = parseFloat(parts[4]);
    elements_caja3_originalx.push(x);
    elements_caja3_originaly.push(y);
    elements_caja3_originalscale.push(scale);
    gsap.to(element, {opacity:0, duration:0});
    element.classList.add('hidden');
});


caja2.classList.add('nsh');
caja3.classList.add('nsh');

Draggable.create(elements_caja1, {
    type: 'x,y',
    bounds: '.parent',
    edgeResistance: 0.65,
    onDragEnd: function(){
        if (this.hitTest(pino1, "20%") || this.hitTest(pino2, "20%") || this.hitTest(pino3, "20%")) {
            this.target.classList.add('used');
        }else{
            this.target.classList.remove('used');
            if(caja1.classList.contains('nsh')){
                gsap.to(this.target, {duration: 1, opacity:0, x: -10000, onComplete: () => {this.target.classList.add('hidden')}});
            }
            else{
                let index = elements_caja1.indexOf(this.target);
                gsap.to(this.target, {duration: 0.35, x: elements_caja1_originalx[index], y: elements_caja1_originaly[index], scale: elements_caja1_originalscale[index]});
            }
        }
    }
});

Draggable.create(elements_caja2, {
    type: 'x,y',
    bounds: '.parent',
    edgeResistance: 0.65,
    onDragEnd: function(){
        if (this.hitTest(pino1, "20%") || this.hitTest(pino2, "20%") || this.hitTest(pino3, "20%")) {
            this.target.classList.add('used');
        }else{
            this.target.classList.remove('used');
            if(caja2.classList.contains('nsh')){
                gsap.to(this.target, {duration: 1, opacity:0, x: -10000, onComplete: () => {this.target.classList.add('hidden')}});
            }
            else{
                let index = elements_caja2.indexOf(this.target);
                gsap.to(this.target, {duration: 0.35, x: elements_caja2_originalx[index], y: elements_caja2_originaly[index], scale: elements_caja2_originalscale[index]});
            }
        }
    }
});

Draggable.create(elements_caja3, {
    type: 'x,y',
    bounds: '.parent',
    edgeResistance: 0.65,
    onDragEnd: function(){
        if (this.hitTest(pino1, "20%") || this.hitTest(pino2, "20%") || this.hitTest(pino3, "20%")) {
            this.target.classList.add('used');
        }else{
            this.target.classList.remove('used');
            if(caja3.classList.contains('nsh')){
                gsap.to(this.target, {duration: 1, opacity:0, x: -10000, onComplete: () => {this.target.classList.add('hidden')}});
            }
            else{
                let index = elements_caja3.indexOf(this.target);
                gsap.to(this.target, {duration: 0.35, x: elements_caja3_originalx[index], y: elements_caja3_originaly[index], scale: elements_caja3_originalscale[index]});
            }
        }
    }
});

    

function animateElement(element, targetX, targetY, targetScale) {
    setTimeout(() => {
        gsap.to(element, {
            duration: 0.35,
            opacity: 1,
            x: targetX,
            y: targetY,
            scale: targetScale,
        }
        );
    }, 350);

}

function vanishElement(element) {
    gsap.to(element, {
        duration: 0.35,
        opacity: 0,
        onComplete: function() {
            element.classList.add('hidden');
        }
    });
}

function showNextCaja(elements_caja, caja, nextCaja) {
    elements_caja.forEach((element, index) => {
        if (!element.classList.contains('used')) {
            element.classList.remove('hidden');
            if (nextCaja == 1) {
                animateElement(element, elements_caja1_originalx[index], elements_caja1_originaly[index], elements_caja1_originalscale[index]);
            } else if (nextCaja == 2) {
                animateElement(element, elements_caja2_originalx[index], elements_caja2_originaly[index], elements_caja2_originalscale[index]);
            } else if (nextCaja == 3) {
                animateElement(element, elements_caja3_originalx[index], elements_caja3_originaly[index], elements_caja3_originalscale[index]);
            }
        }
    });
    caja.classList.remove('nsh');
    cajaActual = nextCaja;
}

function derechaCaja() {
    if (cajaActual == 1) {elements_caja1.forEach((element, index) => {
            if (!element.classList.contains('used')) {
                vanishElement(element)
            }   
        });
        const nextHasUnusedElements = elements_caja2.some(function(elemento) {
            return !elemento.classList.contains('used');
        });
        if (nextHasUnusedElements) {
            showNextCaja(elements_caja2, caja2, 2);
        } else {
            showNextCaja(elements_caja3, caja3, 3);
        }
        caja1.classList.add('nsh');
    } else if (cajaActual == 2) {
        elements_caja2.forEach((element, index) => {
            if (!element.classList.contains('used')) {
                vanishElement(element)
            }
        });
        const nextHasUnusedElements = elements_caja3.some(function(elemento) {
            return !elemento.classList.contains('used');
        });
        if (nextHasUnusedElements) {
            showNextCaja(elements_caja3, caja3, 3);
        } else {
            showNextCaja(elements_caja1, caja1, 1);
        }
        caja2.classList.add('nsh');
    } else if (cajaActual == 3) {
        elements_caja3.forEach((element, index) => {
            if (!element.classList.contains('used')) {
                vanishElement(element)
            }
        });
        const nextHasUnusedElements = elements_caja1.some(function(elemento) {
            return !elemento.classList.contains('used');
        });
        if (nextHasUnusedElements) {
            showNextCaja(elements_caja1, caja1, 1);
        } else {
            showNextCaja(elements_caja2, caja2, 2);
        }
        caja3.classList.add('nsh');
    }
}

function izquierdaCaja() {
    if (cajaActual == 1) {
        elements_caja1.forEach((element, index) => {
            if (!element.classList.contains('used')) {
                vanishElement(element)
            }   
        });
        const nextHasUnusedElements = elements_caja3.some(function(elemento) {
            return !elemento.classList.contains('used');
        });
        if (nextHasUnusedElements) {
            showNextCaja(elements_caja3, caja3, 3);
        } else {
            showNextCaja(elements_caja2, caja2, 2);
        }
        caja1.classList.add('nsh');
    } else if (cajaActual == 2) {
        elements_caja2.forEach((element, index) => {
            if (!element.classList.contains('used')) {
                vanishElement(element)
            }
        });
        const nextHasUnusedElements = elements_caja1.some(function(elemento) {
            return !elemento.classList.contains('used');
        });
        if (nextHasUnusedElements) {
            showNextCaja(elements_caja1, caja1, 1);
        } else {
            showNextCaja(elements_caja2, caja2, 2);
        }
        caja2.classList.add('nsh');
    } else if (cajaActual == 3) {
        elements_caja3.forEach((element, index) => {
            if (!element.classList.contains('used')) {
                vanishElement(element)
            }
        });
        const nextHasUnusedElements = elements_caja2.some(function(elemento) {
            return !elemento.classList.contains('used');
        });
        if (nextHasUnusedElements) {
            showNextCaja(elements_caja2, caja2, 2);
        } else {
            showNextCaja(elements_caja1, caja1, 1);
        }
        caja3.classList.add('nsh');
    }
}

function derechaPino(){
    if(pinoActual == 1){
        gsap.to(pino1, {duration: 0.3, opacity:0, x: -100, onComplete: () => {
            pino1.classList.add('hidden');
            gsap.to(pino1, {x:0});
            pino2.classList.remove('hidden');
            gsap.from(pino2, {duration: 0.1, opacity:0, x: 100});
            gsap.to(pino2, {opacity:1, x: 0});
        }});
        pinoActual = 2;
    }else if(pinoActual == 2){
        gsap.to(pino2, {duration: 0.3, opacity:0, x: -100, onComplete: () => {
            pino2.classList.add('hidden');
            gsap.to(pino2, {x:0});
            pino3.classList.remove('hidden');
            gsap.from(pino3, {duration: 0.1, opacity:0, x: 100});
            gsap.to(pino3, {opacity:1, x:0});
        }});
        pinoActual = 3;
    }else if(pinoActual == 3){
        gsap.to(pino3, {duration: 0.3, opacity:0, x: -100, onComplete: () => {
            pino3.classList.add('hidden');
            gsap.to(pino3, {x:0});
            pino1.classList.remove('hidden');
            gsap.from(pino1, {duration: 0.1, opacity:0, x: 100});
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

document.getElementById('derechaCaja').addEventListener('click', derechaCaja);
document.getElementById('izquierdaCaja').addEventListener('click', izquierdaCaja);
document.getElementById('derechaPino').addEventListener('click', derechaPino);
document.getElementById('izquierdaPino').addEventListener('click', izquierdaPino);

document.querySelector('#botonaviso').addEventListener('click', () => {
    pantallaFinal.style.display = 'grid';
});

document.querySelector('#x').addEventListener('click', () => {
    pantallaFinal.style.display = 'none';
});

document.querySelector('#botonjugar').addEventListener('click', () => {
    pantallaInicio.style.display = 'none';
    contenedorPino.style.display = 'block';
});