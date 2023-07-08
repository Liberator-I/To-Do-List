// ----- Appending Close button to each list item

let itemList = document.getElementsByTagName('li');

for(i = 0; i < itemList.length; i++) {
    let span = document.createElement('span');
    let txt = document.createTextNode('\u00D7');

    span.className = 'closeBtn';
    span.appendChild(txt); // Append the created text node
    itemList[i].appendChild(span) // Appending to each list item
}

// ----- Hide list item

var close = document.getElementsByClassName("closeBtn");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() { // Using a normal function as it makes the 'this' keyword act differently
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// ----- Toggling check mark when item is clicked on

let list = document.querySelector('ul');
list.addEventListener('click', (item) => {
    if (item.target.tagName === 'LI') {
        item.target.classList.toggle('checked');
    }
});

// ----- Creating a new list item when the add button is clicked

let addBtn = document.getElementById('addBtn');
let overlay = document.getElementById('overlay');

addBtn.addEventListener('click', () => {
    let li = document.createElement('li');
    let inputVal = document.getElementById('taskInput').value;
    let content = document.createTextNode(inputVal);
    li.appendChild(content);
    if (inputVal === '') {
        overlay.style.display = 'block';
    } else {
        document.getElementById('list').appendChild(li);
    }
    document.getElementById('taskInput').value = ''; // Clear text field

    let span = document.createElement('span');
    let txt = document.createTextNode('\u00D7');
    span.className = 'closeBtn';
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() { // Using a normal function as it makes the 'this' keyword act differently
          var div = this.parentElement;
          div.style.display = "none";
        }
      }
})

// ----- Listening for Enter keyboard press

document.addEventListener('keydown', (event) => {

    if (event.code === 'Enter') {
        let li = document.createElement('li');
    let inputVal = document.getElementById('taskInput').value;
    let content = document.createTextNode(inputVal);
    li.appendChild(content);
    if (inputVal === '') {
        overlay.style.display = 'block';
    } else {
        document.getElementById('list').appendChild(li);
    }
    document.getElementById('taskInput').value = ''; // Clear text field

    let span = document.createElement('span');
    let txt = document.createTextNode('\u00D7');
    span.className = 'closeBtn';
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() { // Using a normal function as it makes the 'this' keyword act differently
          var div = this.parentElement;
          div.style.display = "none";
        }
      }
    }
})

// ----- Mobile add butotn

let addBtn2 = document.getElementById('addBtn2');

addBtn2.addEventListener('click', () => {
    let li = document.createElement('li');
    let inputVal = document.getElementById('taskInput').value;
    let content = document.createTextNode(inputVal);
    
    li.appendChild(content);
    if (inputVal === '') {
        overlay.style.display = 'block';
    } else {
        document.getElementById('list').appendChild(li);
    }
    document.getElementById('taskInput').value = ''; // Clear text field

    let span = document.createElement('span');
    let txt = document.createTextNode('\u00D7');
    span.className = 'closeBtn';
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() { // Using a normal function as it makes the 'this' keyword act differently
          var div = this.parentElement;
          div.style.display = "none";
        }
      }
})

// ----- Close overlay btn

let closeOverlay = document.getElementById('closeOverlay');

closeOverlay.addEventListener('click', () => {
    overlay.style.display = 'none';
})


