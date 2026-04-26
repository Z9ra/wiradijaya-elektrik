<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    public function run(): void
    {
        User::updateOrCreate(
            ['email' => 'admin@wiradijaya.com'],
            [
                'name'     => 'Administrator',
                'password' => Hash::make('rahasia123'),
                'role'     => 'admin',
            ]
        );
    }
}
