// Selecting the elements, that will have events and methods

// Text field, where the task is typed.
const taskInput = document.querySelector('input.task');

// Parent Element of the list items
const tasks = document.querySelector('ul.tasks');

// All list items
const list = tasks.children;
const deleteB = document.querySelector('svg.delete');

for (let i = 0; i < list.length; i += 1) {
  attachButton(list[i]);
}

taskInput.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.createElement('li');

    li.textContent = task.value;
    attachButton(li);
    ul.appendChild(li);
    task.value = '';
  }
});

tasks.addEventListener('click', (event) => {
  const tag = event.target.tagName;
    const basevalue = event.target.className.baseVal;
  //Only svg and path tags can be correctly followed - CHECK: maybe the event listener would be better bound to SVG itself?
  if (tag === 'svg') {
    if (basevalue  === 'delete' || basevalue  === 'can' || basevalue  === 'cap' || basevalue  === 'bin') {
      let li = event.target.parentNode.parentNode;
      let ul = li.parentNode;
      ul.removeChild(li);
    } else { //if more classes come use elseif
      console.log('FAVOURITE');
    }

  } else if (tag === 'path') {
    if (basevalue  === 'delete' || basevalue  === 'can' || basevalue  === 'cap' || basevalue  === 'bin') {
      let li = event.target.parentNode.parentNode.parentNode.parentNode;
      let ul = li.parentNode;
      ul.removeChild(li);
    } else { //if more classes come use elseif
      console.log('FAVOURITE');
    }
  }
});
