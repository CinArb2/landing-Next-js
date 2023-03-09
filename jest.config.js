const nextJest = require('next/jest')
const createJestConfig = nextJest({
  dir: './',
})
/** @type {import('jest').Config} */
const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
}
// eslint-disable-next-line no-undef
module.exports = createJestConfig(customJestConfig)
