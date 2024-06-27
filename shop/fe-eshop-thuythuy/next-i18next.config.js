const path = require("path");
module.exports = {
	i18n: {
		locales: ["en", "cz", "vn"],
		defaultLocale: "vn",
		localeDetection: false,
	},
	localePath: path.resolve("./public/locales"),
};
