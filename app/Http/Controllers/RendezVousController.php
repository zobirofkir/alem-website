<?php

namespace App\Http\Controllers;

use App\Http\Requests\RendezVousRequest;
use App\Mail\RendezVousMail;
use App\Mail\RenderVousUserMail;
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
        
        /**
         * Envoyer l'email à l'administrateur
         */
        Mail::to(env('MAIL_RECEIVER'))->send(new RendezVousMail($rendezVous));
        
        /**
         * Envoyer l'email de confirmation à l'utilisateur
         */
        Mail::to($rendezVous->email)->send(new RenderVousUserMail($rendezVous));

        return Redirect::back()->with('success', 'Rendez-vous enregistré avec succès.');
    }
}