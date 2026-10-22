<?php

namespace Database\Seeders;

use App\Models\Project;
use Illuminate\Database\Seeder;

class ProjectSeeder extends Seeder
{
    public function run(): void
    {
        $projects = [
            [
                'title'          => '3D Text',
                'description'    => 'A 3D text design created in Blender with stylized typography, dynamic lighting, and material effects.',
                'tech_stack'     => 'Blender',
                'image_path'     => 'images/text.jpg',
                'date_completed' => '2024-01-15',
            ],
            [
                'title'          => 'Light House',
                'description'    => 'A low-poly lighthouse scene rendered in Blender with environmental lighting, ocean waves, and atmospheric fog.',
                'tech_stack'     => 'Blender',
                'image_path'     => 'images/light-house.jpg',
                'date_completed' => '2024-02-20',
            ],
            [
                'title'          => 'Simple Prototype',
                'description'    => 'A mobile UI prototype for a pet adoption app designed in Figma — clean navigation and user-friendly layouts.',
                'tech_stack'     => 'Figma',
                'image_path'     => 'images/Simpleprototype.jpg',
                'date_completed' => '2024-03-10',
            ],
            [
                'title'          => 'Poster',
                'description'    => 'A game promotional poster for Shynx featuring character illustration, bold typography, and vibrant visual composition.',
                'tech_stack'     => 'Graphic Design',
                'image_path'     => 'images/poster.jpg',
                'date_completed' => '2024-04-05',
            ],
        ];

        foreach ($projects as $project) {
            Project::firstOrCreate(['title' => $project['title']], $project);
        }
    }
}
