'use strict';
/*
 * davis.js
 */
let empty = function (target) {
    let foo = target;
    // Removing all children from an element
    while (foo.firstChild) {
        foo.removeChild(foo.firstChild);
    }
}

//makes a element
let fillLeft = function (target) {
    let art = target;

    let img = document.createElement('img'); // create element
    img.setAttribute('src', 'book-icon.png');
    img.setAttribute('alt', 'book icon');
    img.setAttribute('width', '64');

    let h1 = document.createElement('h1'); // create element
    let txt = document.createTextNode('Always'); // create text
    h1.appendChild(txt); // put on tree

    let par = document.createElement('p'); // create element
    txt = document.createTextNode("You could have four columns here but you won't. You'll have three like everyone else."); // create text
    par.appendChild(txt); // put onto tree

    art.appendChild(img);
    art.appendChild(h1);
    art.appendChild(par);
}

let t1 = function (ev) {
    let target = ev.target || ev.srcElement;
    let id = target.id;
    // alert(id);
    let elm = $(id);
    if (target.innerHTML !== '') {
        empty(elm);
    } else {
        switch (id) {
            case 'left': fillLeft(elm); break;
        }
    }
}
//mycode

let fillCenter = function (targetC) {
    let art = targetC;

    let img = document.createElement('img');
    img.setAttribute('src', 'book-icon.png');
    img.setAttribute('alt', 'book icon');
    img.setAttribute('width', '64');

    let h1 = document.createElement('h1'); // create element
    let txt = document.createTextNode('Always'); // create text
    h1.style.color = 'yellow';
    h1.appendChild(txt); // put on tree

    let par = document.createElement('p'); // create element
    txt = document.createTextNode("You could have four columns here but you won't. You'll have three like everyone else."); // create text
    par.style.color = 'yellow';
    par.appendChild(txt); // put onto tree


    art.appendChild(img);
    art.appendChild(h1);
    art.appendChild(par);
}

let t2 = function (ev2) {
    let targetC = ev2.targetC || ev2.srcElement;
    let id = targetC.id;
    // alert(id);
    let elm = $(id);
    if (targetC.innerHTML !== '') {
        empty(elm);
    } else {
        switch (id) {
            case 'center': fillCenter(elm); break;
        }
    }
}


let fillRight = function (targetR) {
    let art = targetR;

    let img = document.createElement('img');
    img.setAttribute('src', 'book-icon.png');
    img.setAttribute('alt', 'book icon');
    img.setAttribute('width', '64');

    let h1 = document.createElement('h1'); // create element
    let txt = document.createTextNode('Always'); // create text
    h1.appendChild(txt); // put on tree

    let par = document.createElement('p'); // create element
    txt = document.createTextNode("You could have four columns here but you won't. You'll have three like everyone else."); // create text
    par.appendChild(txt); // put onto tree

    art.appendChild(img);
    art.appendChild(h1);
    art.appendChild(par);
}

let t3 = function (ev3) {
    let targetR = ev3.targetR || ev3.srcElement;
    let id = targetR.id;
    // alert(id);
    let elm = $(id);
    if (targetR.innerHTML !== '') {
        empty(elm);
    } else {
        switch (id) {
            case 'right': fillRight(elm); break;
        }
    }
}






let initialize = function () {
    let left = $('left');
    let center = $('center');
    let right = $('right');
    fillLeft(left);
    fillCenter(center);
    fillRight(right);
    left.addEventListener('click', t1, false);
    center.addEventListener('click', t2, false);
    right.addEventListener('click', t3, false);
}



window.addEventListener('load', initialize);