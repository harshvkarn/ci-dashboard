var port = process.env.PORT || 8080;
var express = require("express"); 
var app = express();
var request = require('request');
var dashboard = [];
var projects;

var cloud = [{"order":1,"id":1,"cloud_name":"aws","cloud_id":1},{"order":2,"id":2,"cloud_name":"gce","cloud_id":2}];

setInterval(function() { 
    var project = { url: 'https://gitlab.openebs.ci/api/v4/projects/' };
    request(project, function(err, response, body) {
        if (!err && response.statusCode == 200) {  
            var data = JSON.parse(body);
            projects = data;
        } else {
            console.log("error =",err, "," , "status =",response.statusCode);
        }
    });
    dashboard = { "dashboard" : {"projects": projects , "cloud" : cloud }}; 
    app.get("/api/dashboard", function(req, res)  {
      res.json(dashboard);
    });
},2000 );

app.listen(port, function() {  
    console.log("server is listening on port:", port);
});
module.exports = app;