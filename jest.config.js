export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Adjust if needed
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': ['ts-jest', { tsconfig: './tsconfig.test.json' }], // Ensure Jest transforms TypeScript and JSX files
  },
  transformIgnorePatterns: ['/node_modules/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
