<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    // Only these columns can be mass-assigned (Project::create($data) / $project->update($data)).
    protected $fillable = [
        'title',
        'description',
        'tech_stack',
        'project_url',
        'repo_url',
        'image_path',
        'date_completed',
    ];

    protected $casts = [
        'date_completed' => 'date:Y-m-d',
    ];

    // Adds "image_url" to the JSON that is sent to React.
    protected $appends = ['image_url'];

    public function getImageUrlAttribute(): ?string
    {
        if (! $this->image_path) {
            return null;
        }

        // Seeded sample images live in public/images, uploaded ones in storage/app/public/projects.
        return str_starts_with($this->image_path, 'images/')
            ? asset($this->image_path)
            : asset('storage/' . $this->image_path);
    }
}
