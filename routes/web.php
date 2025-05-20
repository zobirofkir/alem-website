<?php

use Illuminate\Support\Facades\Route;

/**
 * Home Route
 */
Route::get('/', function () {
    return inertia('WelcomePage');
})->name('home');

/**
 * About Route
 */
Route::get('/abouts', function() {
    return inertia('AboutPage');
})->name('abouts');

/**
 * Spécialités Route
 */
Route::get('/specialites', function() {
    return inertia('SpecialitePage');
})->name('specialites');

/**
 * Reproduction Route
 */
Route::get('/reproductions', function() {
    return inertia('ReproductionPage');
})->name('reproductions');

/**
 * Analyse Route
 */
Route::get('/analyses', function() {
    return inertia('AnalysePage');
})->name('analyses');
 