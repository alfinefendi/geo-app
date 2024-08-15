const token = document.querySelector('#csrf-token');

if ('geolocation' in navigator) {

    let latitudeEl = document.getElementById('latitude');
    let longitudeEl = document.getElementById('longitude');
    let statusEl = document.getElementById('status');
    let mesinEl = document.getElementById('mesin');
    let detikEl = document.getElementById('detik');
    let i = 1;
    let changeTimes = 1;


    async function saveLocation(data) {
        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': token.value
            },
            body: JSON.stringify({
                'latitude' : data.latitude,
                'longitude' : data.longitude,
            })
        };  
        const response = await fetch('/log-line-api', options);
        const json = await response.json();
        console.log(json.message);
        
        if(json.message == 'OK') {
            console.log('menyimpan data kedalam database.');
        }
    }

    /**
     * Function to get the current geolocation of the user.
     * @returns {Promise<Object>} A promise that resolves to an object containing latitude and longitude.
     */
    function getLocation() {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
                position => {
                    const { latitude, longitude } = position.coords;
                    const data = { latitude, longitude };
                    resolve(data);
                    console.log("try to get position : " + changeTimes++);
                },
                error => {
                    reject(error);
                }
            );
        });
    }

        // Example usage:
    async function showLocation() {
        try {
            if (navigator.onLine) {
                const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
                const effectiveType = connection ? connection.effectiveType : 'unknown';
                console.log('Effective connection type:', effectiveType);
                    
                if (effectiveType === 'slow-2g' || effectiveType === '2g') {
                    document.getElementById('status').textContent = 'Online (slow connection, skip tracking)';
                    document.getElementById('connection-type').textContent = effectiveType;
                    console.log('Skipping location update due to slow connection.');
                    return;
                }
                detikEl.textContent = i++;
                const data = await getLocation();
                saveLocation(data);
                latitudeEl.textContent = data.latitude;
                longitudeEl.textContent = data.longitude;
                statusEl.textContent = 'Online';
                mesinEl.textContent = 'Aktif';
                document.getElementById('connection-type').textContent = effectiveType;
            } else {
                console.log('Cannot get location. Offline.');
                latitudeEl.textContent = 'Offline';
                longitudeEl.textContent = 'Offline';
                statusEl.textContent = 'Offline';
                mesinEl.textContent = 'Mati';
                document.getElementById('connection-type').textContent = 'N/A';
            }
        } catch (error) {
            console.error('Error getting location:', error);
        }
    }



    function handleOnline() {
        console.log('Network status changed: Online');
        statusEl.textContent = 'Online';
        mesinEl.textContent = 'Aktif';
        showLocation();
    }

    function handleOffline() {
        console.log('Network status changed: Offline');
        statusEl.textContent = 'Offline';
        mesinEl.textContent = 'Mati';
        document.getElementById('connection-type').textContent = 'N/A';
        stop();
    }

    let submitButton = document.getElementById('submit-btn');
    let intervalId = null; // To keep track of the interval ID
    let isRunning = false; // To track whether the interval is running

    submitButton.addEventListener('click', () => {
        if (isRunning) {
            stop();
            submitButton.textContent = 'Start'; // Change button text to 'Start'
        } else {
            start();
            submitButton.textContent = 'Stop'; // Change button text to 'Stop'
        }
    });

    function start() {
        if (navigator.onLine) {
            showLocation();
        } else {
            statusEl.textContent = 'Offline';
            mesinEl.textContent = 'Mati';
            document.getElementById('connection-type').textContent = 'N/A';
        }

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        intervalId = setInterval(() => {
            console.log('getting a data.');
            showLocation();
        }, 1000);     
        isRunning = true; 
    }

    function stop() {
        if (intervalId) {
            clearInterval(intervalId); // Clear the interval
            intervalId = null; // Reset the interval ID
        }
        isRunning = false; 
        window.removeEventListener('online', handleOnline);
        window.removeEventListener('offline', handleOffline);
    }


} else {
    console.log('not supported');
}
