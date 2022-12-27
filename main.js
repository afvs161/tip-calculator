const price = document.querySelector('input[type=number]'),
	percent = document.querySelector('input[type=range]'),
	h2 = document.querySelector('h2')

percent.addEventListener('change', event => {
	let percent = (price.value / 100) * event.target.value
	h2.textContent = `(${event.target.value}%) $${(percent + +price.value).toFixed(2)}`
})
