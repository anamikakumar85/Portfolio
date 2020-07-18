

const htmlBar = document.querySelector('.bar-html')
const jsBar = document.querySelector('.bar-javascript')
const uiBar = document.querySelector('.bar-ui')
const phpBar = document.querySelector('.bar-php')


var t1 = new TimelineLite()

t1.fromTo(htmlBar, .75, {width: `calc(0% - 6px)`}, {width:`calc(90% - 6px)`, ease: Power4.easeOut})
    .fromTo(jsBar, .75, {width: `calc(0% - 6px)`}, {width:`calc(75% - 6px)`, ease: Power4.easeOut})
    .fromTo(uiBar, .75, {width: `calc(0% - 6px)`}, {width:`calc(95% - 6px)`, ease: Power4.easeOut})
    .fromTo(phpBar, .75, {width: `calc(0% - 6px)`}, {width:`calc(90% - 6px)`, ease: Power4.easeOut})


const contoller = new ScrollMagic.Controller()
const scene = new ScrollMagic.Scene({
    triggerElement:'#skills',
    triggerHook: 0
})
.setTween(t1)
.addTo(contoller)

const showRequiredCategory = event => {
    const getId = event.id
    const links = document.querySelectorAll('.work-category button')
    for(i=0;i<links.length;i++){
        if(links[i].hasAttribute('class')){  
            links[i].classList.remove('active')
        }
    }

    event.classList.add('active')
    const getCategory = document.querySelector(`.category-${getId}`)
    const categories = document.querySelectorAll('div[class ^= "category-"]')
    for(i=0;i<categories.length;i++){
        if(categories[i].hasAttribute('class')){  
            categories[i].classList.remove('showCategory')
            categories[i].classList.add('hideCategory')
        }
    }
    getCategory.classList.remove('hideCategory')
    getCategory.classList.add('showCategory')
}

	  	//***********Get the button ************************/
	  	mybutton = document.getElementById("myBtn");
	  	//when the user scroll down 20px from the top of document, show the button
	  	window.onscroll = function(){scrollFunction()};

	  	function scrollFunction(){
	  		if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
                  mybutton.style.display = "block";
	  		}else{
                  mybutton.style.display = "none";    
	  		}
	  	}

	  	//when the user clicks on the button, scroll to the top of document
	  	function topFunction(){
	  		document.body.scrollTop = 0; //for safari
	  		document.documentElement.scrollTop =0;//for chrome ,firefox,IE and OPERA
          }


////////////////////nav animation ////////////////////////
const hamburger = document.querySelector(".hamburger");
const navlinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");


hamburger.addEventListener('click', () => {
   
    navlinks.classList.toggle("open");
   
}); 
navlinks.addEventListener('click',() => {
       navlinks.classList.toggle("open");
});


