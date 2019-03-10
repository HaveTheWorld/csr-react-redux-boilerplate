const webpackConfig = require('./webpack/dev.webpack.config');

module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest/setupTests.js'],
  moduleDirectories: webpackConfig.resolve.modules,
  snapshotSerializers: ['enzyme-to-json/serializer'],
  snapshotResolver: '<rootDir>/jest/snapshotResolver',
};
