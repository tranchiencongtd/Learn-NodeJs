const siteRouter = require('./site');
const coursesRouter = require('./courses')

module.exports = (app) => {
  app.use('/courses', coursesRouter);
  app.use('/', coursesRouter);
};