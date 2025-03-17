<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use App\Http\Requests\Settings\ProfileUpdateRequest;
use App\Models\User;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    /**
     * Show the user's profile settings page.
     */
    public function edit(Request $request): Response
    {
        return Inertia::render('settings/profile', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => $request->session()->get('status'),
        ]);
    }

    /**
     * Update the user's profile settings.
     */
    public function update(Request $request): RedirectResponse
{
    $user = $request->user();
    $validatedData = $request->validate([
        'name' => ['nullable', 'string', 'max:255'],

        'email' => [
            'nullable',
            'string',
            'lowercase',
            'email',
            'max:255',
            Rule::unique(User::class)->ignore($user->id),
        ],
        'phone'=>['nullable','string','max:255'],
        'address'=>['nullable','string','max:255'],
        'city'=>['nullable','string','max:255'],
        'bio'=>['nullable','string','max:255'],
        'phone'=>['nullable','string','max:255'],
        'image' => ['nullable', 'image', 'mimes:jpeg,png,jpg,gif', 'max:2048'],
    ]);

    if ($user->isDirty('email')) {
        $user->email_verified_at = null;
    }

    if ($request->hasFile('image')) {
        $validatedData['image'] = $request->file('image')->store('images', 'public');
    }

    $user->update($validatedData);

    return redirect()->route('profile.edit')->with('status', 'Profile updated successfully!');
}

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/');
    }
}
