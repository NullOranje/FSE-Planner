const path = require("path");
const fs = require("fs");

module.exports = function override(config, env) {
    config.module.rules.push({
        test: /\.worker\.js$/,
        use: { loader: 'worker-loader' }
    });
    return config;
}
