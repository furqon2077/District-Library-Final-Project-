import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    base: "/District-Library-Final-Project-/",
        resolve: {
        alias: {
            "@": "/src",
        },
    },
});



