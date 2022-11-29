const {merge} = require('webpack-merge');
const common = require('./webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HTML_TEMPLATE_PATH = 'src/template.html';
const HTML_OUTPUT_FILE = 'index.html';

module.exports = merge(common, {
    devServer: {
        magicHtml: true,
        historyApiFallback: true,
        open: true,
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: HTML_OUTPUT_FILE,
            template: HTML_TEMPLATE_PATH,
            inject: true
        })
    ]
});
