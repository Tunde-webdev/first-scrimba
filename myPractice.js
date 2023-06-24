
const countEl = document.querySelector('#count-el');
let count = 0;

const incrementBtn = document.querySelector('#increment-btn');
	const increment = ()=> {
		count += 1
		countEl.textContent = count
	}
incrementBtn.addEventListener('click', increment);

const saveBtn = document.querySelector('#save-btn');
	const save = ()=> {
		const saveEl = document.querySelector('#save-el');
		const countAdd = `${count} - `
		saveEl.textContent += countAdd

		countEl.textContent = 0
		count = 0
	} 
saveBtn.addEventListener('click', save);

