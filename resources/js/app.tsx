import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

const appName = import.meta.env.VITE_APP_NAME || 'Alem';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <>
                {
                    /**
                     * The Header
                     */
                }
                <HeaderComponent />
                
                {
                    /**
                     * The app
                     */
                }
                <App {...props} />

                {
                    /**
                     * The footer
                     */
                }
                <FooterComponent />
            </>
        );
    },
    progress: {
        color: '#4B5563',
    },
});

/**
 * This will set light / dark mode on load...
 */
// Theme initialization is handled by the useSliderComponent hook
