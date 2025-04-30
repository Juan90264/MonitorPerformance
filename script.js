/*
 * Project: MonitorPerformance.js
 * Author: Juan90264 (library derivation author); Google Chrome Team (library author)
 * Copyright (C) 2025 Juan90264
 *
 * Using the 'web-vitals' library, it is licensed under the Apache License 2.0, developed by the Google Chrome team.
 * You can obtain a copy of the license at: http://www.apache.org/licenses/LICENSE-2.0
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <https://www.gnu.org/licenses/>.
 * 
 *
 * Repository: https://github.com/Juan90264/MonitorPerformance
 */

(function() {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/web-vitals@2.1.0/dist/web-vitals.iife.js';
    script.type = 'text/javascript';

    script.onload = function() {
        console.log("Web Vitals loaded");

        // Creates a general dashboard to display metrics
        const panel = document.createElement('div');
        panel.style.position = 'fixed';
        panel.style.top = '10px';
        panel.style.left = '10px';
        panel.style.padding = '5px';
        panel.style.background = '#000';
        panel.style.color = '#fff';
        panel.style.zIndex = '1000';
        panel.style.fontSize = '14px';
        document.body.appendChild(panel);

        // Stores the metric elements so they can be updated
        const metrics = {
            LCP: document.createElement('div'),
            FID: document.createElement('div'),
            CLS: document.createElement('div')
        };

        // Initializes the text
        metrics.LCP.textContent = 'LCP (Largest Contentful Paint): waiting...';
        metrics.FID.textContent = 'FID (First Input Delay): waiting...';
        metrics.CLS.textContent = 'CLS (Cumulative Layout Shift): waiting...';

        // Add to dashboard
        panel.appendChild(metrics.LCP);
        panel.appendChild(metrics.FID);
        panel.appendChild(metrics.CLS);

        // Function to update the metric
        function updateMetric(metricName, value) {
            if (metrics[metricName]) {
                let unit = metricName === 'CLS' ? '' : 'ms'; // CLS é sem milissegundos
                metrics[metricName].textContent = ${metricName} (${getFullName(metricName)}): ${value.toFixed(2)}${unit};
            }
        }

        // Full names to display
        function getFullName(shortName) {
            switch (shortName) {
                case 'LCP': return 'Largest Contentful Paint';
                case 'FID': return 'First Input Delay';
                case 'CLS': return 'Cumulative Layout Shift';
                default: return '';
            }
        }

        // Reading metrics and updating on screen
        webVitals.getLCP((metric) => updateMetric('LCP', metric.value));
        webVitals.getFID((metric) => updateMetric('FID', metric.value));
        webVitals.getCLS((metric) => updateMetric('CLS', metric.value));
    };

    document.head.appendChild(script);
})();
