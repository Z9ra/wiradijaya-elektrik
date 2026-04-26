<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Wiradijaya Elektrik</title>
    @viteReactRefresh
    @vite(['resources/css/app.css',
    'resources/js/public/App.jsx',
    'resources/js/admin/App.jsx'])
</head>

<body>
    <div id="app"></div>
    <div id="admin"></div>
</body>

</html>