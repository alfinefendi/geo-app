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
                console.log(json);
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