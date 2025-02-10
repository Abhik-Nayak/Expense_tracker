// jest.config.js
module.exports = {
    testEnvironment: 'jsdom', // This simulates the browser environment
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'], // Extends jest-dom matchers
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'], // File extensions to handle
  };
  