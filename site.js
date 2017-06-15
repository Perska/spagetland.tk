function loadComic(index){
	if (index == undefined) { index = -1; }
	var comics = JSON.parse(loadFile("/comic.json"));
	if (index <= -1){
		index = comics.length;
	}
	if (index >= comics.length) {
		index = 0;
	}
	document.getElementById("name").innerHTML = comics[index].name;
	document.getElementById("image").src = "/comics/" + comics[index].image;
	//to-do: add date display thing
	document.getElementById("image").title = comics[index].alt;
	
}

function loadFile(file){
	var xml = new XMLHttpRequest();
	xml.open("GET", file + "?t=" + (new Date()).getTime(), false);
	xml.send();
	return xml.responseText;
}
