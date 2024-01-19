module.exports = {
    extends: ['@taoliujun/eslint-config'],
    overrides: [
        {
            files: ['**/*.ts', '**/*.tsx'],
            parserOptions: { project: path.resolve(__dirname, './tsconfig.lint.json') },
        },
        {
            // page store components are temporarily unused
            files: ['./src/index.ts'],
            rules: {
                'import/no-unused-modules': ['off'],
                'import/no-default-export': ['off'],
            },
        },
    ],
};
