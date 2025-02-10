// jest.config.js
module.exports = {
  testEnvironment: "jsdom", // To simulate a browser-like environment for DOM-related tests
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"], // Extends Jest matchers with custom ones
  moduleNameMapper: {
    '^react-router-dom$': require.resolve('react-router-dom'),
  },
  // To enable Jest to transform JSX files and import `react-router-dom`
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
};
