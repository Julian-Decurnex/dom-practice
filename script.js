const container = document.querySelector('#container');
const body = document.querySelector('#body')

const pTag = document.createElement('p');
pTag.textContent= 'This is red!';
pTag.style.cssText = 'color: red;';
container.appendChild(pTag); 

const h3Tag = document.createElement('h3');
h3Tag.textContent = 'This is blue!';
h3Tag.style.cssText = 'color: blue;';
container.appendChild(h3Tag)


const container2 = document.createElement('div');
container2.style.cssText = 'border: 1px solid black; background-color: pink;';
body.appendChild(container2);

//ASI
const h1Tag = document.createElement('h1');
h1Tag.textContent = "I'm in a div!";
container2.appendChild(h1Tag)

const pTag2 = document.createElement('p');
pTag2.textContent = 'Me too!';
container2.appendChild(pTag2)

//O ASI
const h1Tag2 = document.createElement('h1');
h1Tag2.textContent = "I'm in a div!";

const pTag3 = document.createElement('p');
pTag3.textContent = 'Me too!';

container2.append(h1Tag2, pTag3)
