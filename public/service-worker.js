importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');

[
    '/$',  // Index
    '/*',  // Anything in the same host
]
    .forEach(mask => {
        workbox.routing.registerRoute(
            new RegExp(mask),
            new workbox.strategies.StaleWhileRevalidate( { cacheName: 'dynamic' } )
        );
    });