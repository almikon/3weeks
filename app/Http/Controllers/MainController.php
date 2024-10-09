<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class MainController extends Controller
{
    public function index()
    {
        $response = Http::get('http://api.weatherapi.com/v1/current.json', [
            'key' => env('WEATHER_API_KEY'),
            'q' => 'London',
            'days' => 1,
            'aqi' => 'no',
            'alerts' => 'no',
            'lang' => 'en',
            'hours' => '3'
        ]);
        return Inertia::render('App/App', [
            'response' => $response->json()
        ]);
    }
}
