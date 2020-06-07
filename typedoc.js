module.exports = {
    exclude: [
        '**/node_modules/**',
    ],
    out: 'docs/',
    name: 'Annoto Widget',
    target: 'es6',
    includeDeclarations: true,
    excludeExternals: true,
    excludePrivate: true,
    excludeProtected: true,
    excludeNotExported: true,
    mode: 'modules',
    hideGenerator: true,
    readme: 'none',
}