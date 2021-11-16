const { Schema } = require("mongoose");
const historySchema = require("../models/history");

const accountSchema = new Schema(
	{
		acctName: {
			type: String,
			required: true,
		},
		balance: {
			type: Number,
			required: true,
		},
		history: [historySchema],
	},
	{ timestamps: true }
);

module.exports = accountSchema;
