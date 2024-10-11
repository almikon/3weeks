<?php

namespace App\Http\Controllers;

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

        $json = $response->json();
        return Inertia::render('App/App', [
            'city_name' => $json['location']['name'],
            'data' => $json['forecast']['forecastday']
        ]);
    }
}
