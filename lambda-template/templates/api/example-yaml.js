module.exports = {
    "lambda-name":
    {
        "handler":
            "lambdaName.handler",
        "events": [{
            "httpApi": {
                "method": "POST",
                "path": "/api/lambda-name",
                "authorizer": {
                    "name": "Authorizer"
                }
            }
        }],
        "iamRoleStatementsName": "${self:service}-${self:custom.stage}-lambda-name",
        "iamRoleStatements": [
            {
                "Effect": "Allow",
                "Action": ["dynamodb:Query", "dynamodb:PutItem", "dynamodb:UpdateItem"],
                "Resource": ["arn:aws:dynamodb:eu-west-1:227896414610:table/shops-production", "arn:aws:dynamodb:eu-west-1:227896414610:table/shops-production/index/legacyId-index"]
            }, {
                "Effect": "Allow",
                "Action": ["secretsmanager:GetSecretValue"],
                "Resource": ["arn:aws:secretsmanager:#{AWS::Region}:#{AWS::AccountId}:secret:nearlive/external/google-mybusiness-G0Crs8"]
            }]
    }
}