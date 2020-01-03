
		var voice = confirm("Enable voiceover?");
		var ss = document.getElementById("slideshow");
		var a = 'url(pictures/homepage/slideshow1.jpg)';
		var b = 'url(pictures/homepage/slideshow2.jpg)';
		var c = 'url(pictures/homepage/slideshow3.jpg)';
		var d = 'url(pictures/homepage/slideshow4.jpg)'; 
		var i = 2;
		var men1 = document.getElementById("home");
        var men2 = document.getElementById("level1");
        var men3 = document.getElementById("level2");
        var men4 = document.getElementById("about");
        var men = document.getElementById("bars");
        var x = document.getElementById("aboutus");
	    var y = document.getElementById("contactus");

         men1.onclick = function(){
            document.location.href = "file:///Users/parth_mac/Downloads/New%20homework/homepage.html";
        }
        men2.onclick = function(){
            document.location.href = "file:///Users/parth_mac/Desktop/html/htmtest.html";
        }
        men3.onclick = function(){
            document.location.href = "file:///Users/parth_mac/Desktop/html/htmtest2.html";
        }
        men4.onclick = function(){
            document.location.href = "file:///Users/parth_mac/Downloads/New%20homework/about.html";
        }
        if(voice){
	        men1.onmouseover = function(){
	            speak("home" , {pitch: 100 , speed: 170});
	        }
	        men2.onmouseover = function(){
	            speak("level 1" , {pitch: 100 , speed: 170});
	        }
	        men3.onmouseover = function(){
	            speak("level 2" , {pitch: 100 , speed: 170});
	        }
	        men4.onmouseover = function(){
	            speak("ABOUT" , {pitch: 100 , speed: 170})
	        }
	        x.onmouseover = function(){
	        	speak("LEVEL 1")
	        }

	         y.onmouseover = function(){
	        	speak("LEVEL 2")
	        }
	        men.onmouseover = function(){
	        	speak("menu" , {pitch: 100 , speed: 170})
	        }
        }



function popup(n) {
	if(n == 1){
		document.location.href = "/Users/parth_mac/Desktop/html/htmtest.html";
	}
	else{
		document.location.href = "file:///Users/parth_mac/Desktop/html/htmtest2.html"
	}
}

function menu() {
	var a = document.getElementById("menu");
	var b = document.getElementById("bar1");
	var c = document.getElementById("bar2");
	var d = document.getElementById("bar3");
	var e = document.getElementById("bars");
	a.style.left = "0";
	b.style.left = "10%";
	c.style.display = "none";
	c.style.opacity = "0";
	d.style.left = "10%";
	b.style.transform = "rotate(-35deg)";
	d.style.transform = "rotate(35deg)";
	b.style.width = "2%";
	d.style.width = "2%";
	b.style.top = "4.4%";
	b.style.borderWidth = "4px";
	d.style.borderWidth = "4px";
	e.onclick = function() {
		a.style = "";
		b.style = "";
		c.style = "";
		d.style = "";
		e.onclick = function() {menu()};
	};
}

function closeit() {
	var a = document.getElementById("popup");
	var b = document.getElementById("popup-content1");
	var c = document.getElementById("popup-content2");
	var d = document.getElementById("popup-content3");
	var e = document.getElementById("popup-content4");
	a.style = "";
	b.className = "";
	b.style = "";
	a.style = "";
	b.style = "";
	c.style = "";
	d.style = "";
	e.style = "";
	document.body.style = "";
	document.getElementById("cross").style.display = "none";
}
particlesJS.load('particles-js', 'particles.json');