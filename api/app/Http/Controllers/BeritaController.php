<?php

namespace App\Http\Controllers;

use App\Models\Berita;
use Illuminate\Http\Request;

class BeritaController extends Controller
{
    public function index()
    {
        $berita = Berita::all();
        return response()->json([
            'data' => $berita
        ]);
    }

    public function show($id)
    {
        $berita = Berita::find($id);

        if(!$berita) {
            return response()->json([
                'message' => 'Berita tidak ditemukan'
            ]);
        }

        return response()->json([
            'data' => $berita
        ]);
    }

    public function store(Request $request)
    {
        $berita = new Berita();
        $berita->judul = $request->judul;
        $berita->foto = $request->foto;
        $berita->isi = $request->isi;
        $berita->author = $request->author;
        $berita->tanggal_rilis = $request->tanggal_rilis;
        $berita->save();

        if(!$berita) {
            return response()->json([
                'message' => 'Berita gagal ditambahkan'
            ]);
        }

        return response()->json(
            array(
                "message" => "Berita berhasil ditambahkan",
                "data" => $berita
            )
        );
    }

    public function update(Request $request, $id)
    {
        $berita = Berita::find($id);

        if(!$berita) {
            return response()->json(
                array(
                    "message" => "Berita tidak ditemukan",
                )
            );
        }

        $berita->judul = $request->judul;
        $berita->foto = $request->foto;
        $berita->isi = $request->isi;
        $berita->author = $request->author;
        $berita->tanggal_rilis = $request->tanggal_rilis;
        $berita->save();

        return response()->json(
            array(
                "message" => "Berita berhasil diupdate",
                "data" => $berita
            )
        );
    }

    public function destroy($id)
    {
        $berita = Berita::find($id);

        if(!$berita) {
            return response()->json(
                array(
                    "message" => "Berita tidak ditemukan",
                )
            );
        }

        $berita->delete();

        return response()->json(
            array(
                "message" => "Berita berhasil dihapus",
                "data" => $berita
            )
        );
    }
}
