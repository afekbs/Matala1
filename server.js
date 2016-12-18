/**
 * Created by bensimonaf on 14/12/2016.
 */
var http = require("http");
var readFromServer = require('fs');
var path=require ('path');

var server = http.createServer(function(request, response) {

    templateMatch(request,response);


});

server.listen(8080);

console.log("Server is listening");

function templateMatch(requestFromUser,responseToUser){

    switch (requestFromUser.url)
    {

        case "/screen=1": {


            readFromServer.readFile('templateA.html', function (err, html) {
                responseToUser.writeHeader(200, {"Content-Type": "text/html"});
                responseToUser.write(html);
                //responseToUser.end();
            });
            break;
        }


        case "/screen=2": {
            readFromServer.readFile('TemplateB.html', function (err, html) {
                responseToUser.writeHeader(200, {"Content-Type": "text/html"});
                responseToUser.write(html);
                //responseToUser.end();
            });
            break;
        }
        case "/screen=3": {
            readFromServer.readFile('TemplateC.html', function (err, html)
            {
                responseToUser.writeHeader(200, {"Content-Type": "text/html"});
                responseToUser.write(html);
                //responseToUser.end();
            });
            break;
        }
        case "/javas.js": {
            var pathFile=path.join(__dirname,'javas.js');
            var status= readFromServer.statSync(pathFile);
            responseToUser.writeHeader(200, {"Content-Type": "text/javascript","Content-Length":status.size});
            var steam=readFromServer.createReadStream(pathFile);
            steam.pipe(responseToUser);
            //responseToUser.end();

            break;
        }
        case "/tsconfig.json": {
            var pathFile=path.join(__dirname,'tsconfig.json');
            var status= readFromServer.statSync(pathFile);
            responseToUser.writeHeader(200, {"Content-Type": "text/javascript","Content-Length":status.size});
            var steam=readFromServer.createReadStream(pathFile);
            steam.pipe(responseToUser);
            //responseToUser.end();

            break;
        }

        default:
        {

           // {sendHtmlPage(responseToUser,"Unrecognized request");break;}

        }

    }


}