<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Instansi extends Model
{
    use HasFactory;

    protected $primaryKey = 'id_instansi';

    protected $fillable = [
        'nama_instansi',
        'nama_pimpinan',
        'deskripsi',
        'foto_instansi',
        'foto_pimpinan',
        'location',
        'alamat',
        'akreditasi',
        'tahun',
        'nomor_telepon'
    ];
}
