const path = require ('path');
const { CleanWebpackPlugin } = require ('clean-webpack-plugin');
const nodeExternals = require ('webpack-node-externals');
module.exports = {
  'entry' : './src/index.js' ,
  'externalsPresets': { node: true },
  'externals' : [ new nodeExternals() ],
  'output' : {
    'filename' : 'bundle.js' ,
    'path' : path.resolve (__dirname , 'dist') ,
    'libraryTarget' : 'commonjs' 
  } , 
  'plugins' : [ new CleanWebpackPlugin () ] ,
  'resolve' : {
    'extensions' : [ '.js' , '.jsx' ]
  } ,
  'module' : {
    'rules' : [ {
        'test' : /\.(js|jsx)$/ ,
        'exclude' : /node_modules/ ,
        'use': {
            'loader': 'babel-loader',
            'options': {
                'presets': [
                  ['@babel/preset-env', {
                    "targets": "defaults" 
                  }],
                  '@babel/preset-react'
                ],
                'plugins': ['@babel/plugin-proposal-object-rest-spread']
              }
          } 
      } , { 
        'test' : /\.(css|scss)$/ ,
        'use' : [ 'style-loader' , 'css-loader' , 'sass-loader' ] ,
        'include' : path.resolve (__dirname , './src')
      } ]
  }
};