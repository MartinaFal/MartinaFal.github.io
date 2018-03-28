var map = document.getElementById("svg-kraje");
var SVGDocument = map.getSVGDocument();
//console.log(SvGDocument);
var paths = SVGDocument.getElementsByTagName("path");
var opacity = 0.3;

function changeOpacity(object) {
	if(opacity < 1) {
		opacity += 0.05;
		timeout = setTimeout(function (){
			changeOpacity(object);
		},50);
	}
	object.style.opacity = opacity;
}

//za 50 milisekund to přidá 0.05 pak tu funkci zavolá znovu dokud to nebude 100%

function increaseOpacity(event) {
	changeOpacity(event.target);


}

//function decreaseOpacity(event) {
	
//}

window.onload = function () {
	for (i = 0; i < paths.length; i++) {
		paths[i].style.stroke = "red";
		paths[i].style.fill = "yellow";
		paths[i].style.opacity = opacity;
	}
	for (j = 0; j < paths.length; j++) {
		paths[j].addEventListener("mouseover", increaseOpacity);
		//paths[j].addEventListener("mouseout", decreaseOpacity);
	}
}