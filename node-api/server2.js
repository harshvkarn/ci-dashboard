var port = process.env.PORT || 8080;
var express = require("express"); 
var app = express();
var request = require('request');
var project = [];
var pipelines = [];

var projects = {  
  url: 'https://gitlab.openebs.ci/api/v4/projects/',
  headers: {
      'PRIVATE-TOKEN': 'TKL_5Q92evdPTunhtPM4'
  }
};

setInterval(function() { 
  request(projects, function(err, response, body) { 
    if (!err && response.statusCode == 200) {
      var data = JSON.parse(body);
      for (var i = 0; i < data.length; i++) {
        project[i] = { "project_id" : data[i].id, "project_name" : data[i].name };
      }
    }
    var p = 0;
    for (var j = 0; j < project.length; j++ ) {
      // if(project[j].project_name == "e2e-infrastructure") {
      //   var p_id = project[j].project_id;
      //   var pipeline = {
      //     url: "https://gitlab.openebs.ci/api/v4/projects/" + p_id + "/pipelines/",
      //     headers: {
      //       'PRIVATE-TOKEN': 'TKL_5Q92evdPTunhtPM4'
      //     }
      //   };
      //   request(pipeline, function(err, response, body) {
      //     if (!err && response.statusCode == 200) {  
      //       var data = JSON.parse(body);
      //       pipelines[p] = {"infrastructure" : data[0]};
      //       p++;
      //     }
      //   });
      // }
      if(project[j].project_name == "e2e-aws") {
        var aws_p_id = project[j].project_id; 
        var pipeline = {
          url: "https://gitlab.openebs.ci/api/v4/projects/" + aws_p_id + "/pipelines/",
          headers: {
            'PRIVATE-TOKEN': 'TKL_5Q92evdPTunhtPM4'
          }
        };
        request(pipeline, function(err, response, p_body) {
          if (!err && response.statusCode == 200) { 
            var p_data = JSON.parse(p_body);
            var aws_j_id = p_data[0].id;
          }
          var jobs = {
            url: "https://gitlab.openebs.ci/api/v4/projects/" + aws_p_id + "/pipelines/" + aws_j_id + "/jobs/",
            headers: {
              'PRIVATE-TOKEN': 'TKL_5Q92evdPTunhtPM4'
            }
          };
          request(jobs, function(err, response, j_body) {
            if (!err && response.statusCode == 200) {
              var j_data = JSON.parse(j_body);
              pipelines[p] = {"aws" : p_data[0], "aws-jobs" : j_data };
              p++;
            }
            else {
              console.log("error =",err,",","status =",response.statusCode);
            }
          });
        });
      }

      if(project[j].project_name == "e2e-gcp") {
        var gcp_p_id = project[j].project_id; 
        var pipeline = {
          url: "https://gitlab.openebs.ci/api/v4/projects/" + gcp_p_id + "/pipelines/",
          headers: {
            'PRIVATE-TOKEN': 'TKL_5Q92evdPTunhtPM4'
          }
        };
        request(pipeline, function(err, response, p_body) {
          if (!err && response.statusCode == 200) { 
            var p_data = JSON.parse(p_body);
            var gcp_j_id = p_data[0].id;
          }
          var jobs = {
            url: "https://gitlab.openebs.ci/api/v4/projects/" + gcp_p_id + "/pipelines/" + gcp_j_id + "/jobs",
            headers: {
              'PRIVATE-TOKEN': 'TKL_5Q92evdPTunhtPM4'
            }
          };
          request(jobs, function(err, response, j_body) {
            if (!err && response.statusCode == 200) {
              var j_data = JSON.parse(j_body);
              pipelines[p] = {"gcp" : p_data[0], "gcp-jobs" : j_data };
              p++;
            }
            else {
              console.log("error =",err,",","status =",response.statusCode);
            }
          });
        });
      }
    }
  });

  app.get("/api/dashboard", function(req, res)  {
    res.json(pipelines);
  });


  // app.get("/api/dashboard/aws", function(req, res)  { 
  //   request(options, function(err, output, body) {  
  //     var data = JSON.parse(body);
  //     var mdata = [];
  //     for (var i = 0; i < 10; i++) {
  //       mdata[i] = [{ 'commit' : data[i].sha, 'build' : { 'id' : data[i].id, 'status' : data[i].status, 'web_url' : data[i].web_url } }, { 'aws' : { 'status' : data[i].status, 'web_url' : data[i].web_url } }, { 'gcp' : { 'status' : data[i].status, 'web_url' : data[i].web_url }}];
  //     }
  //     // console.log(json);
  //     res.json(mdata); //then returning the response.. The request.json is empty over here
  //   });
  // });
},2000 );

app.listen(port, function() {  
    console.log("server is listening on port:", port);
});
module.exports = app;