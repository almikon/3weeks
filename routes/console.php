<?php

use App\Console\Commands\FetchWeatherData;
use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote')->hourly();

Artisan::command('app:fetch-weather-data', function () {
    (new FetchWeatherData())->handle();
})->daily();
