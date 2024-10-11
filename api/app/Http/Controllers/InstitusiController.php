<?php

namespace App\Http\Controllers;

use App\Models\Institusi;
use Illuminate\Http\Request;

class InstitusiController extends Controller
{
    public function index()
    {
        $instansi = Institusi::all();
        return response()->json([
            'data' => $instansi
        ], 200);
    }

    public function show($id)
    {
        $instansi = Institusi::find($id);

        if(!$instansi) {
            return response()->json([
                'message' => 'Institusi tidak ditemukan'
            ], 404);
        }

        return response()->json([
            'data' => $instansi
        ], 200);
    }

    public function store(Request $request)
    {
        $instansi = new Institusi();
        $instansi->nama_instansi = $request->nama_instansi;
        $instansi->nama_pimpinan = $request->nama_pimpinan;
        $instansi->deskripsi = $request->deskripsi;
        $instansi->foto_kecil = $request->foto_kecil;
        $instansi->foto_instansi = $request->foto_instansi;
        $instansi->foto_pimpinan = $request->foto_pimpinan;
        $instansi->location = $request->location;
        $instansi->alamat = $request->alamat;
        $instansi->akreditasi = $request->akreditasi;
        $instansi->tahun = $request->tahun;
        $instansi->nomor_telepon = $request->nomor_telepon;
        $instansi->save();

        if($instansi->akreditasi == null) {
            $instansi->akreditasi = "Belum Terakreditasi";
        }

        if(!$instansi) {
            return response()->json([
                'message' => 'Institusi gagal ditambahkan'
            ], 400);
        }

        return response()->json(
            array(
                "message" => "Institusi berhasil ditambahkan",
                "data" => $instansi
            )
        );
    }

    public function update(Request $request, $id)
    {
        $instansi = Institusi::find($id);

        if(!$instansi) {
            return response()->json([
                'message' => 'Institusi tidak ditemukan'
            ]);
        }

        $instansi->nama_instansi = $request->nama_instansi;
        $instansi->nama_pimpinan = $request->nama_pimpinan;
        $instansi->deskripsi = $request->deskripsi;
        $instansi->foto_kecil = $request->foto_kecil;
        $instansi->foto_instansi = $request->foto_instansi;
        $instansi->foto_pimpinan = $request->foto_pimpinan;
        $instansi->location = $request->location;
        $instansi->alamat = $request->alamat;
        $instansi->akreditasi = $request->akreditasi;
        $instansi->tahun = $request->tahun;
        $instansi->nomor_telepon = $request->nomor_telepon;
        $instansi->save();

        return response()->json(
            array(
                "message" => "Institusi berhasil diupdate",
                "data" => $instansi
            )
        );
    }

    public function destroy($id)
    {
        $instansi = Institusi::find($id);

        if(!$instansi) {
            return response()->json([
                'message' => 'Institusi tidak ditemukan'
            ]);
        }

        $instansi->delete();

        return response()->json(
            array(
                "message" => "Institusi berhasil dihapus",
                "data" => $instansi
            )
        );
    }
}
