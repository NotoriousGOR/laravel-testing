<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class States extends Model
{
    use HasFactory;
    // although you can read ID, you can't actually mutate it in any way
    protected $fillable = ["name", "abbreviation", "established_in"];
    // setting table just in case Laravel doesn't like my naming convention
    protected $table = "us_states";
}
