const {merge} = require('webpack-merge');
const common = require('./webpack.common');

const type = process.argv.indexOf('js') > -1 ? 'js' : process.argv.indexOf('cjs') > -1 ? 'cjs' : process.argv.indexOf('module') > -1 ? 'module' : 'min'; // min, js, cjs, module
const extension = type === 'cjs' ? '.cjs' : type === 'min' ? '.min.js' : type === 'module' ? '.module.js' : '.js';

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    'style-loader',
                    {loader: 'css-loader', options: {sourceMap: true}},
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: true,
                            postcssOptions: {
                                plugins: [
                                    [
                                        "autoprefixer",
                                        {
                                            
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    {loader: 'sass-loader', options: {sourceMap: true}}
                ]
            }
        ]
    },
    output: {
        filename: '[name][contenthash]' + extension
    }
});
