<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class MainController extends Controller
{
    public function index()
    {
        $response = Http::get('http://api.weatherapi.com/v1/forecast.json', [
            'key' => env('WEATHER_API_KEY'),
            'q' => 'Moscow',
            'days' => 2,
            'aqi' => 'no',
            'alerts' => 'no',
            'lang' => 'en',
            'hour' => '12'
        ]);
        return Inertia::render('App/App', [
            'data' => array_values($response->json()['forecast'])[0]
        ]);
    }
}
