<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Inertia\Response;

class ProjectController extends Controller
{
    /** GET /projects — list (admin table) */
    public function index(): Response
    {
        return Inertia::render('projects/index', [
            'projects' => Project::orderByDesc('date_completed')->get(),
            'flash'    => session('success'),
        ]);
    }

    /** GET /projects/create — empty form */
    public function create(): Response
    {
        return Inertia::render('projects/create');
    }

    /** POST /projects — validate, save, redirect */
    public function store(Request $request): RedirectResponse
    {
        $data = $request->validate($this->rules(), $this->messages());

        if ($request->hasFile('image')) {
            $data['image_path'] = $request->file('image')->store('projects', 'public');
        }
        unset($data['image']);

        Project::create($data);

        return redirect()->route('projects.index')->with('success', 'Project added successfully!');
    }

    /** GET /projects/{project}/edit — form filled with current values */
    public function edit(Project $project): Response
    {
        return Inertia::render('projects/edit', [
            'project' => $project,
        ]);
    }

    /** PUT /projects/{project} — validate, save, redirect */
    public function update(Request $request, Project $project): RedirectResponse
    {
        $data = $request->validate($this->rules($project), $this->messages());

        if ($request->hasFile('image')) {
            $this->deleteImage($project->image_path);
            $data['image_path'] = $request->file('image')->store('projects', 'public');
        }
        unset($data['image']);

        $project->update($data);

        return redirect()->route('projects.index')->with('success', 'Project updated successfully!');
    }

    /** DELETE /projects/{project} */
    public function destroy(Project $project): RedirectResponse
    {
        $this->deleteImage($project->image_path);
        $project->delete();

        return redirect()->route('projects.index')->with('success', 'Project deleted successfully!');
    }

    // ---------------------------------------------------------------------
    // Validation
    // ---------------------------------------------------------------------

    private function rules(?Project $project = null): array
    {
        return [
            // required + length + unique (ignores the current record when updating)
            'title' => [
                'required', 'string', 'min:3', 'max:100',
                Rule::unique('projects', 'title')->ignore($project?->id),
            ],
            'description'    => ['required', 'string', 'min:20', 'max:1000'],
            'tech_stack'     => ['required', 'string', 'max:150'],
            // format rules
            'project_url'    => ['nullable', 'url', 'max:255'],
            'repo_url'       => ['nullable', 'url', 'max:255'],
            'date_completed' => ['required', 'date', 'before_or_equal:today'],
            // image upload rules
            'image'          => ['nullable', 'image', 'mimes:jpg,jpeg,png,webp', 'max:2048'],
        ];
    }

    private function messages(): array
    {
        return [
            'title.required'                 => 'Please enter a project title.',
            'title.unique'                   => 'You already have a project with this title. Please use a different one.',
            'description.required'           => 'Please describe your project.',
            'description.min'                => 'The description is too short. Write at least :min characters.',
            'tech_stack.required'            => 'List at least one tool or technology you used.',
            'project_url.url'                => 'The project link must be a valid URL (e.g. https://example.com).',
            'repo_url.url'                   => 'The repository link must be a valid URL (e.g. https://github.com/you/repo).',
            'date_completed.required'        => 'Please choose the date you completed this project.',
            'date_completed.before_or_equal' => 'The completion date cannot be in the future.',
            'image.image'                    => 'The file must be an image.',
            'image.mimes'                    => 'Only JPG, JPEG, PNG, or WEBP images are allowed.',
            'image.max'                      => 'The image must not be larger than 2 MB.',
            'image.uploaded'                 => 'Upload failed. The image is too large (max 2 MB).',
        ];
    }

    /** Remove an uploaded file from storage (sample images in public/images are never deleted). */
    private function deleteImage(?string $path): void
    {
        if ($path && str_starts_with($path, 'projects/')) {
            Storage::disk('public')->delete($path);
        }
    }
}
