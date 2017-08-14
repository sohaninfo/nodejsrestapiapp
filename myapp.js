var express = require('express');
var bodyParser = require('body-parser');
var app = express();


// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json 
app.use(bodyParser.json())
 

//app.use(express.bodyParser());
//app.use(bodyParser.urlencoded({
 //   extended: true
//}));
//app.use(bodyParser.json());

var effectiveUsers = [
	"rohan",
	"vivek",
	"vishal",
	"deepak"
];

var alldata = [

	{
		"name": "demo",
		"data": ["vivek", "amit"]
        }
]




app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/delegators', function (req, res) {

	
 
  var body = req.body;
  console.log("BOdy:", JSON.stringify(body, null, 2));

  var username = body.username;
  console.log("Looking for user: ", username);
  
  var found = false;
  for(var i = 0; i < alldata.length; i++) {
	if(username == alldata[i].name) {
		found=true;
		break;
	}
  }

  if(found) {
	//res.send(username);
        res.status(200).json(alldata[i].data)
  }
  else {
        res.status(200).json([])
  }
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
