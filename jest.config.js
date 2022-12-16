module.exports = {
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
    // '\\.(css|less|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
    // '\\.(gif|ttf|eot|svg)$': '<rootDir>/__mocks__/fileMock.js',
  },
  // testEnvironment: 'node',
  // testEnvironmentOptions: {
  // runScripts: 'dangerously',
  // },
  // testURL: 'http://zx.600jit.com',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  testMatch: ['**/__test__/**/*.test.*'],
  collectCoverageFrom: [
    '**/src/**',
    '!**/src/.umi/**',
    '!**/src/.umi-production/**',
    '!**/src/service/**',
    '!**/__tests__/mock/**',
    '!**/__tests__/**',
    '!**/src/__test__/**',
  ],
};
