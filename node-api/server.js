var port = process.env.PORT || 8080;
var express = require("express"); 
var app = express();
var request = require('request');
var URL = require('url-parse');
var dashboard = [];
var pipelines = [];
// var p_id_store = [];

var cors = require('cors');

app.use(cors());


setInterval(function() {
    var p1_data;
    var aws = {  
        url: 'https://gitlab.openebs.ci/api/v4/projects/7/pipelines',
        headers: {'PRIVATE-TOKEN': 'Q3VWd1rxg3NL5Zv75jw3'}
    };
    request(aws, function(err, response, body) {
        if (!err && response.statusCode == 200) {  
            p1_data = JSON.parse(body);
            for (i = 0; i < p1_data.length; i++) {
                var url = (new URL(p1_data[i].web_url).pathname).split("pipelines");
                p_id = p1_data[i].id;
                sha = p1_data[i].sha;
                p1_data[i].commit_url = "https://github.com" + url[0] + "commit/" + sha;  
                p1_data[i].cloud_id = 1;
                p1_data[i].log_link = "https://e2elogs.test.openebs.io/app/kibana#/discover?_g=()&_a=(columns:!(_source),filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:c18728c0-a156-11e8-8b91-cb4b4edefe7f,key:commit_id,negate:!f,params:(query:'"+ sha + "',type:phrase),type:phrase,value:'" + sha + "'),query:(match:(commit_id:(query:'" + sha + "',type:phrase)))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:c18728c0-a156-11e8-8b91-cb4b4edefe7f,key:pipeline_id,negate:!f,params:(query:'"+ p_id + "',type:phrase),type:phrase,value:'"+ p_id + "'),query:(match:(pipeline_id:(query:'"+ p_id + "',type:phrase))))),index:c18728c0-a156-11e8-8b91-cb4b4edefe7f,interval:auto,query:(language:lucene,query:''),sort:!('@timestamp',desc))";
            }
            pipelines[0] = p1_data;
        } else {
            console.log("aws_pipeline_error =",err);
        }
    });
    // if (p_id_store != "") {
    //     for (k = 0; k < 3; k++) {
    //         var aws_jobs = {  
    //             url: "https://gitlab.com/api/v4/projects/7642571/pipelines/" + p_id_store[k] + "/jobs/",
    //             headers: {'PRIVATE-TOKEN': 'K1Hdz5g9SqwuW7btpkzh'}
    //         };
    //         request(aws_jobs, function(err, response, body) {  
    //                 var j_data = JSON.parse(body);
    //             if (!err && response.statusCode == 200 && j_data.pipeline != "") {
    //                 if (j_data.pipeline.id == p_id_store[k]) {
    //                     p1_data[k].jobs = j_data; 
    //                 }
    //                 // console.log(j_data);
    //             } else {
    //                 console.log("aws_pipeline_error =",err);
    //             }
    //             sleep(4000);
    //         });
    //         sleep(4000);
    //     }
    // }
    var gcp = {  
        url: 'https://gitlab.openebs.ci/api/v4/projects/9/pipelines',
        headers: {'PRIVATE-TOKEN': 'Q3VWd1rxg3NL5Zv75jw3'}
    };
    request(gcp, function(err, response, body) {
        if (!err && response.statusCode == 200) {  
            var p2_data = JSON.parse(body);
            for (j = 0; j < p2_data.length; j++) {
                var url = (new URL(p2_data[j].web_url).pathname).split("pipelines");
                p_id = p2_data[j].id;
                sha = p2_data[j].sha;
                p2_data[j].commit_url = "https://github.com" + url[0] + "commit/" + sha;
                p2_data[j].cloud_id = 2;
                p2_data[j].log_link = "https://e2elogs.test.openebs.io/app/kibana#/discover?_g=()&_a=(columns:!(_source),filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:c18728c0-a156-11e8-8b91-cb4b4edefe7f,key:commit_id,negate:!f,params:(query:'"+ sha + "',type:phrase),type:phrase,value:'" + sha + "'),query:(match:(commit_id:(query:'" + sha + "',type:phrase)))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:c18728c0-a156-11e8-8b91-cb4b4edefe7f,key:pipeline_id,negate:!f,params:(query:'"+ p_id + "',type:phrase),type:phrase,value:'"+ p_id + "'),query:(match:(pipeline_id:(query:'"+ p_id + "',type:phrase))))),index:c18728c0-a156-11e8-8b91-cb4b4edefe7f,interval:auto,query:(language:lucene,query:''),sort:!('@timestamp',desc))";
            }
            pipelines[1] = p2_data;
        } else {
            console.log("gcp_pipeline_error =",err);
        }
    });
    dashboard = { "dashboard" : { "pipelines": pipelines , "cloud" : cloud }}; 
    app.get("/api/dashboard", function(req, res)  {
      res.json(dashboard);
    });
},3000 );

var cloud = [{"cloud_id":1,"cloud_name":"aws"},{"cloud_id":2,"cloud_name":"gce"}];

app.listen(port, function() {
    sleep(3000);  
    console.log("server is listening on port:", port);
});
module.exports = app;

function sleep(ms) {
    return new Promise(function (resolve) {
        setTimeout(resolve, ms);
    });
}