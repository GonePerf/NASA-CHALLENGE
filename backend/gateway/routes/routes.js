const router = require('express').Router();
const responseBuilder = require('../../responseBuilder')
const { v4: uuidv4 } = require('uuid');

router.get('/', function (req, res) {
    res.send(responseBuilder(200, 'Operation completed successfully!', {
        room: {
            code: uuidv4(),
        }
    }))
}),
router.get('/client', function (req, res) {
    throw new Error('Something went wrong..')
})

module.exports = router