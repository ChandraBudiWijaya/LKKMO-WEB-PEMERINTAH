<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Umkm extends Model
{
    use HasFactory;

    protected $primaryKey = 'id_umkm';

    protected $fillable = [
        'foto',
        'nama',
        'instagram',
        'link_gmaps'
    ];
}
