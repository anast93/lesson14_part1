'use strict'

function DomElement(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize; 
};

DomElement.prototype.createElement = function() {
    let newElem;

    if (this.selector.startsWith('.')) {
        newElem = document.createElement('div');
        newElem.className = this.selector.substr(1);
        newElem.textContent = 'Здесь div.';
        document.querySelector('body').append(newElem);

    } else if(this.selector.startsWith('#')) {
        newElem = document.createElement('p');
        newElem.id = this.selector.substr(1);
        newElem.textContent = 'Здесь p с id.';
        document.querySelector('body').append(newElem);

    } else return;
    
    newElem.style.cssText = `height: ${this.height}; width: ${this.width}; background-color: ${this.bg}; font-size: ${this.fontSize}`;
    
};

let dom1 = new DomElement('#name', '100px', '200px', 'yellow', '100%');

// ужасное название для переменной, но что поделать
let dom2 = new DomElement('.super', '100px', '300px', 'green', '200%');

console.log(dom1, dom2);
dom1.createElement();
dom2.createElement();
