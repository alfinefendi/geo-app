<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
    <input hidden id="csrf-token" value="{{csrf_token()}}">
    <div class="container p-2">
        <ul class="grid grid-cols-1 gap-2">
            <li>
                <p>latitude : <span id="latitude"></span></p>
                <p>longitude : <span id="longitude"></span></p>
                <textarea name="keterangan" id="keterangan" class="border mt-2" placeholder="keterangan"></textarea>
            </li>
        </ul>
    <button id="submit-btn" class="bg-gray-200 px-3 py-1 mt-2 rounded-sm">Submit</button>
    <p class="mt-2 text-green-400 hidden" id="greetings">Terimakasih atas partisipasinya ..</p>
    </div>
 
    <script src="js/geo.js"></script>
</body>
</html>