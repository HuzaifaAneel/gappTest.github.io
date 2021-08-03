<?php

use App\Http\Controllers\Api\DepartmentController;
use App\Http\Controllers\Api\DepartmentDataController;
use App\Http\Controllers\Api\TeamController;
use App\Http\Controllers\Api\TeamDataController;
use App\Http\Controllers\Api\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});



Route::get('/teams/users', [TeamDataController::class, 'users']);
Route::get('/departments/users', [DepartmentDataController::class, 'users']);
Route::get('/departments/teams', [DepartmentDataController::class, 'teams']);

Route::apiResource('users', UserController::class);
Route::apiResource('teams', TeamController::class);
Route::apiResource('departments', DepartmentController::class);






// Route::get('/teams', [TeamController::class, 'index']);
// Route::post('/teams',[TeamController::class, 'store']);
// Route::get('/users', [UserController::class, 'index']);
// Route::post('/users', [UserController::class, 'store']);
// Route::delete('/users/{user}', [UserController::class, 'destroy']);