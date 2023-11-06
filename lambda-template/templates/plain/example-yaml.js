module.exports = {
    "lambda-name":
    {
        "handler":
            "lambdaName.handler",
        "events": [{
            "schedule": {
                "rate": "cron(0 0 * * ? *)"
            }
        }]
    }
}