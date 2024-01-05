module.exports = {
    extends: ['@taoliujun/eslint-config'],
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
