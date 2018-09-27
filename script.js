setTimeout(function(){document.getElementById("POP").style.display = "block"}, 1000);


var non = document.getElementById('no');
	non.onclick = function (){
		document.getElementById("POP").style.display = "none";
	}; 
var oui = document.getElementById('yes');
	oui.onclick = function (){
		document.getElementById("POP").style.display = "none";
	}; 

var magenta = document.getElementById('back-magenta').getElementsByTagName('span');
var bleu = document.getElementById('police-bleu').getElementsByTagName('span');
var vert = document.getElementById('police-header-green').getElementsByTagName('span');
var police = document.getElementById('changement-police').getElementsByTagName('span');

magenta[0].onclick = function(){
	document.querySelector('body').style.backgroundColor = "magenta";
	document.getElementById('back-magenta').style.backgroundColor = "yellow";
}

bleu[0].onclick = function(){
	var p = document.querySelector('body').getElementsByTagName('p');
		for(var i = 0; i < p.length; i++){
			p[i].style.color = "blue";
		}
	var h2 = document.querySelector('body').getElementsByTagName('h2');
		for(var i = 0; i < h2.length; i++){
			h2[i].style.color = "blue";
		}
	var h1 = document.querySelector('body').getElementsByTagName('h1');
		for(var i = 0; i < h1.length; i++){
			h1[i].style.color = "blue";
		}
	var h3 = document.querySelector('body').getElementsByTagName('h3');
		for(var i = 0; i < h3.length; i++){
			h3[i].style.color = "blue";
		}
}

vert[0].onclick = function(){
	var h1 = document.querySelector('body').getElementsByTagName('h1');
		for(var i = 0; i < h1.length; i++){
			h1[i].style.color = "green";
			console.log(h1[i]);
		}
	var h2 = document.querySelector('body').getElementsByTagName('h2');
		for(var i = 0; i < h2.length; i++){
			h2[i].style.color = "green";
		}
	var h3 = document.querySelector('body').getElementsByTagName('h3');
		for(var i = 0; i < h3.length; i++){
			h3[i].style.color = "green";
		}
	
}

police[0].onclick = function(){
	var p = document.querySelector('body').getElementsByTagName('p');
		for(var i = 0; i < p.length; i++){
			p[i].style.fontFamily= "Sans-Serif";
		}
	var h2 = document.querySelector('body').getElementsByTagName('h2');
		for(var i = 0; i < h2.length; i++){
			h2[i].style.fontFamily = "Comic";
		}
	var h1 = document.querySelector('body').getElementsByTagName('h1');
		for(var i = 0; i < h1.length; i++){
			h1[i].style.fontFamily = "Comic";
		}
	var h3 = document.querySelector('body').getElementsByTagName('h3');
		for(var i = 0; i < h1.length; i++){
			h1[i].style.fontFamily = "Comic";
		}
	
}
