const getData = async ()  => {
    const options = {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
        },
    };  
    const response = await fetch('/log-point-history', options);
    const json = await response.json();
    console.log(json.message);
    
    if(json.message == 'OK') {
        // console.log(json);
        renderMap(json.data);
    }
}

getData();


function renderMap(data) {
    // console.log(data[0]);
    const latitude = data[0].latitude;
    const longitude = data[0].longitude;
    var map = L.map('map').setView([latitude, longitude],11);
    for(let i = 0; i < data.length; i++) {
        console.log(data[i]);
        const latitude = data[i].latitude;
        const longitude = data[i].longitude;
        const keterangan = data[i].keterangan;
        L.tileLayer('https://ti	le.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(map);
            var marker = L.marker([latitude, longitude]).addTo(map);
            marker.bindPopup(`${keterangan}`);
            marker.openPopup();


        
        // var circle = L.circle([data[i].latitude, data[i].latitude],{
        //     color: 'red',
        //     fillColor: '#f03',
        //     fillOpacity: 0.5,
        //     radius: 500
        // }).addTo(map);
    }
}

// var map = L.map('map').setView([36.075742, 8060.089417],13);
// L.tileLayer('https://ti	le.openstreetmap.org/{z}/{x}/{y}.png', {
// maxZoom: 19,
// attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(map);

// var marker = L.marker([36.075742, 8060.089417]).addTo(map);
// marker.bindPopup('Lokasi ke-1');
   
// var circle = L.circle([36.075742, 8060.089417],{
//     color: 'red',
//     fillColor: '#f03',
//     fillOpacity: 0.5,
//     radius: 500
// }).addTo(map);
// circle.bindPopup('Lokasi ke-2');

// var polygon = L.polygon([
//     [36.075742, 8060.089417],
//     [36.075742, 8060.089417],
//     [36.075742, 8060.089417]
// ]).addTo(map);
// polygon.bindPopup('Lokasi ke-3');

// var popup = L.popup();
        
// function onMapClick(e) {
//     popup
//         .setLatLng(e.latlng)
//         .setContent(`you clicked at ${e.latlng.toString()}`)
//         .openOn(map)
// }

// map.on('click', onMapClick);