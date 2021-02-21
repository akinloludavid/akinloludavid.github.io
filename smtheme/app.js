const toggler = document.querySelector('#toggler')
const themeSwitch = document.querySelector('#switch')
const header = document.querySelector('#header')
const h1 = Array.from(document.querySelectorAll('h1'))
const h3 = Array.from(document.querySelectorAll('h3'))
const p = document.querySelectorAll('p')
const mode = document.querySelector('#mode')
const followerCard = Array.from(document.querySelectorAll('.followerCard'))
const overviewCard = Array.from(document.querySelectorAll('.overview-card'))
const wrapper = document.querySelector('#wrapper')
const loading = document.querySelector('#loadinng')

// !window.addEventListener('load', e=>{
// 	e.preventDefault()
// 	loading.classList.remove('d-none')
// 	loading.classList.add('d-block')
	

// })
toggler.addEventListener('click', event=>{
	event.preventDefault()

	//Convert to Dark Mode
	if (mode.innerText === "Light Mode"){
		themeSwitch.style.marginLeft = "20px";
		themeSwitch.style.backgroundColor = "hsl(232, 19%, 15%)"
		toggler.style.backgroundColor = "white"
		
		mode.innerText = "Dark Mode";
		header.style.backgroundColor = "hsl(232, 19%, 15%)";
		wrapper.style.backgroundColor = "hsl(230, 17%, 14%)";
		for (let heading1 of h1){
			heading1.style.color =  "hsl(0, 0%, 100%)";
		}
		for (let paragraph of p){
			paragraph.style.color =  "hsl(228, 34%, 66%)";
		}

		for (let heading3 of h3){
			heading3.style.color = "hsl(0, 0%, 100%)"
		}

		for (let fCard of followerCard){
			fCard.style.backgroundColor = "hsl(228, 28%, 20%)";
		}

		for (let oCard of overviewCard){
			oCard.style.backgroundColor = "hsl(228, 28%, 20%)";
		}
		
	}

	//Convert to light mode
	else {
		themeSwitch.style.marginLeft = "0px";
		themeSwitch.style.backgroundColor = "hsl(0, 0%, 100%)"
		toggler.style.backgroundColor = "white"
		mode.innerText = "Light Mode"; 
		header.style.backgroundColor = "hsl(225, 100%, 98%)";
		wrapper.style.backgroundColor = "hsl(0, 0%, 100%)";
		for (let heading1 of h1){
			heading1.style.color =  "hsl(230, 17%, 14%)";
		}
		for (let paragraph of p){
			paragraph.style.color =  "hsl(228, 34%, 66%)";
		}

		for (let heading3 of h3){
			heading3.style.color = "hsl(230, 17%, 14%)";
		}

		for (let fCard of followerCard){
			fCard.style.backgroundColor = "hsl(227, 47%, 96%)";
		}

		for (let oCard of overviewCard){
			oCard.style.backgroundColor = "hsl(227, 47%, 96%)";
		}
	}
	
})