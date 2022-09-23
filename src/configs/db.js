const { default: mongoose } = require("mongoose");
require("dotenv").config();

const connect = async () => {
	try {
		return mongoose.connect(process.env.DB);
	} catch (error) {
		return console.log(error);
	}
};

module.exports = { connect };