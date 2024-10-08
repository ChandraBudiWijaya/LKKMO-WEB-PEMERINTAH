<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('instansis', function (Blueprint $table) {
            $table->id('id_instansi');
            $table->string('nama_instansi');
            $table->string('nama_pimpinan')->nullable();
            $table->string('deskripsi')->nullable();
            $table->string('foto_kecil')->nullable();
            $table->string('foto_instansi')->nullable();
            $table->string('foto_pimpinan')->nullable();
            $table->string('location')->nullable();
            $table->string('alamat')->nullable();
            $table->char('akreditasi', 1)->nullable();
            $table->string('tahun', 4)->nullable();
            $table->string('nomor_telepon', 15)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('instansis');
    }
};
