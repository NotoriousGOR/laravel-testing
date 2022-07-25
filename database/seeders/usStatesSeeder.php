<?php

namespace Database\Seeders;

use File;
use Illuminate\Database\Seeder;

class usStatesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $base_path = base_path();

        if (file_exists("{$base_path}/us-states.json")) {
            // gets file contents and turns into an collection for easy mapping
            $states = json_decode(File::get("{$base_path}/us-states.json"));

            foreach ($states as $key => $value) {
                \App\Models\usStates::insert([
                    "name" => $value->name,
                    "abbreviation" => $value->abbreviation,
                    "established_in" => $value->established_in,
                ]);
            }

            print("All done! ✨👏");
        } else {
            print("JSON file not found \n");
        }
    }
}
