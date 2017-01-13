var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));


app.get('/', function(request, response) {
  var output = {
		name : "Subbu",
		firstName : "Subramanian",
		lastName : "Palanikumar"
	};

	response.json(output);
});

app.get("/Users" , function(req, res) {

	var output = {
		name : "Subbu",
		firstName : "Subramanian",
		lastName : "Palanikumar"
	};

	res.json(output);

})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


