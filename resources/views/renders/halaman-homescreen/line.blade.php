<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
    <script src="https://cdn.tailwindcss.com"></script>   <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
     integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
     crossorigin=""/>
      <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
     integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
     crossorigin=""></script>

</head>
<body>
    <input hidden id="csrf-token" value="{{csrf_token()}}">
    <div class="container p-2">
        <a href="/log-point-raw" class="text-blue-700 underline text-sm">Log Point RAW</a> |
        <a href="/log-point" class="text-blue-700 underline text-sm">Log Point</a> |
        <a href="/log-line-raw" class="text-blue-700 underline text-sm">Log Line RAW</a> |
        <a href="/log-line" class="text-blue-700 underline text-sm">Log Line</a>
        <ul class="grid grid-cols-1 gap-2 mt-2">
            <li>
                <p>latitude : <span id="latitude">Proses identifikasi ..</span></p>
                <p>longitude : <span id="longitude">Proses identifikasi ..</span></p>
                <p class="mt-3">internet : <span id="status">Proses identifikasi ..</span></p>
                <p>mesin tracking : <span id="mesin">Mati</span></p>
                <p>koneksi internet : <span id="connection-type">n/a</span></p>
                <p>detik berjalan : <span id="detik">n/a</span></p>
            </li>
        </ul>
    <button  id="submit-btn" class="bg-gray-200 px-3 py-1 mt-2 rounded-sm">Jalankan</button>
    <p class="mt-2 text-green-400 hidden" id="greetings">sekali lagi, saya ucapkan terimakasih.</p>
       {{-- <p class="mt-2 text-lg">apakah anda sedang berada disini : </p>   --}}
    </div>
    <div id='map' class="w-full h-screen"></div>
   
    <script src="js/log-line-api.js"></script>
</body>
</html>