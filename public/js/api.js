const token = document.querySelector('#csrf-token');
console.log(token.value);

if ('geolocation' in navigator) {

    navigator.geolocation.getCurrentPosition(async position => {
        const {latitude,longitude} = position.coords;
        const timestamp = position.timestamp;

        document.getElementById('latitude').textContent = latitude;
        document.getElementById('longitude').textContent = longitude;
   


        const submitBtn = document.querySelector('#submit-btn');
        submitBtn.addEventListener('click', async ()=>{
            const data = {latitude,longitude,timestamp};
            const keterangan = document.getElementById('keterangan');
            const greetings = document.getElementById('greetings');
         
            
            const options = {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': token.value
                },
                body: JSON.stringify({
                    'latitude' : latitude,
                    'longitude' : longitude,
                    'username' : '-',
                    'keterangan' : keterangan.value
                })
            };  
            const response = await fetch('/api', options);
            const json = await response.json();
            console.log(json.message);
            
            if(json.message == 'OK') {
                // console.log(json);
                renderMap(json.data);
                greetings.classList.remove('hidden');
                keterangan.value = '';
                alert('terimakasih atas partisipasnya ..')
                setTimeout(() => {
                    greetings.classList.add('hidden');
                }, 1000); // 2000 milliseconds = 2 seconds
            }
          
        })
        
    });


} else {
    console.log('not supported');
}


function renderMap(data) {
    var map = L.map('map').setView([data.latitude, data.longitude],13);
    L.tileLayer('https://ti	le.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(map);

    var marker = L.marker([data.latitude, data.longitude]).addTo(map);
    marker.bindPopup('Lokasi ke-1');
    
    var circle = L.circle([data.latitude, data.longitude],{
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
    }).addTo(map);
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