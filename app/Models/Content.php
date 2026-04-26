<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Content extends Model
{
    protected $fillable = [
        'section',
        'key',
        'value',
        'type',
        'order',
    ];

    protected function casts(): array
    {
        return [
            'order' => 'integer',
        ];
    }

    // Scope: filter by section
    public function scopeSection($query, string $section)
    {
        return $query->where('section', $section)->orderBy('order');
    }

    // Helper: ubah collection rows jadi key=>value array
    public static function sectionToArray(string $section): array
    {
        return static::section($section)
            ->get()
            ->mapWithKeys(function ($item) {
                $value = $item->type === 'json'
                    ? json_decode($item->value, true)
                    : $item->value;
                return [$item->key => $value];
            })
            ->toArray();
    }

    // Helper: ambil semua section sekaligus
    public static function allSections(): array
    {
        return static::orderBy('order')
            ->get()
            ->groupBy('section')
            ->map(function ($rows) {
                return $rows->mapWithKeys(function ($item) {
                    $value = $item->type === 'json'
                        ? json_decode($item->value, true)
                        : $item->value;
                    return [$item->key => $value];
                });
            })
            ->toArray();
    }
}
