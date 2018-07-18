const jsonServer = require('json-server');
const routes = require('./db');

const server = jsonServer.create();
const router = jsonServer.router(routes);
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);

router.render = (req, res) => {
  const { statusCode } = res;
  switch (statusCode) {
    case 200:
      res.jsonp({
        status: 1,
        msg: '成功',
        data: {
          list: res.locals.data,
          total: res.getHeader('X-Total-Count')
        }
      });
      break;
    default:
      res.status(statusCode).jsonp({
        status: statusCode,
        msg: 'error',
        data: null
      });
  }
};

// Use default router
server.use('/api/', router);
server.listen(8801, () => {
  console.log('JSON Server is running on localhost:8801');
});
