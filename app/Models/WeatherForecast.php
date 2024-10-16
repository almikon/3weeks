<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WeatherForecast extends Model
{
    use HasFactory;

    protected $fillable = [
        'city',
        'date',
        'max_temp',
        'min_temp',
        'condition',
        'icon',
        'lat',
        'lon',
    ];

    protected $casts = [
        'date' => 'date',
    ];
}
