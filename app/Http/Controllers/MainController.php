<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class MainController extends Controller
{
    public function index()
    // {
    //     return view('welcome');
    // }
    // public function show(Event $event)
    // public function show($event)
    {
        return Inertia::render('App/App', [
            'user' => [
                'name' => 'Jhon Doe',
            ],
            // 'event' => $event->only(
            //     'id',
            //     'title',
            //     'start_date',
            //     'description'
            // ),
        ]);
    }
}
