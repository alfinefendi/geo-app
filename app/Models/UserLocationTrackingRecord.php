<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserLocationTrackingRecord extends Model
{
    use HasFactory;
    protected $table = 'user_location_tracking_record';
    protected $guarded = ['id'];
}
