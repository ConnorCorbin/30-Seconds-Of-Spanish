module.exports = {
  setupFilesAfterEnv: ['./test-setup.js'],
  testURL: 'http://localhost',
  snapshotSerializers: [
    'enzyme-to-json/serializer',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
  coverageReporters: ['lcov', 'json'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/file-mock.js',
  },
  moduleDirectories: ['node_modules', 'src'],
};
  