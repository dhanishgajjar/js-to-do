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

// $(".bin").on('click', function(){
//   alert("Hey");
// });

tasks.addEventListener('click', (event) => {
  if (event.target.tagName == 'svg') {
    if (event.target.className == 'delete') {
      let li = event.target.parentNode.parentNode;
      let ul = li.parentNode;
      ul.removeChild(li);
    } else if (event.target.className == 'bin') {
      let li = event.target.parentNode.parentNode.parentNode;
      let ul = li.parentNode;
      ul.removeChild(li);
    } else if ((event.target.className == 'cap') || (event.target.className == 'can')) {
      let li = event.target.parentNode.parentNode.parentNode.parentNode;
      let ul = li.parentNode;
      ul.removeChild(li);
    }
  }
});
