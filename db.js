const mongoose = require('mongoose');
module.exports.db = mongoose.connect('mongodb://localhost:27017/penjualan', {
    useUnifiedTopology: true,
    useNewUrlParser: true
})