const path = require('path')

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.s?css$/,
    loaders: [
      'style-loader',
      'css-loader',
      'sass-loader',
    ]
  })

  const resolve = config.resolve
  config.resolve = {
    ...resolve,
    alias: {
     '~': path.resolve(__dirname, '../'),
     ...resolve.alias
    }, 
    extensions: ['.ts', '.tsx', '.js', ...resolve.extensions],
  }

  return config
}
