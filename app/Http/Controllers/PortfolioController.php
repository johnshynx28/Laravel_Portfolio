<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Inertia\Inertia;
use Inertia\Response;

// Invokable (single-action) controller for the public portfolio page.
class PortfolioController extends Controller
{
    /** GET / — public portfolio page */
    public function __invoke(): Response
    {
        return Inertia::render('portfolio', [
            'projects' => Project::orderByDesc('date_completed')->get(),
        ]);
    }
}
