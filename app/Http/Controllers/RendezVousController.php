<?php

namespace App\Http\Controllers;

use App\Http\Requests\RendezVousRequest;
use App\Mail\RendezVousMail;
use App\Models\RendezVous;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class RendezVousController extends Controller
{
    /**
     * Store a new rendez-vous.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(RendezVousRequest $request)
    {
        $rendezVous = RendezVous::create($request->validated());
        
        Mail::to('zobirofkir19@gmail.com')->send(new RendezVousMail($rendezVous));

        return Redirect::back()->with('success', 'Rendez-vous enregistré avec succès.');
    }
}