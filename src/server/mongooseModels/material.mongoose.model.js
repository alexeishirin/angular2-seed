"use strict";
var mongoose = require('mongoose');
exports.MaterialSchema = new mongoose.Schema({
    name: { type: String, required: true },
    quantity: Number,
    price: Number
});
exports.Material = mongoose.model('TimeLog', exports.MaterialSchema);
//# sourceMappingURL=material.mongoose.model.js.map