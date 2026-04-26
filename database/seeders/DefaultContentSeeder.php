<?php

namespace Database\Seeders;

use App\Models\Content;
use Illuminate\Database\Seeder;

class DefaultContentSeeder extends Seeder
{
    public function run(): void
    {
        $contents = [
            // Hero
            ['section' => 'hero', 'key' => 'title',    'value' => 'Solusi Listrik Terpercaya',              'type' => 'text', 'order' => 1],
            ['section' => 'hero', 'key' => 'subtitle',  'value' => 'Instalasi & Panel Listrik Profesional', 'type' => 'text', 'order' => 2],
            ['section' => 'hero', 'key' => 'cta_text',  'value' => 'Hubungi Kami',                          'type' => 'text', 'order' => 3],
            ['section' => 'hero', 'key' => 'image',     'value' => '',                                      'type' => 'image', 'order' => 4],
            // About
            ['section' => 'about', 'key' => 'title',    'value' => 'Tentang Wiradijaya Elektrik',           'type' => 'text', 'order' => 1],
            ['section' => 'about', 'key' => 'body',     'value' => 'Berdiri sejak 2010, kami melayani instalasi listrik rumah, gedung, dan industri di Bandung dan sekitarnya.', 'type' => 'text', 'order' => 2],
            ['section' => 'about', 'key' => 'image',    'value' => '',                                      'type' => 'image', 'order' => 3],
            // Services
            ['section' => 'services', 'key' => 'title', 'value' => 'Layanan Kami',                          'type' => 'text', 'order' => 1],
            ['section' => 'services', 'key' => 'items',  'value' => json_encode([
                ['title' => 'Instalasi Listrik', 'desc' => 'Pemasangan instalasi listrik rumah & gedung', 'icon' => 'bolt'],
                ['title' => 'Panel Listrik',    'desc' => 'Perakitan dan perbaikan panel kontrol',      'icon' => 'server'],
                ['title' => 'Grounding',        'desc' => 'Sistem pentanahan sesuai standar SNI',       'icon' => 'shield'],
            ]), 'type' => 'json', 'order' => 2],
            // Contact
            ['section' => 'contact', 'key' => 'title',   'value' => 'Hubungi Kami',                        'type' => 'text', 'order' => 1],
            ['section' => 'contact', 'key' => 'address',  'value' => 'Jl. Soekarno Hatta No.10, Bandung',  'type' => 'text', 'order' => 2],
            ['section' => 'contact', 'key' => 'maps_url', 'value' => '',                                   'type' => 'text', 'order' => 3],
        ];

        foreach ($contents as $c) {
            Content::updateOrCreate(
                ['section' => $c['section'], 'key' => $c['key']],
                $c
            );
        }
    }
}
