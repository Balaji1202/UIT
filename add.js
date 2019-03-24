
var http = require('http');

var querystring = require('querystring');

var qs,a,b,result;
var fs = require('fs');
var server=http.createServer(function (req , resp){
	if(req.url=='/signup')
	{
		fs.readFile("./signup.html", function (error, pgResp) 
		{
            if (error) 
			{
                resp.writeHead(404);
                resp.write('Contents you are looking are Not Found');
            } 
			else 
			{
                resp.writeHead(200, { 'Content-Type': 'text/html' });
                resp.write(pgResp);
            }

			resp.end();
		});
	}
	else if(req.url.match(".jpg$")){

			var fileStream = fs.createReadStream(req.url);
			resp.writeHead(200,{"Content-Type": "img/jpg"});
			fileStream.pipe(resp);
		}
	else if(req.url=='/index.html')
	{
		fs.readFile("index.html", function (error, pgResp) 
		{
            if (error) 
			{
                resp.writeHead(404);
                resp.write('Contents you are looking are Not Found');
            } 
			else 
			{
                resp.writeHead(200, { 'Content-Type': 'text/html' });
                resp.write(pgResp);
            }

			resp.end();
		});
	}
	else if(req.url=='/signin')
	{
		fs.readFile("signin.html", function (error, pgResp) 
		{
            if (error) 
			{
                resp.writeHead(404);
                resp.write('Contents you are looking are Not Found');
            } 
			else 
			{
                resp.writeHead(200, { 'Content-Type': 'text/html' });
                resp.write(pgResp);
            }

			resp.end();
		});
	}
	else
	{
		
	}
});
server.listen(8080);
console.log("node js is running at port "+ server.address().port);
