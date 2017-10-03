var comics = JSON.parse(loadFile("/comic.json"));
function loadComic(index){
	if (index == undefined){
		index = getParameterByName("i");
		if (index == null){
			index = -1;
		}
		index = Number(index);
	}
	if (index <= 0){
		index = comics.length - 1;
	}
	if (index >= comics.length) {
		index = 0;
	}
	if (document.getElementById("name") != null){
		document.getElementById("name").innerHTML = comics[index].name;
		document.title = comics[index].name + " - Spaget Land"
		document.getElementById("image").src = "/comics/" + comics[index].image;
		document.getElementById("date").innerHTML = comics[index].date;
		//FYI, there is also a date stored in the ISO 8601 format under the variable precisedate
		document.getElementById("image").title = comics[index].alt;
		document.getElementById("description").innerHTML = comics[index].description;
	}
}

function fillArchive(){
	if (document.getElementById("archivelist") != null){
		list = document.getElementById("archivelist");
		c = comicCount();
		for(var i=1;i<c;i++){
			var comic = getComic(i);
			var thing = document.createElement("div");
			thing.innerHTML = '<a href="/comic?i='+i+'">Comic '+i+': '+comic.name+'</a>'
			list.appendChild(thing);
		}
	}
}

function getComic(index){
	if (index == undefined){
		index = -1;
	}
	if (index <= 0){
		index = comics.length - 1;
	}
	if (index >= comics.length) {
		index = 0;
	}
	return comics[index];
}

function comicCount(){
	return comics.length;
}

function loadFile(file){
	var xml = new XMLHttpRequest();
	xml.open("GET", file + "?t=" + (new Date()).getTime(), false);
	xml.send();
	return xml.responseText;
}

//stolen functions:
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
//from https://stackoverflow.com/a/901144
