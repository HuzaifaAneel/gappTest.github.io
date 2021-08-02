<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    use HasFactory;

    protected $fillable = ['team_lead','name', 'user_id'];

    public function users()
    {
        return $this->hasMany(User::class);
    }
}