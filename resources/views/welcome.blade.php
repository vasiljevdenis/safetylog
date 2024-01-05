<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ "App" }}</title>

    <!-- Favicon -->
    <link rel="shortcut icon" href="{{ env('APP_URL', '') . '/storage/images/favicon.svg' }}" type="image/x-icon">
    <!-- Canonical -->
    <link rel="canonical" href="{{ Request::url() }}">

    @viteReactRefresh
    @vite('resources/js/index.tsx')
</head>

<body>
    <div id="app"></div>

</body>

</html>