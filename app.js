var http = require('http');
var socketio = require('socket.io');
var fs = require('fs');

// // xxxx番ポートでHTTPサーバを立てる
// console.log(typeof (
//     http.createServer(function (req, res) {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.end(fs.readFileSync('./index.html', 'utf-8'));
//     }).listen(8000)
// ));

// var server = http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.end(fs.readFileSync('./index.html', 'utf-8'));
// }).listen(8000);

var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(fs.readFileSync('./index.html', 'utf-8'));
});
server.listen(8000);

console.log(typeof (server));

/*
// サーバにソケットを紐づけ
var io = socketio.listen(server);

// 接続確立後の通信処理を定義
io.sockets.on('connection', function (socket) {

    // クライアントからサーバへ、メッセージ送信ハンドラ（自分を含む全員宛て）
    socket.on('c2s_message', function (data) {
        // サーバからクライアントへ、メッセージ送り返し
        io.sockets.emit('s2c_message', { value: data.value });
    });

    // クライアントからサーバへ、メッセージ送信ハンドラ（自分以外の全員宛て）
    socket.on('c2s_broadcast', function (data) {
        // サーバからクライアントへ、メッセージ送り返し
        socket.broadcast.emit('s2c_message', { value: data.value });
    });

});
*/