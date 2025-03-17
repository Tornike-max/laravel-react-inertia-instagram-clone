<?php

namespace App\Http\Controllers\Main;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class MainController extends Controller
{
    public function index()
    {
        return inertia('dashboard');
    }

    public function show()
    {
        return inertia('dashboard');
    }
}
