import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    base: "/District-Library-Final-Project-/",

    plugins: [react()],

    resolve: {
        alias: {
            "@": "/src",
        },
    },
});


