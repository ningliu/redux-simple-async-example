var path = require('path')
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('../webpack.config')

var app = new (require('express'))()
var port = 3000

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.get("/", function(req, res) {
  const indexFile = path.resolve(__dirname, '../client/index.html');
  console.log('index html: ', indexFile);
  res.sendFile(indexFile);
})

app.get("/options", function(req, res) {
  setTimeout(function() {
    res.send({
      categories: ['beer', 'milk', 'juice', 'water']
    })}, 
  2000);
})

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})
