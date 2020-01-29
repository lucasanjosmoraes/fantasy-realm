module.exports = {
  // Stop running tests after `n` failures
  bail: true,

  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: false,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: [
    'implementaions/**',
  ],

  // The directory where Jest should output its coverage files
  coverageDirectory: 'tests/coverage',

  testEnvironment: 'node',

  testMatch: [ '**/tests/**/*.test.js?(x)' ],
};
