
var http = require('http');
var express = require('express');
var morgan = require('morgan')
const handlebars = require('express-handlebars');
var app = express();
var fs  = require('fs');
var url = require('url');
const path = require('path');
const { log } = require('console');
const cn = require('./config/db');
const route = require('./routes');
app.use(morgan('combined'));
cn.connect();


app.engine('hbs', handlebars.engine({
    extname:'.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));

route(app);

app.listen('8000', () => {
    console.log("http://localhost:8000");
});

// app.use(morgan('combined'))
// app.use(express.static(path.join(__dirname, 'img')))
// http.createServer((req, res) =>{
//     var parse = url.parse(req.url, true);
//     var path = parse.path;
//     if(path === "/")
//     {
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         fs.readFile('./src/index.html', 'utf-8', (err, data) =>
//             {
//                 if(err) throw err;
//                 res.write(data);
//                 res.end();
//             });
//     }
//     else
//     {
//        var load = "./src" + path + ".html";
       
//        fs.readFile(load, 'utf-8', (err, data) =>
//             {
//                 if(err) 
//                 {
//                     fs.readFile('./src/404.html', 'utf-8', (err, data) =>
//                     {
//                         if(err) throw err;
//                         res.write(data);
//                         res.end();
//                     });
//                 } else {
//                     fs.readFile(load, 'utf-8', (err, data) =>
//                     {
//                         if(err) throw err;
//                         res.write(data);
//                         res.end();
//                     });
//                 }
//             });
//     }
//     }
// ).listen(8000);
