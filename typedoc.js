module.exports = {
    include: [],
    exclude: [
        '**/node_modules/**',
    ],
    out: 'docs/',
    name: 'Annoto Widget',
    target: 'es6',
    theme: 'markdown',
    mdEngine: 'gitbook',
    mdHideSources: true,
    includeDeclarations: true,
    excludeExternals: true,
    excludePrivate: true,
    excludeProtected: true,
    excludeNotExported: false,
    mode: 'modules',
    hideGenerator: true,
    readme: 'none',
    // entryPoint: 'annotoPlayer'
}