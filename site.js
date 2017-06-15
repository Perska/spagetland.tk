function loadComic(index){
	var comics = JSON.parse(loadFile("/comic.json"));
	alert(comics[0].name);
}

function loadFile(file){
	var xml = new XMLHttpRequest();
	xml.open("GET", file + "?t=" + (new Date()).getTime(), false);
	xml.send();
	return xml.responseText;
}