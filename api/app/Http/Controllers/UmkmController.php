<?php

namespace App\Http\Controllers;

use App\Models\Umkm;
use Illuminate\Http\Request;

class UmkmController extends Controller
{
    public function index()
    {
        $umkm = Umkm::all();
        return response()->json([
            'data' => $umkm
        ]);
    }

    public function show($id)
    {
        $umkm = Umkm::find($id);

        if(!$umkm) {
            return response()->json([
                'message' => 'UMKM tidak ditemukan'
            ]);
        }

        return response()->json([
                'data' => $umkm
        ]);
    }

    public function store(Request $request)
    {
        $umkm = new Umkm();
        $umkm->foto = $request->foto;
        $umkm->nama = $request->nama;
        $umkm->instagram = $request->instagram;
        $umkm->link_gmaps = $request->link_gmaps;
        $umkm->save();

        return response()->json(
            array(
                "message" => "UMKM berhasil ditambahkan",
                "data" => $umkm
            )
        );
    }

    public function update(Request $request, $id)
    {
        $umkm = Umkm::find($id);
        $umkm->foto = $request->foto;
        $umkm->nama = $request->nama;
        $umkm->instagram = $request->instagram;
        $umkm->link_gmaps = $request->link_gmaps;
        $umkm->save();

        return response()->json(
            array(
                "message" => "UMKM berhasil diupdate",
                "data" => $umkm
            )
        );
    }

    public function destroy($id)
    {
        $umkm = Umkm::find($id);

        if(!$umkm) {
            return response()->json(
                array(
                    "message" => "Berita tidak ditemukan",
                )
            );
        }

        $umkm->delete();

        return response()->json(
            array(
                "message" => "Berita berhasil dihapus",
                "data" => $umkm
            )
        );
    }
}
