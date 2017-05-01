// Selecting the elements, that will have events and methods

// Text field, where the task is typed.
const taskInput = document.querySelector('input.task');

const tasks = document.querySelector('ul.tasks');
const list = tasks.children;
const imageSrc = "delete.svg";

function attachButton(li) {
  let deleteButton = document.createElement('img');
  deleteButton.className = 'delete';
  deleteButton.setAttribute("src", imageSrc);
  li.appendChild(deleteButton);
}

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
  if (event.target.tagName == 'IMG') {
    if (event.target.className == 'delete') {
      let li = event.target.parentNode;
      let ul = li.parentNode;
      ul.removeChild(li);
    }
  }
});
