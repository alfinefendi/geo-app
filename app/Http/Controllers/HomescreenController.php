<?php

namespace App\Http\Controllers;
use App\Models\UserLocation;
use App\Models\UserLocationTrackingRecord;
use Illuminate\Http\Request;

class HomescreenController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    public function logPointApi(Request $request)
    {
        $data = $request->input();
        // $latitude = $request->input('latitude');
        // $longitude = $request->input('longitude');
        // $username = $request->input('username');
        // $keterangan = $request->input('keterangan');
        $validatedData = $request->validate([
            'latitude' => '',
            'longitude' => '',
            'username' => '',
            'keterangan' => ''
        ]);

        UserLocation::create($validatedData);
        return response()->json([
            'message' => 'OK',
            'data' => $validatedData
        ]);
        
    }

    public function logPointRaw(Request $request)
    {
        $data = UserLocation::latest()->get();
        return response()->json([
            'message' => 'OK',
            'data' => $data
        ]);
        
    }

    public function logPointHistory(Request $request)
    {
        $data = UserLocation::select('latitude', 'longitude')
        ->distinct()
        ->latest()
        ->get();
        return response()->json([
            'message' => 'OK',
            'data' => $data
        ]);
        
    }


    public function logLineApi(Request $request)
    {
        $data = $request->input();
        $validatedData = $request->validate([
            'latitude' => 'required|numeric',
            'longitude' => 'required|numeric',
        ]);

        $latitude = $validatedData['latitude'];
        $longitude = $validatedData['longitude'];
        $existingRecord = UserLocationTrackingRecord::where('latitude', $latitude)
        ->where('longitude', $longitude)
        ->first();

        if ($existingRecord) {
            // If record exists, return a message indicating no new record was created
            return response()->json([
                'message' => 'Record already exists',
                'data' => $validatedData
            ], 409); // 409 Conflict status code
        }

        UserLocationTrackingRecord::create($validatedData);
        return response()->json([
            'message' => 'OK',
            'data' => $validatedData
        ]);
        
    }

    public function logLineRaw(Request $request)
    {
        $data = UserLocationTrackingRecord::latest()->get();
        return response()->json([
            'message' => 'OK',
            'data' => $data
        ]);
        
    }

    public function logLineHistory(Request $request)
    {

        $data = UserLocationTrackingRecord::select('latitude', 'longitude')
        ->distinct()
        ->latest()
        ->get();
        return response()->json([
            'message' => 'OK',
            'data' => $data
        ]);
        
    }
    
}
