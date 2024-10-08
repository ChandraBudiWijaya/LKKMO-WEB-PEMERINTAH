<?php

namespace App\Http\Controllers;

use App\Models\Instansi;
use Illuminate\Http\Request;

class InstansiController extends Controller
{
    public function index()
    {
        $instansi = Instansi::all();
        return response()->json([
            'data' => $instansi
        ], 200);
    }

    public function show($id)
    {
        $instansi = Instansi::find($id);

        if(!$instansi) {
            return response()->json([
                'message' => 'Instansi tidak ditemukan'
            ], 404);
        }

        return response()->json([
            'data' => $instansi
        ], 200);
    }

    public function store(Request $request)
    {
        $instansi = new Instansi();
        $instansi->nama_instansi = $request->nama_instansi;
        $instansi->nama_pimpinan = $request->nama_pimpinan;
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
                'message' => 'Instansi gagal ditambahkan'
            ], 400);
        }

        return response()->json(
            array(
                "message" => "Instansi berhasil ditambahkan",
                "data" => $instansi
            )
        );
    }

    public function update(Request $request, $id)
    {
        $instansi = Instansi::find($id);

        if(!$instansi) {
            return response()->json([
                'message' => 'Instansi tidak ditemukan'
            ]);
        }

        $instansi->nama_instansi = $request->nama_instansi;
        $instansi->nama_pimpinan = $request->nama_pimpinan;
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
                "message" => "Instansi berhasil diupdate",
                "data" => $instansi
            )
        );
    }

    public function destroy($id)
    {
        $instansi = Instansi::find($id);

        if(!$instansi) {
            return response()->json([
                'message' => 'Instansi tidak ditemukan'
            ]);
        }

        $instansi->delete();

        return response()->json(
            array(
                "message" => "Instansi berhasil dihapus",
                "data" => $instansi
            )
        );
    }
}
