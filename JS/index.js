const root = document.querySelector(':root')
const themeBtn = document.querySelector('.theme-button')
let lightMode = localStorage.getItem('light-theme') === 'true'

root.classList.toggle('light-theme', lightMode)

themeBtn.onclick = () => {
	root.classList.toggle('light-theme')
	lightMode = !lightMode
	localStorage.setItem('light-theme', lightMode)
}
