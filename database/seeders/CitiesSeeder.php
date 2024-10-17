<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CitiesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $jsonPath = storage_path('app/cities.json');
        
        if (!file_exists($jsonPath)) {
            $this->command->error('File cities.json not found in storage/app directory!');
            return;
        }

        $cities = json_decode(file_get_contents($jsonPath), true);
        
        if (json_last_error() !== JSON_ERROR_NONE) {
            $this->command->error('Error parsing JSON file!');
            return;
        }

        $now = Carbon::now();
        
        $citiesData = array_map(function ($city) use ($now) {
            return [
                'name' => $city['name'] ?: $city['name_rus'], // Если английского названия нет, используем русское
                'name_rus' => $city['name_rus'],
                'lat' => $city['lat'],
                'lon' => $city['lon'],
                'created_at' => $now,
                'updated_at' => $now
            ];
        }, $cities);

        foreach (array_chunk($citiesData, 100) as $chunk) {
            DB::table('cities')->insert($chunk);
        }
        
        $this->command->info('Cities imported successfully!');
    }
}
