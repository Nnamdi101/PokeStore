var express = require("express");
var mongoose = require("mongoose");



var app = express();




//middleware
app.use(function(req, res, next){
	console.log(`${req.method} request for ${req.url}`);
	next();
});
app.use(express.static("./front-end"));
app.all("*",function(req,res,next){
	var path = req.path;
	if(path.search("/api/*")!= -1){
		next();
	}else{
		res.sendFile(__dirname+'/front-end/PokeStore.html');
	}


})


//mongoose collection
mongoose.connect("mongodb://localhost:27017/pokestore",function(err,db){
	if(!err){
		console.log("connected to mongodb");
	}
});

var Item = mongoose.model('item', {name: String});

app.get('/api/allItems',function(req, res){
	Item.find({}).exec(function(err, result){
		res.send(result);
	})
})



app.listen(8888,'0.0.0.0');

console.log("listening on port 8888");

module.exports = app;

