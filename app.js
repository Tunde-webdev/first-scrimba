// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count



const countInc = document.querySelector('#count-el');
let count = 0;
const btn = document.querySelector('#increment-btn');
	const increment = () => {
		count += 1
		countInc.textContent = count
	}
btn.addEventListener('click', increment)


//  Create a function, save(), which logs out the count when it's called
const savebtn = document.querySelector('#save-btn');
const save = () => {
	// Grab the save-el paragrah and store it in a variable called saveEl
	// Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph
	const saveEl = document.querySelector('#save-el')
	const countcc = ` ${count} - `
	saveEl.textContent += countcc

	// now we need to set the count back to 0 when we click save
	countInc.textContent = 0
	count = 0

}
savebtn.addEventListener('click', save)


