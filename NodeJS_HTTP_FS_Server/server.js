/*
 * Here, you should write a simple server to serve files statically.
 */

/*
Useful syntax
arr.forEach(callback[, thisArg])
fs.readFileSync(file[, options]) // Synchronous version of fs.readFile. Returns the contents of the file.
fs.readFile(file[, options], callback) // Asynchronously reads the entire contents of a file.
fs.readdir(path[, options], callback)
http.createServer([requestListener])
*/

var path = require('path');
var http = require('http');
var fs = require('fs');

var staticDir = path.join(__dirname, 'public');
var indexFilename = 'index.html';
var notFoundFilename = '404.html';
var port = process.env.PORT || 3000;
var flist_contents = {};

function handleFile(err,flist)
{
    if(err)
    {
        throw err;
    }

    flist.forEach(function(file){
        var fpath = path.join(staticDir,file);
        fs.readFile(fpath,'utf8',function(err,content){
            if(err)
            {
                throw err;
            }
            flist_contents[file] = content;
            console.log("I'm reading "+fpath);
        });
        //console.log("come 1st");
    });
    //console.log("come 2st");
}
//readFile ahead,instead of readfile in the handleRequest for several times.
// possible wrong: another way is to read specific file in each specific branch.
fs.readdir(staticDir,handleFile);

function handleRequest(req,res)
{
    var filename = req.url;
    var status_code = 200;
    if(filename[0] === '/')
    {
        filename = filename.substr(1);
    }
    if(filename === '')
    {
        filename = indexFilename;
    }
    if(!flist_contents[filename])
    {
        filename = notFoundFilename;
        status_code = 404;
    }
    res.writeHead(status_code);
    console.log("requesting url "+ req.url);
    console.log("I'm writing " + filename);
    res.write(flist_contents[filename]);
    res.end();
}

var server = http.createServer(handleRequest);

server.listen(port);
console.log("== Server listening on port:",port);