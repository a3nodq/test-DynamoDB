var AWS = require("aws-sdk");
let awsConfig = {
    "region": "us-east-1",
    "endpoint": "http://localhost:8000",
    "accessKeyId": "AKIAIFF4E5K24YIJ6DVQ", "secretAccessKey": "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"
};
AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();
let fetchOneByKey = function () {
    var params = {
        TableName: "users",
        Key: {
            "userName": "alanoud" 
        }
    };
    docClient.get(params, function (err, data) {
        if (err) {
            console.log("users::fetchOneByKey::error - " + JSON.stringify(err, null, 2));
        }
        else {
            console.log("users::fetchOneByKey::success - " + JSON.stringify(data, null, 2));
        }
    })
}


fetchOneByKey();