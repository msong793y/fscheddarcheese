const path = require('path');
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    devtool: "source-map",
    // module: {
    //     loaders: [
    //         {
    //             test: [/\.jsx?$/, /\.js?$/],
    //             exclude: /(node_modules|bower_components)/,
    //             loader: 'babel',
    //             query: {
    //                 presets: ['es2015']
    //             }
    //         }
    //     ]
    // },
    resolve: {
        extensions: ["*", ".js"]
    }
};