const {merge} = require('webpack-merge');
const common = require('./webpack.web.common');

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
        filename: '[name][contenthash].js'
    }
});
