const {merge} = require('webpack-merge');
const common = require('./webpack.common');

const type = process.argv.indexOf('js') > -1 ? 'js' : process.argv.indexOf('cjs') > -1 ? 'cjs' : process.argv.indexOf('module') > -1 ? 'module' : 'min'; // min, js, cjs, module
const moduleType = type === 'module' ?  'module' : type === 'cjs' ? 'commonjs' : 'global';

module.exports = merge(common, {
    output: {
        library: {
            type: moduleType,
            ...(type === 'module' ? {} : {name: '[name]'})
        }
    },
    ...(type === 'module' ? {experiments: {outputModule: true}} : {}),
    optimization: {
        minimize: type === 'min'
    }
});
