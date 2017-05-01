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
  if (e.keyCode == 13) {
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
    
    if(tag === 'svg'){
      let li = event.target.parentNode.parentNode;
      let ul = li.parentNode;
      ul.removeChild(li);
    } else if(tag === 'path') {
      let li = event.target.parentNode.parentNode.parentNode.parentNode;
      let ul = li.parentNode;
      ul.removeChild(li);
    }
});

