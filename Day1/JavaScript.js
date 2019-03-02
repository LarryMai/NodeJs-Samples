var server;
var ip = "127.0.0.1";
var port = 1234;
var http = require("http");

//設定http server，req參數是代表client傳來的要求，res代表server端的動作
server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    //取得路徑，依照路徑不同回覆client不同的資料
    var path = req.url;
    console.log("req.url : " + path);
    switch (path) {
        case "/index":
            res.end("index");
            break;
        case "/test":
            res.end("test");
            break;
        default:
            res.end('Hello World\n');
    }
    //當透過瀏覽器連接時，path除了顯示瀏覽器連的路徑外，還會顯示/favicon.ico(瀏覽器讀取icon的關係)
    console.log(path);
});

//啟動http server，監聽http行為
server.listen(port, ip);

console.log("Server running at http://" + ip + ":" + port);