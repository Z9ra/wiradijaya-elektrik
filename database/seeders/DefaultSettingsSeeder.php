<?php

namespace Database\Seeders;

use App\Models\Setting;
use Illuminate\Database\Seeder;

class DefaultSettingsSeeder extends Seeder
{
    public function run(): void
    {
        $settings = [
            ['group' => 'theme',  'key' => 'theme.primary_color',  'value' => '#E65C00',                'label' => 'Warna Utama',       'type' => 'color'],
            ['group' => 'theme',  'key' => 'theme.secondary_color', 'value' => '#1a1a2e',                'label' => 'Warna Sekunder',    'type' => 'color'],
            ['group' => 'theme',  'key' => 'theme.font_heading',   'value' => 'Poppins',                'label' => 'Font Judul',        'type' => 'text'],
            ['group' => 'theme',  'key' => 'theme.font_body',      'value' => 'Inter',                  'label' => 'Font Isi',          'type' => 'text'],
            ['group' => 'seo',    'key' => 'seo.title',            'value' => 'Wiradijaya Elektrik',    'label' => 'Judul Website',     'type' => 'text'],
            ['group' => 'seo',    'key' => 'seo.description',      'value' => 'Jasa instalasi listrik profesional di Bandung', 'label' => 'Meta Description', 'type' => 'textarea'],
            ['group' => 'seo',    'key' => 'seo.keywords',         'value' => 'instalasi listrik, panel listrik, Bandung', 'label' => 'Keywords', 'type' => 'text'],
            ['group' => 'contact', 'key' => 'contact.whatsapp',     'value' => '6281234567890',          'label' => 'Nomor WhatsApp',    'type' => 'text'],
            ['group' => 'contact', 'key' => 'contact.email',        'value' => 'info@wiradijaya.com',    'label' => 'Email',             'type' => 'text'],
            ['group' => 'contact', 'key' => 'contact.address',      'value' => 'Jl. Soekarno Hatta No.10, Bandung', 'label' => 'Alamat', 'type' => 'textarea'],
            ['group' => 'contact', 'key' => 'contact.maps_url',     'value' => '',                       'label' => 'Link Google Maps',  'type' => 'text'],
            ['group' => 'social', 'key' => 'social.instagram',     'value' => '',                       'label' => 'Instagram URL',     'type' => 'text'],
            ['group' => 'social', 'key' => 'social.facebook',      'value' => '',                       'label' => 'Facebook URL',      'type' => 'text'],
            ['group' => 'social', 'key' => 'social.youtube',       'value' => '',                       'label' => 'YouTube URL',       'type' => 'text'],
        ];

        foreach ($settings as $s) {
            Setting::updateOrCreate(['key' => $s['key']], $s);
        }
    }
}
