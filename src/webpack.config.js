const webpack = require("webpack");
const path = require("path");
let config = {
    entry: "./src/index.js",
    output:{
        path: path.resolve(__dirname, "./public"),
        filename: "./bundle.js",
    },
    devServer:{
        port: 1234,
        contentBase: path.join(__dirname,'dist')
    }
}

module.exports = config;
