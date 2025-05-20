<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return inertia('WelcomePage');
})->name('home');


Route::get('/services', function() {
    return inertia('ServicePage');
})->name('services');