<?php
use App\Http\Controllers\HomescreenController;
use Illuminate\Support\Facades\Route;

// eksperimen 2

Route::get('/', function () {
    return view('renders.halaman-homescreen.line');
});

Route::get('/line', function () {
    return view('renders.halaman-homescreen.line');
});

Route::post('/log-line-api', [HomescreenController::class, 'logLineApi']);
Route::get('/log-line-raw', [HomescreenController::class, 'logLineRaw']);
Route::get('/log-line-history', [HomescreenController::class, 'logLineHistory']);

Route::get('/log-line', function () {
    return view('renders.halaman-homescreen.log-line');
});

// eksperimen 1

Route::get('/point', function () {
    return view('renders.halaman-homescreen.point');
});


Route::post('/log-point-api', [HomescreenController::class, 'logPointApi']);
Route::get('/log-point-raw', [HomescreenController::class, 'logPointRaw']);
Route::get('/log-point-history', [HomescreenController::class, 'logPointHistory']);


Route::get('/log-point', function () {
    return view('renders.halaman-homescreen.log-point');
});
