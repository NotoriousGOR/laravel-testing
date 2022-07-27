<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\States;

class StatesController extends Controller
{
    public function index()
    {
        return States::all();
    }

    public function show($name)
    {
        return States::where('name', $name)->get();
    }
}
