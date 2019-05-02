var express = require('express');
var app = express();
var db = require('./Database.js');

app.use(express.json());

app.get('/post', (req, res) => {
	res.end(db.GetPost(req.query.pid).then());
});

app.get('/post/comments', (req, res) => {
	res.end(db.Get20Comments(req.query.pid, req.query.uid, req.query.index).then());
});

app.get('/follows/followed', (req, res) => {
	res.end(db.GetFollowers(req.query.uid).then());
});

app.get('/follows/followers', (req, res) => {
	res.end(db.GetFollowed(req.query.uid).then());
});

app.post('/post/create', (req, res) => {
	res.end(db.CreatePost(req.body.uid, req.body.body, req.body.privacy, req.body.topics).then());
});

app.post('/post/vote', (req, res) => {
	res.end(db.CreatePost(req.body.uid, req.body.pid, req.body.value).then());
});

app.post('/post/comment', (req, res) => {
	res.end(db.CreatePost(req.body.uid, req.body.pid, req.body.body).then());
});

app.post('/user/follow', (req, res) => {
	res.end(db.CreatePost(req.body.followerid, req.body.followedid).then());
});

app.delete('/user/unfollow', (req, res) => {
	res.end(db.CreatePost(req.body.followerid, req.body.followedid).then());
});


var server = app.listen(8080, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
});