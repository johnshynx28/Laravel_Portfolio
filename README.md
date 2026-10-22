# Portfolio — Laravel + Inertia.js + React (TypeScript)

Personal portfolio of John Lloyd G. Drapiza, converted from plain PHP to **Laravel + Inertia.js + React + Tailwind CSS**
(Laravel React starter kit). The **Projects** section is dynamic: it is stored in the database and managed with a full
CRUD + validation.

## Requirements

- PHP 8.3+ and Composer
- Node.js 18+ and npm
- MySQL (XAMPP) or SQLite

## Setup

```bash
git clone <repo-url>
cd <repo-folder>

composer install
npm install

cp .env.example .env
php artisan key:generate
```

Edit `.env` and set your database (example for MySQL; create the `portfolio_db` database first):

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=portfolio_db
DB_USERNAME=root
DB_PASSWORD=
```

Then:

```bash
php artisan migrate
php artisan db:seed --class=ProjectSeeder
php artisan storage:link

composer run dev       # starts Laravel + Vite
```

- Public portfolio: http://localhost:8000
- Manage projects: http://localhost:8000/projects

## Request flow

```
Browser → Route (routes/web.php) → ProjectController → validate() → Project model (database)
        → Inertia::render('projects/index', [...]) → resources/js/pages/projects/index.tsx
```

## Projects CRUD — where things are

| Part | File |
|---|---|
| Migration | `database/migrations/2026_10_22_000000_create_projects_table.php` |
| Model | `app/Models/Project.php` |
| Controller + validation | `app/Http/Controllers/ProjectController.php` |
| Public page controller | `app/Http/Controllers/PortfolioController.php` (invokable) |
| Routes | `routes/web.php` (`Route::resource('projects', ...)`) |
| Pages | `resources/js/pages/projects/{index,create,edit}.tsx` |
| Public page | `resources/js/pages/portfolio.tsx` |
| Layouts | `resources/js/layouts/{portfolio-layout,admin-layout}.tsx` |
| Components (Atomic Design) | `resources/js/components/atoms`, `molecules`, `organisms` |
| Types | `resources/js/types/project.ts` |

## Validation rules

| Field | Rules |
|---|---|
| title | required, string, min 3, max 100, unique (ignores current record on update) |
| description | required, string, min 20, max 1000 |
| tech_stack | required, string, max 150 |
| project_url / repo_url | nullable, valid URL, max 255 |
| date_completed | required, date, not in the future |
| image | nullable, image, jpg/jpeg/png/webp, max 2 MB |
