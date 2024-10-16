<?php

namespace App\Console\Commands;

use App\Models\WeatherForecast;
use Illuminate\Console\Command;
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
        $cities = ['Moscow', 'Khimki', 'Zelenograd', 'Podolsk', 'Mytishchi'];

        foreach ($cities as $city) {
            $response = Http::get('http://api.weatherapi.com/v1/forecast.json', [
                'key' => env('WEATHER_API_KEY'),
                'q' => $city,
                'days' => 2,
                'aqi' => 'no',
                'alerts' => 'no',
                'lang' => 'en',
                'hour' => '12'
            ]);

            $json = $response->json();

            foreach ($json['forecast']['forecastday'] as $forecast) {
                WeatherForecast::create([
                    'city' => $city,
                    'date' => $forecast['date'],
                    'max_temp' => $forecast['day']['maxtemp_c'],
                    'min_temp' => $forecast['day']['mintemp_c'],
                    'condition' => $forecast['day']['condition']['text'],
                    'icon' => $forecast['day']['condition']['icon'],
                ]);
            }

            $this->info("Weather data fetched for $city");
        }

        $this->info('Weather data fetching completed');
    }
}
