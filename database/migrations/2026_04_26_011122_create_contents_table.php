<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('contents', function (Blueprint $table) {
            $table->id();
            $table->string('section', 50)->index();
            $table->string('key', 100)->index();
            $table->longText('value')->nullable();
            $table->enum('type', ['text', 'image', 'json'])->default('text');
            $table->unsignedTinyInteger('order')->default(0);
            $table->unique(['section', 'key']);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('contents');
    }
};
