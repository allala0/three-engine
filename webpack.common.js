const path = require('path');

const ENTRY_DIR = 'src';
const ENTRY_FILE = 'three-engine';
const ENTRY_EXT = 'js';

const BUILD_DIRECTORY = 'build';

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
        path: path.resolve(__dirname, BUILD_DIRECTORY)
    }
}
