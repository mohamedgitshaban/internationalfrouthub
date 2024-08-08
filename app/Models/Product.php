<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Product extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',
        'colortheame', // correct the spelling
        'type', // correct the spelling
        'description', // correct the spelling
        'img',
    ];
    public function ProductDetails():HasMany
    {
        return $this->hasMany(ProductDetails::class, );
    }
}
