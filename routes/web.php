<?php
use App\Http\Controllers\HomescreenController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('renders.halaman-homescreen.index');
});

Route::get('/log', function () {
    return view('renders.halaman-homescreen.show');
});

Route::post('/api', [HomescreenController::class, 'api']);
Route::get('/json', [HomescreenController::class, 'json']);
Route::get('/history', [HomescreenController::class, 'history']);