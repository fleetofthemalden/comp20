var myLat = 42.4696969;
var myLng = -71.1696969;
var request;
var me = new google.maps.LatLng(myLat, myLng);

var waldo;
var carmen;
var myOptions;
var map;
var marker;
var infowindow = new google.maps.InfoWindow();
var places;

var reqaction;
var reqinfo;

var stations;
var plat;

function stationInit(){
	stations = new Object;
	plat = {"RALEN" : 0, "RDAVN" : 1, "RPORN" : 2, "RHARN" : 3, "RCENN" : 4, "RKENN" : 5, "RMGHN" : 6, "RPRKN" : 7, "RDTCN" : 8, "RSOUN" : 9, "RBRON" : 10, "RANDN" : 11, "RJFKN" : 12, "RSAVN" : 13, "RFIEN" : 14, "RSHAN" : 15, "RASHN": 16, "RNQUN" : 17, "RWOLN" : 18, "RQUCN" : 19, "RQUAN" : 20, "RBRAN" : 21, "RALES" : 0, "RDAVS" : 1, "RPORS" : 2, "RHARS" : 3, "RCENS" : 4, "RKENS" : 5, "RMGHS" : 6, "RPRKS" : 7, "RDTCS" : 8, "RSOUS" : 9, "RBROS" : 10, "RANDS" : 11, "RJFKS" : 12, "RSAVS" : 13, "RFIES" : 14, "RSHAS": 15, "RASHS" : 16, "RNQUS" : 17, "RWOLS" : 18, "RQUCS" : 19, "RQUAS" : 20, "RBRAS" : 21};
	var st_names = ["Alewife", "Davis", "Porter", "Harvard", "Central", "Kendal/MIT", "Charles/MGH", "Park st", "Downtown Crossing", "South Station", "Broadway", "Andrew", "JFK/UMASS", "Savin Hill", "Fields Corner", "Shawmut", "Ashmont", "North Quincy", "Wollast", "Quincy Center", "Quincy Adams", "Braintree"];	
	var latitude = [42.395428, 42.39674, 42.3884, 42.373362, 42.365486, 42.36249079, 42.361166, 42.35639457, 42.355518, 42.352271, 42.342622, 42.330154, 42.320685, 42.31129, 42.300093, 42.29312583, 42.284652, 42.275275, 42.2665139, 42.251809, 42.233391, 42.2078543];
	var longitude = [-71.142483, -71.121815, -71.119149, -71.118956, -71.103802, -71.08617653, -71.0702628, -71.0624242, -71.060225,-71.055242, -71.056967, -71.057655, -71.052391, -71.053331, -71.061667, -71.06573796, -71.064489, -71.029538, -71.0203369, -71.005409, -71.007153, -71.0011385];
	var nor_key = ["RALEN", "RDAVN", "RPORN", "RHARN", "RCENN", "RKENN", "RMGHN", "RPRKN", "RDTCN", "RSOUN", "RBRON", "RANDN", "RJFKN", "RSAVN", "RFIEN", "RSHAN", "RASHN", "RNQUN", "RWOLN", "RQUCN", "RQUAN", "RBRAN"];
	var sth_key = ["RALES", "RDAVS", "RPORS", "RHARS", "RCENS", "RKENS", "RMGHS", "RPRKS", "RDTCS", "RSOUS", "RBROS", "RANDS", "RJFKS", "RSAVS", "RFIES", "RSHAS", "RASHS", "RNQUS", "RWOLS", "RQUCS", "RQUAS", "RBRAS"];	
	var station;
	var len = st_names.length;
	for(i=0; i<len; i++){
		station = new Object;
		station.name = st_names[i];
		station.latd = latitude[i];
		station.lngd = longitude[i];
		station.nkey = nor_key[i];
		station.skey = sth_key[i];
		station.trains = new Array();
		stations[i] = station;
	}
}

function humanInit(){
	waldo = new Object;
	waldo.name = "Waldo";
	waldo.latd = 0;
	waldo.lngd = 0;
	waldo.note = "Where's Waldo? [Hint: Not in Boston]";
	carmen = new Object;
	carmen.name = "Carmen Sandiego";
	carmen.latd = 0;
	carmen.lngd = 0;
	carmen.note = "Where in the world is Carmen Sandiego? [Hint: Not in Boston]";
}

function init(){
	myOptions = {
		zoom: 13,
		center: me,
		mapTypeId: google.maps.MapTypeId.ROADMAP			
	};
	stationInit();
	humanInit();
	reqaction = addtrains;
	map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
	makeRequest("http://mbtamap-cedar.herokuapp.com/mapper/redline.json");
	reqaction = findWaldo;
	makeRequest("http://messagehub.herokuapp.com/a3.json");
	getMyLocation();
}

function makeRequest(str){
	request = new XMLHttpRequest();
	request.open("GET", str, true);
	request.send(null);
	request.onreadystatechange = callback;
}

function getMyLocation(){
	if (navigator.geolocation) { // the navigator.geolocation object is supported on your browser
		navigator.geolocation.getCurrentPosition(function(position) {
		myLat = position.coords.latitude;
		myLng = position.coords.longitude;
		renderMe();
		});
	}
	else {
		alert("Geolocation is not supported by your web browser.  What a shame!");
	}
}

function parse(str){
	reqinfo = JSON.parse(str);
	reqaction();
}
function nothing(){
}
	
function addtrains(){
	for(i=0; i<reqinfo.length; i++){
		if(reqinfo[i]["InformationType"] == "Predicted"){
			addtrain(reqinfo[i]);
		}
	}
	reqaction = nothing;
}

function addtrain(red){
	var index = red["PlatformKey"];
	var train = new Object;
	if(index.charAt(4) == 'S'){
		if(red["Route"] == "0"){
			train.dest = "Braintree";
		}
		else{
			train.dest = "Ashmont";
		}
	}
	else{
		train.dest = "Alewife";
	}
	train.time = red["TimeRemaining"];
	stations[plat[index]]["trains"].push(train);
}

function findWaldo(){
	for(i=0; i<reqinfo.length; i++){
		if(reqinfo[i]["name"] == "Waldo"){
			waldo.latd = reqinfo[i]["loc"]["latitude"];
			waldo.lngd = reqinfo[i]["loc"]["longitude"];
			waldo.note = reqinfo[i]["loc"]["note"];
		}
		if(reqinfo[i]["name"] == "Carmen Sandiego"){
			carmen.latd = reqinfo[i]["loc"]["latitude"];
			carmen.lngd = reqinfo[i]["loc"]["longitude"];
			carmen.note = reqinfo[i]["loc"]["note"];
		}
	}
	reqaction = nothing;
}
	

function renderMe(){
	me = new google.maps.LatLng(myLat, myLng);

	// Update map and go there...
	map.panTo(me);

	// Create a marker
	marker = new google.maps.Marker({
		position: me,
		title: "This is your sorry ass."
	});
	marker.setMap(map);

	// Open info window on click of marker
	google.maps.event.addListener(marker, 'click', function() {
		infowindow.setContent(marker.title);
		infowindow.open(map, marker);
	});

}

function callback(){
	if(request.readyState == 4){
		try{
			parse(request.responseText);
		}
		catch(err){
			alert("asf;lsn");
			
		}
		
	}
}

function createMarker(place){
	var placeLoc = place.geometry.location;
	var marker = new google.maps.Marker({
		map: map,
		position: place.geometry.location
	});

	google.maps.event.addListener(marker, 'click', function() {
		infowindow.close();
		infowindow.setContent(place.name);
		infowindow.open(map, this);
	});
 }