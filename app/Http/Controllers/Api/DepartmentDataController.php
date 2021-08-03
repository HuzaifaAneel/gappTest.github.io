<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Team;
use App\Models\User;
use Illuminate\Http\Request;

class DepartmentDataController extends Controller
{
    public function users()
    {
        $users = User::all();
        return response()->json($users);
    }

    public function teams()
    {
        $teams = Team::all();
        return response()->json($teams);
    }
}
