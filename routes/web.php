<?php
use App\Http\Controllers\HomescreenController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('renders.halaman-homescreen.index');
});

Route::post('/api', [HomescreenController::class, 'api']);