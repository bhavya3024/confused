// const router = require('express').Router();
// const contentSourcesRoute = require('./content-sources');
// const apiConfigurationsRoute = require('./api-configurations');
// const crawlsService = require('../services/api-crawl-service');

const crawlerService = require('../services/crawl-service');
const configurations = require('../configurations');

// router.use('/content-sources', contentSourcesRoute);
// router.use('/api-configurations', apiConfigurationsRoute);

const router = require('express').Router();

/* testing purposes */
router.get('/crawls', async (req, res) => {
    await crawlerService.crawlApi({
        moduleName: ['THE_DOG_API'],
        apiName: 'breeds',
        axiosQueryParams: {
            page: 0,
            limit: 10,
        }
    });

    await crawlerService.crawlApi({
        moduleName: ['THE_CAT_API'],
        apiName: 'breeds',
        axiosQueryParams: {
            page: 0,
            limit: 10,
        }
    });

    return res.sendStatus(200);



});


module.exports = router;