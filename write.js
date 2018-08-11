var AWS = require("aws-sdk");
let awsConfig = {
    "region": "us-east-1",
    "endpoint": "http://dynamodb.us-east-1.amazonaws.com",
    "accessKeyId": "AKIAIFF4E5K24YIJ6DVQ", "secretAccessKey": "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"
};
AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();

let save = function () {

    var input = {
        "userName": "alanoud" , "created_by": "clientUser", "created_on": new Date().toString(),
        "updated_by": "clientUser", "updated_on": new Date().toString(), "is_deleted": false
    };
    var params = {
        TableName: "Users",
        Item:  input
    };
    docClient.put(params, function (err, data) {

        if (err) {
            console.log("users::save::error - " + JSON.stringify(err, null, 2));                      
        } else {
            console.log("users::save::success" );                      
        }
    });
}

save();