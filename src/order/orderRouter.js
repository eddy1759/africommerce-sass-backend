const orderRouter = require('express').Router()

const { createOrder } = require('./orderController')

const authenticate = require('../../middleware/authenticate')

orderRouter.route('/').all(authenticate.verifyUser).post(createOrder)


module.exports = orderRouter