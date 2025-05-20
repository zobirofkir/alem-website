<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactRequest;
use App\Http\Resources\ContactResource;
use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    /**
     * Store a new contact message.
     *
     * @param  \Illuminate\Http\ContactRequest  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(ContactRequest $request) : ContactResource
    {
        return ContactResource::make(
            Contact::create($request->validated())
        );
    }
}