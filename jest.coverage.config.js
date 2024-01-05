const baseConfig = require('./jest.config');

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    ...baseConfig,

    testMatch: ['**/src/**/__tests__/**/*.ts', '!**/src/**/__tests__/**/*.snap.ts'],

    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.ts', '!src/**/*.snap.ts', '!src/index.ts'],
    coverageDirectory: 'reports/jest',
    coverageThreshold: { global: { lines: 90, branches: 50 } },
    coverageReporters: ['html'],
};
