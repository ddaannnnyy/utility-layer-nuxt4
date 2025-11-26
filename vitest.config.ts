import { defineVitestConfig } from "@nuxt/test-utils/config";
import path from "path";

export default defineVitestConfig({
    root: __dirname,
    test: {
        environment: "nuxt",
        environmentOptions: {
            nuxt: {
                domEnvironment: "happy-dom",
            },
        },
    },
    resolve: {
        alias: {
            "~": path.resolve(__dirname, "./"),
            "@": path.resolve(__dirname, "./"),
        },
    },
});
