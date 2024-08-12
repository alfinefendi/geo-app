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
        <a href="/json" class="text-blue-700 underline text-sm">Data RAW </a> |
        <a href="/log" class="text-blue-700 underline text-sm">Riwayat Partisipan</a>
        <ul class="grid grid-cols-1 gap-2 mt-2">
            <li>
                <p>latitude : <span id="latitude"></span></p>
                <p>longitude : <span id="longitude"></span></p>
                <textarea name="keterangan" id="keterangan" class="border mt-2" placeholder="keterangan"></textarea>
            </li>
        </ul>
    <button id="submit-btn" class="bg-gray-200 px-3 py-1 mt-2 rounded-sm">Submit</button>
    <p class="mt-2 text-green-400 hidden" id="greetings">sekali lagi, saya ucapkan terimakasih.</p>
       {{-- <p class="mt-2 text-lg">apakah anda sedang berada disini : </p>   --}}
    </div>
    <div id='map' class="w-full h-screen"></div>
   
    <script src="js/api.js"></script>
</body>
</html>