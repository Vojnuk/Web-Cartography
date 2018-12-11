

var world = document.getElementById('world');
var scale = 3;
var entries = cities.features;

for (var i = 0; i < entries.length; ++i) {
  
  var entry = entries[i];
  var coords = entry.geometry.coordinates;
  var lon = coords[0];
  var lat = coords[1];
  var x = scale * (180 + lon);
  var y = scale * (90 - lat);
  
  var name = entry.properties.Location;
  var createCity = document.createElement('span');
  createCity.style.cssText = 'left:' + (x - 2) + 'px;top:' + (y - 2) + 'px';
  createCity.setAttribute('class', 'city');
  createCity.setAttribute('title', name);

  world.appendChild(createCity);

  
  
  
  createCity.addEventListener('mouseenter', function(evt){
	this.classList.add('highlight');
    var name = this.getAttribute('title'); 
    document.getElementById('info').textContent = name;
	
	//var cursor = document
	//console.log(cursor);
	
	var temps = document.createElement('div');
	temps.classList.add('tempsPosition');
	temps.textContent = name;
	temps.setAttribute('id','temps');
	
	var city = this;
	city.appendChild(temps);
  });
  
  
  
  createCity.addEventListener('mouseleave', function(evt){
	this.classList.remove('highlight');
    document.getElementById('info').textContent = ''; 
	document.getElementById('temps').parentNode.removeChild(document.getElementById("temps"))
	
  });

 




}

