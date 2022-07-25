<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class usStates extends Model
{
    use HasFactory;

    //  ensures you can't overwrite the id, created_at, and updated_at values in the db
    protected $fillable = ["name", "abbreviation", "established_in"];
}
