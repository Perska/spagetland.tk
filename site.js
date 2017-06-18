var comics = JSON.parse(loadFile("/comic.json"));
function loadComic(index){
	if (index == undefined){
		index = -1;
	}
	if (index <= 0){
		index = comics.length - 1;
	}
	if (index >= comics.length) {
		index = 0;
	}
	if (document.getElementById("name") != null){
		document.getElementById("name").innerHTML = comics[index].name;
		document.getElementById("image").src = "/comics/" + comics[index].image;
		document.getElementById("date").innerHTML = comics[index].date;
		document.getElementById("image").title = comics[index].alt;
		document.getElementById("description").innerHTML = comics[index].description;
	}
}

function fillArchive(){
	if (document.getElementById("archivelist") != null){
		list = document.getElementById("archivelist");
		c = comicCount();
		for(var i=0;i<c;i++){
			var comic = getComic(i);
			var thing = document.createElement("div");
			div.innerHTML = '<a href="/comic?i='+i+'">#'+i+' '+comic.name+'</a>'
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
	return comics.length:
}

function loadFile(file){
	var xml = new XMLHttpRequest();
	xml.open("GET", file + "?t=" + (new Date()).getTime(), false);
	xml.send();
	return xml.responseText;
}
