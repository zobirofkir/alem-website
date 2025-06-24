<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\RendezVousController;
use Illuminate\Support\Facades\Route;

/**
 * Home Route
 */
Route::get('/', function () {
    return inertia('WelcomePage');
})->name('home');

/**
 * Process contact form submission
 */
Route::post('/contacts', [ContactController::class, 'store'])->name('contact.store');

/**
 * Process rendez-vous form submission
 */
Route::post('/rendez-vous', [RendezVousController::class, 'store'])->name('rendez-vous.store');