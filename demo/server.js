//引用http模块
var http = require("http");
//url模块
var url = require("url");

var start = function(route, handle){
	http.createServer(function(request, response){
		var pathName = url.parse(request.url).pathname;
		console.log("Request for "+ pathName +" received...");
		//路由分发
		route(handle, pathName);
		response.writeHead(200, {"Content-Type":"text/plain"});
		response.write("flaldfla,hello world!");
		response.end();
	}).listen(8888);
	console.log("Server has started...");
}

exports.start = start;