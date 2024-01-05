// eslint-disable-next-line import/no-extraneous-dependencies
const webpack = require('webpack');

/** @type {import('webpack').webpack} */
module.exports = {
    mode: 'production',
    target: 'web',
    entry: './lib/umd/_tmp/index.js',
    output: {
        filename: 'index.js',
        path: `${__dirname}/../lib/umd`,
        library: {
            type: 'umd',
        },
    },
    // optimization: {
    //     minimize: false,
    // },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.JEST_WORKER_ID': JSON.stringify(process.env.JEST_WORKER_ID),
        }),
    ],
};
