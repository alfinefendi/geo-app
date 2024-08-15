const getData = async ()  => {
    const options = {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
        },
    };  
    const response = await fetch('/log-line-history', options);
    const json = await response.json();
    console.log(json.message);
    
    if(json.message == 'OK') {
        // console.log(json);
        renderMap(json.data);
        console.log(json.data);
    }
}

getData();

let latlngs = [];
// var latlngs = [
//     [[45.51, -122.68],
//      [37.77, -122.43],
//      [34.04, -118.2]],
//     [[40.78, -73.91],
//      [41.83, -87.62],
//      [32.76, -96.72]]
// ];

function renderMap(data) {
    // console.log(data[0]);
    const latitude = data[0].latitude;
    const longitude = data[0].longitude;
    var map = L.map('map').setView([latitude, longitude],11);
    for(let i = 0; i < data.length; i++) {
        // console.log(data[i]);
        const latitude = data[i].latitude;
        const longitude = data[i].longitude;
        const keterangan = data[i].keterangan;
        latlngs.push([latitude,longitude]);
        L.tileLayer('https://ti	le.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 25,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(map);
            var polyline = L.polyline(latlngs, {color: 'blue'}).addTo(map);
            // var marker = L.marker([latitude, longitude]).addTo(map);
            // marker.bindPopup(`${keterangan}`);
            // marker.openPopup();
            map.fitBounds(polyline.getBounds());
    }
    console.log(latlngs);
}
