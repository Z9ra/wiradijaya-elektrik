<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    protected $fillable = [
        'group',
        'key',
        'value',
        'label',
        'type',
    ];

    // Ambil semua setting, dikelompokkan per group
    public static function allGrouped(): array
    {
        return static::all()
            ->groupBy('group')
            ->map(fn($rows) => $rows->pluck('value', 'key'))
            ->toArray();
    }

    // Ambil satu group saja
    public static function byGroup(string $group): array
    {
        return static::where('group', $group)
            ->get()
            ->pluck('value', 'key')
            ->toArray();
    }

    // Set value by key (upsert)
    public static function set(string $key, mixed $value): void
    {
        static::where('key', $key)->update(['value' => $value]);
    }
}
