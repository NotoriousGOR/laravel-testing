<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\States;

class StatesController extends Controller
{
    public function index()
    {
        // returns all records from DB, if the content type header is "application/json" it will return as json
        return States::all();
    }

    public function show($name)
    {
        return States::where('name', $name)->get();
    }
}
