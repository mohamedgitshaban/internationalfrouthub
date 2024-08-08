<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ServicesDetails extends Model
{
    use HasFactory;
    protected $fillable = ['services_id', 'title', 'description'];

    public function service()
    {
        return $this->belongsTo(Services::class, 'services_id');
    }
}
