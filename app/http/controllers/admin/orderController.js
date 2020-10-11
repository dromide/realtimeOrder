const Order = require('../../../models/order');

function orderController() {
  return {
    index(req, res) {
      Order.find({ status: { $ne: 'completed' } }, null, { sort: { 'cretedAt': -1 } }).populate('customerId', '-password').exec((err, orders) => {
        if (req.xhr) {
          return res.json(orders);
        } else {
          return res.render('admin/orders');
        }
      })
    }
  }
}

module.exports = orderController;