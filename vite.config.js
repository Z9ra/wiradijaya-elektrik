import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [
        laravel({
            input: [
                "resources/js/public/App.jsx",   // public site
                "resources/js/admin/App.jsx",    // admin panel
            ],
            refresh: true,
        }),
        react(),
    ],
    resolve: {
        alias: {
            "@public": "/resources/js/public",
            "@admin":  "/resources/js/admin",
            "@hooks":  "/resources/js/hooks",
            "@api":    "/resources/js/api",
        },
    },
});