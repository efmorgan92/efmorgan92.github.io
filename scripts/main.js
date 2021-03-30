let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/ever-given-meme.jpg') {
        myImage.setAttribute('src', 'images/ever-given-closeup.jpg');
    } else {
        myImage.setAttribute('src', 'images/ever-given-meme.jpg')
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'We are all Ever Given, ' + myName;
    }
  }

if(!localStorage.getItem('name')) {
setUserName();
} else {
let storedName = localStorage.getItem('name');
myHeading.textContent = 'We are all Ever Given, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
  }
