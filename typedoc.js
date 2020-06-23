module.exports = {
    exclude: [
        '**/node_modules/**',
    ],
    out: 'docs/',
    name: 'Annoto Widget API',
    includeVersion: true,
    includeDeclarations: true,
    excludeExternals: true,
    excludePrivate: true,
    excludeProtected: true,
    excludeNotExported: true,
    stripInternal: true,
    // disableSources: true, // causes error
    mode: 'modules',
    hideGenerator: true,
    readme: 'none',
    gitRevision: 'master',
}