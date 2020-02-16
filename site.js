var comics = JSON.parse(loadFile("/comic.json"));
var loadedComic = -1;
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
		document.getElementById("image").onload = function(){
			this.style["max-width"] = this.width;
			this.style["width"] = "100%";
		}
		document.getElementById("date").innerHTML = comics[index].date;
		//FYI, there is also a date stored in the ISO 8601 format under the variable precisedate
		document.getElementById("image").title = comics[index].mouse;
		document.getElementById("description").innerHTML = comics[index].description;
		var navbar = document.createElement("div");
		loadedComic = index;
	}
}

function navComic(index){
	if (index!=undefined){
		window.location.href = "/comic?i="+index;
	}
}

function firstComic(){
	navComic(1);
}

function prevComic(){
	var inComic = loadedComic - 1;
	if (inComic >= 1){
		navComic(inComic);
	}
}

function randComic(){
	var roll = getRandomIntInclusive(1, comics.length - 1);
	navComic(roll);
}

function nextComic(){
	var inComic = loadedComic + 1;
	if (inComic < comics.length){
		navComic(inComic);
	}
}

function latestComic(){
	navComic(comics.length - 1);
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

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}
//from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random