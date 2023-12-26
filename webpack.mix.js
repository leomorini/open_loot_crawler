const mix = require('laravel-mix');

// Verificar se essa config não da problema em prod (em dev deixa o hot reload muito mais rapido!);
mix.options({ processCssUrls: mix.inProduction() });

if (mix.inProduction()) {
    mix.version();
} else {
    mix.options({
        hmrOptions: {
            host: 'localhost',
            port: '8080'
        }
    });
}
