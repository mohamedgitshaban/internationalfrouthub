<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ProductDetails extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',"id",
        'description', // correct the spelling
        'product_id',
    ];
    public function Product():BelongsTo
    {
        return $this->belongsTo(Product::class, 'product_id');
    }
}
