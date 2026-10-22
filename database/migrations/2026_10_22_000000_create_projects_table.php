<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string('title', 100)->unique();      // project name (must be unique)
            $table->text('description');                  // what the project is about
            $table->string('tech_stack', 150);            // tools used, e.g. "Blender, Figma"
            $table->string('project_url')->nullable();    // live demo / preview link
            $table->string('repo_url')->nullable();       // GitHub link
            $table->string('image_path')->nullable();     // cover image (storage path)
            $table->date('date_completed');               // when it was finished
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
