<?php

namespace App\Http\Controllers;

use App\Models\WeatherForecast;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class MainController extends Controller
{
    public function index()
    {
        return Inertia::render('App/App', [
            'initialCity' => 'Moscow'
        ]);
    }

    public function getForecasts(Request $request)
    {
        $city = $request->query('city', 'Moscow'); // значение по умолчанию - Moscow
        $distance = $request->query('distance', 200);
        $forecasts = WeatherForecast::where('date', '>=', now()->toDateString())
            ->orderBy('date')
            ->take(2)
            ->get();
        // dd($forecasts);
        if ($forecasts->isEmpty()) {
            return response()->json(['error' => 'Прогноз не найден'], 404);
        }

        $formattedForecasts = $forecasts->map(function ($forecast) {
            return [
                'date' => $forecast->date->format('Y-m-d'),
                'day' => [
                    'avgtemp_c' => ($forecast->max_temp + $forecast->min_temp) / 2,
                    'condition' => [
                        'icon' => $forecast->icon
                    ]
                ]
            ];
        });

        return response()->json([
            'city_name' => $city,
            'data' => $formattedForecasts
        ]);
    }
}
