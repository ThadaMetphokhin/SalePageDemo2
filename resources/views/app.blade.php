<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark'=> ($appearance ?? 'system') == 'dark'])>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="ZenithCore+ product healthy brain">
    <link rel="icon" href="/favicon.ico" sizes="any" type="image/ico">
    <link rel="icon" href="/favicon1.svg" type="image/svg+xml">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">

    <!--เพื่อให้เบราว์เซอร์เตรียมท่อส่งข้อมูลกับ Server-->
    <!-- <link rel="preconnect" href="https://fonts.bunny.net">
    <link rel="dns-prefetch" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600&display=swap" rel="stylesheet" /> -->

    <!--preload image-->
    <!-- <link rel="preload" as="image" href="/images/product.webp" fetchpriority="high" type="image/webp"> -->
    <!-- <link rel="stylesheet" href="/resources/css/Home.css"/> -->
    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
    <x-inertia::head>
        <title>{{ config('app.name', 'Laravel') }}</title>
    </x-inertia::head>
</head>

<body class="font-sans antialiased">
    <x-inertia::app />
</body>

</html>