const app = require('./app'); // eslint-disable-line no-unused-vars
const logger = require('./config/logger');

const exitHandler = (sv) => {
  const logger = require('./config/logger');
  if (sv) {
    sv.close(() => {
      logger.info('Server closed');
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error) => {
  logger.error(error);
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', (sv) => {
  logger.info('SIGTERM received');
  exitHandler(sv);
});
