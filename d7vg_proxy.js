/**
 * Created by Shrimp on 16/7/31.
 */
var
    http = require('http'),
    httpProxy = require('http-proxy');


var proxy = httpProxy.createServer({})

http.createServer(function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Allow-Headers', '*');
    proxy.web(req, res, {target: 'http://120.55.124.66:80', changeOrigin: true});
}).listen(9003);
