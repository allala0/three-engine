const path = require('path');

const ENTRY_DIR = 'src';
const ENTRY_FILE = 'three-engine';
const ENTRY_EXT = 'js';

const BUILD_DIRECTORY = 'build';

const EXPORT_NAME = 'ThreeEngine';

const type = process.argv.indexOf('js') > -1 ? 'js' : process.argv.indexOf('cjs') > -1 ? 'cjs' : process.argv.indexOf('module') > -1 ? 'module' : 'min'; // min, js, cjs, module
const moduleType = type === 'module' ?  'module' : type === 'cjs' ? 'commonjs' : 'assign';

module.exports = {
    module: {
        rules: [
            {
                test: /.(js|cjs|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env', 
                            '@babel/preset-react'
                        ]
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            }
        ]
    },
    entry: {
        [ENTRY_FILE]: path.resolve(__dirname, ENTRY_DIR, ENTRY_FILE + '.' + ENTRY_EXT)
    },
    output: {
        path: path.resolve(__dirname, BUILD_DIRECTORY),
        library: {
            type: moduleType,
            ...(type === 'module' ? {} : {name: EXPORT_NAME, export: 'default'}),
        }
    },
    externals: [
        {'three': type === 'module' ? 'three' : 'THREE'},
        ...(type === 'module' ? [/^three\/addons\//] : [])
    ],
    ...(type === 'module' ? {experiments: {outputModule: true}} : {}),
    optimization: {
        minimize: type === 'min'
    }
}
