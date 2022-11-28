const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const NAME = 'three-engine';
const BUILD_DIRECTORY = 'build';

const USE_SOURCE_MAP_IN_DEVELOPMENT = true;
const USE_CONTENT_HASH_IN_DEVELOPMENT = true;
const USE_BUNDLE_ANALYZER_IN_DEVELOPMENT = false;
const BUILD_AS_MODULE = process.argv.indexOf('module') > -1;

module.exports = (env, argv) => {
    const IS_DEVELOPMENT = argv.mode === 'development';

    const commonConfig = {
        externals: {
            three: 'three',
          },
        devServer: {
            magicHtml: true,
            historyApiFallback: true,
         },
        ...(USE_SOURCE_MAP_IN_DEVELOPMENT && IS_DEVELOPMENT ? {devtool: 'source-map'} : {}),
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        'css-loader'
                    ]
                },
                {
                    test: /.(js|cjs|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                      "style-loader",
                      "css-loader",
                      "sass-loader",
                    ],
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: 'asset/resource'
                }
            ]
        }
    };
    
    const getConfig = type => {
        let filename = NAME;
        let isMin = type === 'min.js';
        let ext;
    
        if(type === 'module') ext = '.module.js';
        else if(type === 'js') ext = '.js';
        else if(type === 'min.js') ext = '.min.js'
        else if(type === 'commonjs') ext = '.cjs';
        else return;
    
        if(type === 'js' || type === 'min.js') type = 'global';
    
        return {
            ...commonConfig,
            ...(!BUILD_AS_MODULE ? {plugins: [
                new HtmlWebpackPlugin({
                    title: 'webpack-app',
                    filename: 'index.html',
                    template: 'src/template.html',
                    inject: type !== 'module',
                    ...(type === 'module' ?{scriptLoading: 'module'} : {})
                }),
                ...(USE_BUNDLE_ANALYZER_IN_DEVELOPMENT && IS_DEVELOPMENT ? [new BundleAnalyzerPlugin()] : [])
            ]} : {}),
            ...(type === 'module' ?{experiments: {
                outputModule: true
            }} : {}),
            entry: {
               [filename]: path.resolve(__dirname, 'src/three-engine.js')
            },
            output: {
                path: path.resolve(__dirname, BUILD_DIRECTORY),
                filename: '[name]' + (USE_CONTENT_HASH_IN_DEVELOPMENT && IS_DEVELOPMENT ? '[contenthash]' : '') + ext,
                assetModuleFilename: '[name][ext]',
                ...(BUILD_AS_MODULE ? {
                library: {
                    ...(type === 'module' ? {} : {name: NAME}),
                    type: type
                },
                } : {})
            },
            optimization: {
                minimize: isMin
            }
        }
    }

    return BUILD_AS_MODULE ? [
        getConfig('min.js'),
        getConfig('module'),
        getConfig('js'),
        getConfig('commonjs')
    ] : getConfig('min.js');
}
