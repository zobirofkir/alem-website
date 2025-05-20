<?php

use Illuminate\Support\Facades\Route;

/**
 * Home Route
 */
Route::get('/', function () {
    return inertia('WelcomePage');
})->name('home');

/**
 * Service Route
 */
Route::get('/services', function() {
    return inertia('ServicePage');
})->name('services');

/**
 * About Route
 */
Route::get('/abouts', function() {
    return inertia('AboutPage');
})->name('abouts');