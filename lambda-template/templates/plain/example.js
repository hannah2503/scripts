
const logger = require('@nearst/logger');
const tracing = require('@nearst/tracing')();


const lambdaName = async (event, context) => {
    logger.info(event, context);

    return 'happy as 🐑-da';
};



module.exports.handler = tracing.lambdaWrapper(lambdaName);