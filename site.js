function loadComic(index){
	if (index == undefined) { index = -1; }
	var comics = JSON.parse(loadFile("/comic.json"));
	if (index <= -1){
		index = comics.length;
	}
	if (index >= comics.length) {
		index = 0;
	}
	document.getElementById("name") = comics[index].name;
	document.getElementById("image") = comics[index].image;
}

function loadFile(file){
	var xml = new XMLHttpRequest();
	xml.open("GET", file + "?t=" + (new Date()).getTime(), false);
	xml.send();
	return xml.responseText;
}
