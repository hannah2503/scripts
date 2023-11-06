const adapterApi = require('@laconia/adapter-api');
const laconia = require('@laconia/core');
const logger = require('@nearst/logger');
const tracing = require('@nearst/tracing')();

const dependencies = () => ({
    // Shops: Shop()
    // stripe: Stripe()
});

const lambdaName = async (event, dependencies) => {
    logger.info(event, dependencies);

    return 'happy as 🐑-da';
};

const apigateway = adapterApi.apigateway({
    inputType: 'params',
    errorMappings: {
        '.*': (error) => {
            tracing.setError(error);
            return {
                body: { error: { message: error.message } },
                statusCode: 500
            };
        }
    }
});

module.exports.handler = tracing.lambdaWrapper(laconia(apigateway(lambdaName)).register(dependencies));