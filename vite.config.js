import { defineConfig } from 'vite';
import htmlPurge from 'vite-plugin-purgecss';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import handlebars from 'vite-plugin-handlebars';
import path, { resolve } from 'node:path'; // Solo path, ya que 'resolve' es un método de 'path'
import * as glob from 'glob';

import datosFaq from './js/faq-data.js';
import { termsAndConditionsData } from './js/terms-data.js';
import { aboutUsData } from './js/about-data.js';

const obtenerEntradas = () => {
    return Object.fromEntries(
        [
            ...glob.sync(
                './**/*.html',
                {
                    ignore: [
                        './dist/**',
                        './node_modules/**'
                    ]
                }
            ).map(
                file => [
                    file.slice(0, file.length - path.extname(file).length),
                    resolve(__dirname, file)
                ]
            )
        ]
    );
}

export default defineConfig(
    {
        appType: 'mpa',
        base: process.env.DEPLOY_BASE_URL,
        build: {
            rollupOptions: {
                input: obtenerEntradas()
            },
            minify: true
        },
        plugins: [
            handlebars({
                partialDirectory: resolve(__dirname, 'partials'),
                context: {
                    ...datosFaq,
                    ...termsAndConditionsData,
                    ...aboutUsData,
                }


            }),
            htmlPurge({}),
            ViteMinifyPlugin(),
        ]
    }
);
