<?php

namespace App\Console\Commands;

use App\Models\WeatherForecast;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;

class FetchWeatherData extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:fetch-weather-data';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Fetch Weather for Cities in Moscow region';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $cities = DB::table('cities')
            ->select(['lat', 'lon', 'name_rus'])
            ->get()
            ->map(fn($city) => [(float)$city->lat, (float)$city->lon])
            ->toArray();

        foreach ($cities as $cityData) {
            $response = Http::get('http://api.weatherapi.com/v1/forecast.json', [
                'key' => env('WEATHER_API_KEY'),
                'q' => $cityData[0] . ',' . $cityData[1],
                'days' => 2,
                'aqi' => 'no',
                'alerts' => 'no',
                'lang' => 'en',
                'hour' => '12'
            ]);

            $json = $response->json();

            foreach ($json['forecast']['forecastday'] as $forecast) {
                WeatherForecast::create([
                    'city' => $cityData[2] ?? '-',
                    'date' => $forecast['date'],
                    'max_temp' => $forecast['day']['maxtemp_c'],
                    'min_temp' => $forecast['day']['mintemp_c'],
                    'condition' => $forecast['day']['condition']['text'],
                    'icon' => $forecast['day']['condition']['icon'],
                ]);
            }

            $this->info("Weather data fetched for $cityData[2]");
        }

        $this->info('Weather data fetching completed');
    }
}
