module.exports = {
    extends: ['@taoliujun/eslint-config'],
    parserOptions: { project: './tsconfig.lint.json' },
    overrides: [
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
