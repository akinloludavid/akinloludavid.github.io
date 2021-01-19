var toggler = document.getElementById("toggle");
var modetext = document.getElementById("modetext");
var y = document.querySelectorAll("smCard.smcard1")
var topbg = document.querySelector(".top-background");
var mainbg = document.querySelector(".container");
var header1 = document.querySelector('.header1');
var number = document.querySelector('.h1');
modetext.innerText = "Dark Mode";


/*

toggler.addEventListener('click', function(){
	var toggler2 = document.getElementById("toggle2")
	if (!toggler2.classList.contains('mx-3')){
	

		toggler2.classList.add('mx-3');
		modetext.innerText = "Light Mode"
		mainbg.backgroundColor = 'red'
		for (let i = 0; i<smcard1.length; i++){
		smcard1[0].backgroundColor = 'red'
		smcard1[i].display = none
		}
	}
	else {
		toggler2.classList.remove('mx-3');
		modetext.innerText = "Dark Mode"
		for (let i = 0; i<smcard1.length; i++){
			smcard1[i].backgroundColor = 'blue'
			smcard1[i].display = block;
			}
	}
})*/

//y.style.backgroundColor = 'hsl(227, 47%, 96%)'
toggler.addEventListener('click', function(){
	var toggler2 = document.getElementById("toggle2");
//Light mode
	if (!toggler2.classList.contains('mx-3')){
		toggler2.classList.add('mx-3');
		modetext.innerText = "Light Mode";
		topbg.style.backgroundColor = 'hsl(225, 100%, 98%)';
		mainbg.style.backgroundColor = 'hsl(0, 0%, 100%)';
		for (let i = 0; i<y.length; i++){
			y.style.backgroundColor = 'hsl(227, 47%, 96%)';
		}

		header1.style.color = 'hsl(230, 17%, 14%)';
		toggler.style.backgroundColor = 'hsl(230, 22%, 74%)';
		modetext.style.color = 'hsl(228, 12%, 44%)';
	}
	//Dark Mode
	else if (toggler2.classList.contains('mx-3')){
		toggler2.classList.remove('mx-3');
		modetext.innerText = "Dark Mode";
		topbg.style.backgroundColor = 'hsl(232, 19%, 15%)';
		mainbg.style.backgroundColor = 'hsl(230, 17%, 14%)';
		y.style.backgroundColor = 'hsl(228, 28%, 20%)';
		header1.style.color = 'hsl(0, 0%, 100%)';
		toggler.style.backgroundColor = 'hsl(230, 22%, 74%)';
		modetext.style.color = 'hsl(228, 12%, 44%)';
	}


});

